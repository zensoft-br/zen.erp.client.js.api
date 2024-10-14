import AsyncIteratorZen, { RequestInitIteratorZen } from "./AsyncIteratorZen.js";

/*
 * Iterables can be used in 'for' loops.
 * ex:
 * iterable = new AsyncIterable(...);
 * for await (value of iterable) console.log(value);
 *
 * We can extract an Iterator from an Iterable.
 * ex:
 * iterable = new AsyncIterable(...);
 * iterator = iterable[Symbol.asyncIterator]();
 * await iterator.next();
 */
export default class AsyncIterableZen<T> implements AsyncIterable<T> {
  private readonly _input: RequestInfo;

  private readonly _init?: RequestInitIteratorZen;

  constructor(input: RequestInfo, init?: RequestInitIteratorZen) {
    this._input = input;
    this._init = init;
  }

  [Symbol.asyncIterator](): AsyncIterator<T, any, undefined> {
    return new AsyncIteratorZen(this._input, this._init);
  }
}
