"use strict";
const request = require('request-promise');

// exports.process = processTrigger;
exports.deleteModel = deleteObject;

function deleteObject()
{
     request.get("http://services.odata.org/TripPinRESTierService/(S(bm2bgnnmqjwlvj4gs5qe3u13))/People('russellwhyte')")
        .then((response) => {

            const model = {};

            // transforming a simple array of statuses into a select model
            response.forEach((next) => {
                model[next] = next.charAt(0).toUpperCase() + next.substring(1);
            });

            return model;
        });



}
// function deleteObject()
// {
//   var Request = require("request");
//   Request("http://services.odata.org/TripPinRESTierService/(S(bm2bgnnmqjwlvj4gs5qe3u13))/People('russellwhyte')", (error, response, body) => {
//      if(error) {
//         return console.dir(error);
//      }
//      getObjects:JSON.parse(body);

//      console.dir(JSON.parse(body));
//   });
// }