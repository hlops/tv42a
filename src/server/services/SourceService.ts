"use strict";

import Persist from "../storage";
import {Source} from "../models/Source";

export function getSources() {
  return Persist.get('sources').then(function (sources) {
    return sources;
  });
}

export function addSource(source: Source) {
  return Persist.get('sources').then(function (sources) {
    sources[source.id] = source;
    return sources;
  }).then(function (sources) {
    Persist.set('sources', sources);
  });
}
