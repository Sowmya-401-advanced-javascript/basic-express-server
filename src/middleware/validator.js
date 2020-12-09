'use strict';

function validator(req, res, next) {
    console.log(req.query);
    if(req.query.name){
       next();
    } else {
        next('Req query does not contain a name');
    }
}

module.exports = validator;