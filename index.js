var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World.........................................!!'+ process.env.DB_URL)
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
  console.log('Database' , process.env.DB_URL);
})
