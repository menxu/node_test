/*
function say(word){
  console.log(word);
}

function execute(someFunction, value){
  someFunction(value);
}

execute(say, 'Hello');
execute(function(word){ console.log(word)}, "Hello2")
*/
var http = require('http');
var url  = require('url');

function start(route, handle){
  function onRequest(request, response){
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request " + pathname + " received.");
    /*
    request.setEncoding("utf8");
    request.addListener("data",function(postDataChunk){
      postData += postDataChunk;
      console.log("Received POST data chunk '"+ postDataChunk + "'.");
    });
    request.addListener("end",function(){
      route(handle, pathname, response, postData);
    });
    */
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888)
  console.log("Server has started.");
}
exports.start = start;
