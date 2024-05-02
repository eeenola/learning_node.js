var fs = require('fs');

fs.open('index2.txt' , 'x' , function(err , file){
    if(err) throw err;
    console.log('Saved!');
})