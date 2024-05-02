var fs = require('fs');

fs.rename('index.txt', 'renamed.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});