// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// // const express = require('express');
// // const app = express();

// // app.get('/', function (req, res) {

// //     // var q = url.parse(req.url, true);
// //     // console.log(q);

// //     // var filename = "." + q.pathname;
// //     // console.log(filename);
// //     const url = req.url;
// //     console.log(url);

// //     // fs.readFile(filename, function (err, data) {
// //     //     if(err){
// //     //         res.send('error 404');
// //     //     }
// //     //     res.send(data);
// //     // })
// // })

// // app.listen(4000);




const express = require('express');
const path = require('path')
const app = express();

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(4000);