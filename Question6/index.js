const express = require('express');
const fs = require('fs');

const data = require('./data.json');
//console.log(data);

let user = {
    name: "Kyle",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
}

data.push(user);

fs.writeFile('data.json', JSON.stringify(data), err => {
    if(err) throw err;

    console.log("done with data");
})

fs.readFile('data.json', function(err, data) {
    if (err) throw err;

    //console.log(data); fs module return data in buffer form so we have to parse the data
    const users = JSON.parse(data);
    console.log(users);

})