const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const path = `https://api.thecatapi.com/v1/breeds/search?q=` + breedName;

  let data;

  request(path, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    // console.log('statusCode:', response && response.statusCode);
    data = JSON.parse(body);
    if (data[0].description) {
      callback(null, data[0].description);
    } else {
      callback(error, null);
    }
  });

};

module.exports = { fetchBreedDescription };