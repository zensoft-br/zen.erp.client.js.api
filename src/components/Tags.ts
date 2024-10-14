export default class Tags {
  private _tags: string[];

  public static from(tags: string | null): Tags {
    return new Tags(tags);
  }

  public constructor(tags: string | null) {
    if (tags) {
      this._tags = tags.split(",");
      this._tags.sort();
    } else {
      this._tags = [];
    }
  }

  public add(tag: string): Tags {
    if (!tag) return this;

    if (this._tags.indexOf(tag) === -1) {
      this._tags.push(tag);
      this._tags.sort();
    }
    return this;
  }

  public remove(tag: string): Tags {
    if (!tag) return this;

    const i = this._tags.indexOf(tag);
    if (i !== -1) {
      this._tags.splice(i, 1);
    }
    return this;
  }

  public contains(tag: string): boolean {
    for (const t of tag.split(",")) {
      if (this._tags.indexOf(t) !== -1) return true;
    }
    return false;
  }

  public toString(): string {
    return this._tags.join(",");
  }

  public toArray(): string[] {
    return [...this._tags];
  }
}
