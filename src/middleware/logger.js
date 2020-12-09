'use strict';

function logRequest(req, res, next){
    console.log('__Request__ ', req.method, req.path);
    next();
}

module.exports = logRequest;