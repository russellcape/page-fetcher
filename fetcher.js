//fetch a specified url to a specified local file
//source url come from process.argv[2]
//destination comes from process.argv[3]

const request = require("request")

request(process.argv[2], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

const fs = require('fs');

fs.writeFile(process.argv[3], "Hey there!", function(err) {
  if(err) {
    return console.log(err);
    }
    console.log("The file was saved!");
}); 