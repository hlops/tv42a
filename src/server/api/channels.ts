"use strict";

export function setRoutes(router) {
  router.get('/', function (req, res, next) {
    return res.json({
      message: 'Hello channels!!!1'
    });
  });
  return router;
}
