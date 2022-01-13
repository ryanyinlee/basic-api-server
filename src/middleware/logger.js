'use strict'

function logger(request, response, next) {

    console.log("Request " + request);    
    
    next();
}

module.exports = logger;