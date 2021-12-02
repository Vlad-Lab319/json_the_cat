const request = require('request');

const args = process.argv.splice(2);
const breed = args[0];

const path = `https://api.thecatapi.com/v1/breeds/search?q=` + breed;

let data;

// const fetchHandle = request(path, (error, response, body) => {
//   data = body;
//   fs.writeFile(file, data, err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   })
//   return data;
// });

// return fetchHandle;

request(path, (error, response, body) => {
  if (error) {
    return console.error(`Sorry, that cat is not found`, error);
  }
  data = JSON.parse(body);
  console.log(`Type of body: ${typeof data}`, data[0].description);
});