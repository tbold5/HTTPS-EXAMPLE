// var fs = require("fs");

// //Asynchronous read

// fs.readFile('input.txt', function(err, data){
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Asynchronous read: ' + data.toString());
// });

// //Synchronous read

// var data = fs.readFileSync('input.txt');
// console.log('Synchronous read: ' + data.toString());
// console.log("Program Ended");


// var fs = require("fs");
// var data = '';
// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');
// // It will read the text from input.txt
// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');
// //It will copy the text from out.txt
// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);

// console.log("Program Ended");

var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");