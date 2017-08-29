'use latest';

const request = require('request');

module.exports = function(ctx, cb) {

  const baseURL = "https://www.wanikani.com/api/user/";
  const apiKey = ctx.secrets.wanikani_api_key;
  const url = baseURL + apiKey + "/critical-items/95";
  console.log(url);

  request.get(url, function (error, res, body) {
    if (error) {
      console.log(error);
      cb(null, error);
    } else {
      var result = JSON.parse(body);
      console.log(result.requested_information[0].character);
    }

    cb(null, {text: "Your second critical word today is " + result.requested_information[1].character + ". It means _" + result.requested_information[1].meaning + "_.",

    });

  })

}
