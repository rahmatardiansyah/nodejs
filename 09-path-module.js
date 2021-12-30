const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
// get name file
const base = path.basename(filePath);
console.log(base);

// get full path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.js');
console.log(absolute);

