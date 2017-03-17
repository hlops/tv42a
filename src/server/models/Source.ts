"use strict";

export class Source {
  private _id;
  private _name;
  private _type: SourceType;
  private _status;

  constructor(id, name, type: SourceType) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._status = SourceStatus.idle;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get type(): SourceType {
    return this._type;
  }

  get status() {
    return this._status;
  }
}

export enum SourceType {
  m3u, xlmtv
}

export enum SourceStatus {
  idle, processing
}
