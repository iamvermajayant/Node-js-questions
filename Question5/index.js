// const { Console } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();

//This code is to create the File 

// fs.writeFile('input.txt', "hello my name is Jayant", (err)=>{
// if(err) {
//     console.log(err);
// }
// console.log('Data written successfully');
// })

fs.readFile('input.txt' , (err,data)=>{
    if(data.length === 0){
        console.log('No data present');
        return;
    }

    if(err) {
        console.log(err);
    }
    console.log('Data' + data.toString());
})


app.listen(4000);