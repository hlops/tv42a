"use strict";

import * as SourceService from "../services/SourceService";
import {Source} from "../models/Source";

export function setRoutes(router) {

  function processError(res: any, promise: Q.Promise<any>) {
    promise.catch(function () {
    }).done();
  }

  /**
   * Get all sources
   */
  router.get('/', function (req, res) {
    processError(res, SourceService.getSources().then(function (sources) {
      res.json(sources);
    }));
  });

  /**
   * Add new source
   */
  router.post('/', function (req, res, next) {
    let [id, name, type]  = req.query;
    let source = new Source(id, name, type);

  });

  return router;
}
