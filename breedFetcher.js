const request = require('request');

// const args = process.argv.splice(2);
// const breed = args[0];



const fetchBreedDescription = function(breedName, callback) {
  const path = `https://api.thecatapi.com/v1/breeds/search?q=` + breedName;

  let data;

  request(path, (error, response, body) => {
    if (error) {
       callback(error, null);
    }
    //console.error('error: ', error);
    console.log('statusCode:', response && response.statusCode);
    data = JSON.parse(body);
    // console.log(`Type of body: ${typeof data}`, data[0].description);
    //console.log(`Type of body: ${typeof data}`, data);
    if(data === []) {
      callback(error, null);
    } else {  
      console.log(data);
      // callback(null, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };