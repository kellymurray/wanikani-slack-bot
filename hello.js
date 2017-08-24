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

    cb(null, {text: "こんにちわ! Your top critical word today is " + result.requested_information[0].character + ". It means _" + result.requested_information[0].meaning + "_.",

      "attachments": [
        { "text": "Do you want to see your next critical word?",
          "callback_id": "wanikani_crit",
          "color": "#3AA3E3",
          "attachment_type": "default",
          "actions": [
            {
              "name": "yes",
              "text": "Yes",
              "type": "button",
              "value": "yes"
            },
            {
              "name": "no",
              "text": "No",
              "type": "button",
              "value": "no"
            }
          ] //actions end

        }];

    });

  });

};
