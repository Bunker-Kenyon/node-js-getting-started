const express = require('express')
const path = require('path')
const fs = require('fs')
const http = require('http')
const { ESPIPE } = require('constants')
var bodyParser = require('body-parser');

const PORT = 5000


const app = express();
//app.use(bodyParser());
app.use(express.static("public"));
app.get('/math', function(req, res) {
  console.log("Recieved Request for Math")
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('public/math.html').pipe(res)


})

/* app.post('/uploaded',function(req, res, next){
  var num1 = req.body.num1;
  var num1 = req.body.num2;
  console.log(num1);
  //...
}); */

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/math.html', function(request, response){
    console.log(request.body.num1);
    console.log(request.body.num2);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

/*   .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/math', (req, res) => res.render('public/math'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) */

/* app.get('/math', function(req, res) {
  console.log("Recieved Request for Math")
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('public/math.html').pipe(res)
}) */

/* function doMath(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('public/math.html').pipe(res)
} */



