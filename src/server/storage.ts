"use strict";

import * as NodePersist from "node-persist";

const promise = NodePersist.init();

export default class Persist {
  public static get(name) {
    return promise.then(function (store) {
      return NodePersist.getItem(name);
    })
  }

  public static set(name, value) {
    return promise.then(function (store) {
      return NodePersist.setItem(name, value);
    })
  }
}
