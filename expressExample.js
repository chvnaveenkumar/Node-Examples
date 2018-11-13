let express = require('express')
let app = express()
let url = require('url')

// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route
app.get('/', function (req, res) {
    console.log(url.parse(req.url,true).query)
  res.send('GET request to the homepage\n')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage\n')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

