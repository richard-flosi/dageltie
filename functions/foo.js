const TOML = require("@iarna/toml");

exports.handler = function(event, context, callback) {
  try {    
    console.log("foo: required toml");
    console.log("TOML", typeof TOML);
  } catch (error) {
    console.log(`foo: error requiring toml; ${error}`);
  }
  
  const statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  
  callback(null, {
    statusCode,
    headers,
    body: `foo: ${process.env.LAMBDA_ENDPOINT}`
  });
}