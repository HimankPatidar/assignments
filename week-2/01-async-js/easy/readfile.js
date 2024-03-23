const fs = require('fs');

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const filename = 'example.txt'
readFile(filename)
  .then(data => {
    console.log(`Contents of ${filename}:`, data);
  })
  .catch(err => {
    console.error(`Error reading file ${filename}:`, err);
  });

