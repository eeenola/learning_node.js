var fs = require('fs');

fs.appendFile('index.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});