// The Buffer class in Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular 
// memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be 
// resizable. Buffers only deal with binary data, and it can not be resizable. 
// Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.


//methods to create buffer 
var buffer = Buffer.alloc(100);
var buffer1 = Buffer.from('Jayant Verma');

var text = buffer1.toString('utf-8');
console.log(text);

console.log(text.slice(0,5));
console.log(text.slice(text.length - 3));
