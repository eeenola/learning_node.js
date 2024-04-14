var fs = require('fs');

fs.unlink('index2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});