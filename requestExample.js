let http = require("http")
let url = require("url")
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.write("request.url: " + request.url + "\n")
  response.write("parsed query: " + url.parse(request.url,true).query + "\n")
  let query = url.parse(request.url).query
  response.write("name:"+ query.name)
  response.write("age:"+ query.age)
  response.write("method: " + request.method + "\n")
  response.write("request.headers: " + JSON.stringify(request.headers) + "\n")
  response.write("request.headers['User-agent']: " + request.headers['user-agent']                   + "\n")
    response.end()
}

// create server & configure it with a callback function, invoked as each client connects
let server = http.createServer(onRequest)
server.listen(8888)  // tell server to start listening on port 8888
console.log("Connect to me on port 8888")

// Run using below url
// 