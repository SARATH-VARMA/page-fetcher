const request = require('request');
const fs = require('fs');

const arr = process.argv.slice(2);
request(arr[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if(error || response.statusCode !== 200) {
    console.log("Unable to download the resource")
  }
  else {
    fs.writeFile(arr[1],body,function(err){
      if(err){
          console.log("Unable to write, file path given is invalid");
      }
      else{
          console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${arr[1]}`);
      }
  }); 

  }
  
});
