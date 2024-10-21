export interface RequestInitIteratorZen extends RequestInit {
  fetchSize?: number;
}

export default class AsyncIteratorZen<T> implements AsyncIterator<T> {
  private readonly _input: RequestInfo;

  private readonly _init?: RequestInitIteratorZen;

  private readonly _url: URL;

  private readonly _fetchSize: number;

  private readonly _first: number;

  private readonly _max: number;

  private _buffer: T[] = [];

  private _done = false;

  // Controls when "next" is called more than once after done (just for debugging purposes)
  private _exhausted = false;

  private _page = 0;

  constructor(input: RequestInfo, init?: RequestInitIteratorZen) {
    this._input = input;
    this._init = init;

    // input must not contain a hostname, so we will fake one
    this._url = new URL(`http://host${this._input.toString()}`);

    // Fetch size
    this._fetchSize = this._init?.fetchSize ?? 50;

    // Parse search params and save 'first' and 'max'
    const params = new URLSearchParams(this._url.search);
    this._first = parseInt(params.get("first") ?? "0", 10);
    this._max = parseInt(params.get("max") ?? "0", 10);
  }

  async next(): Promise<IteratorResult<T>> {
    const debug = (<any>window)._zen?.debug;

    // Retrieve from buffer
    if (this._buffer.length) {
      // TODO ! not null assertion
      return { value: this._buffer.shift()!, done: false };
    }

    // Done
    if (this._done) {
      if (debug && this._exhausted) {
        console.warn("Iterator exhausted");
      }
      this._exhausted = true;
      return { value: undefined, done: true };
    }

    // Calculate the first record to be retrieved
    let first;
    if (this._fetchSize > 0) {
      first = this._page * this._fetchSize + this._first;
    } else {
      first = this._first;
    }

    // If 'max' param is present in the original input, we must not deliver
    // more records than that
    let max;
    if (this._max > 0 && this._max <= (this._page + 1) * this._fetchSize) {
      max = this._max - first;
      this._done = true;
    } else {
      max = this._fetchSize;
    }
    if (max > 0) {
      max++;
    }

    const params = new URLSearchParams(this._url.search);
    params.set("first", String(first));
    if (max > 0) {
      params.set("max", String(max));
    }

    const input = `${this._url.pathname}?${params.toString()}`;

    if (debug) {
      console.debug(`${this.constructor.name}, Fetching ${input}`);
    }

    const web = (<any>window).zen?.ctx.web;
    const response = await web.fetch(input, this._init);
    await web.handleResponse(response);
    this._buffer = <T[]>await response.json();

    // Increment page
    this._page++;

    // No more records
    if (!this._buffer.length) {
      this._done = true;
      this._exhausted = true;
      return { value: undefined, done: true };
    }

    // If we got less records than fetchSize, it means there is no more records
    if (max === 0 || this._buffer.length < max) {
      this._done = true;
    } else {
      // Discard last element
      this._buffer.pop();
    }

    // TODO ! not null assertion
    return { value: this._buffer.shift()!, done: false };
  }
}
