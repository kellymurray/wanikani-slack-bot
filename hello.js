'use strict';

const request = require('request');

const baseURL = "https://www.wanikani.com/api/user/";
let url = baseURL+ "b519f17cd3b964e8fe3ba0f999ab318c/critical-items/95";
console.log(url);

const callAPI = (url) => {
  request.get(url) {
    console.log(url);
  });
};

callAPI();

module.exports = function(ctx, cb) {



}
