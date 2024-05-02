var fs = require('fs');

fs.writeFile('index3.txt' , 'Hi! Me, Myself, Shikshya Poudel.' , function(err){
    if(err) throw err;
    console.log('Saved!');
})