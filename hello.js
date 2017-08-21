var request = require('request');

module.exports = function(ctx, cb) {

  var baseURL = "https://www.wanikani.com/api/user/";
  var apiKey = ctx.secrets.wanikani_api_key;
  var url = baseURL + apiKey + "/critical-items/95";
  console.log(url);
  
  request.get(url, function (error, res, body) {
    if (error) {
      console.log(error);
      cb(null, error);
    } else {
      var result = JSON.parse(body);
      console.log(result.requested_information[0].character);
    }
 
  cb(null, {text: "こんにちわ! Your top critical word today is " + result.requested_information[0].character + ". It means _" + result.requested_information[0].meaning + "_."
  
    });

  });

};

