var fs = require('fs');

fs.appendFile('index.txt' , 'Hello World!' , function(err){
    if (err) throw err ;
    console.log('Saved!');
});