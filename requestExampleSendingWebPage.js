const http = require('http');
const url = require('url');
const port = 8082;

const server = http.createServer(function (request, response) {
    console.log('requestexample sending url')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    let query_parts = url.parse(request.url,true).query
    console.log(query_parts) // In the console: { name: 'suman', weight: '180' }
    response.write('<!doctype html>')
    response.write('<head><title>Hello</title></head>')
    response.write('<body>')
    response.write('<p> name -- ' + query_parts.name + '</p>')
    response.write('<p> weight -- ' + query_parts.weight + '</p>')
    response.end('</body></html>')

});
console.log("Listening on port 8082")
server.listen(port);
