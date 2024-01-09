// const fs = require("fs");

// fs.writeFile("message.txt","hello form 2.2 native module file1.js !", (err)=>{
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// fs.readFileSync('')

import { readFileSync } from 'node:fs';

// macOS, Linux, and Windows
const data = readFileSync('./message.txt','utf8');

console.log(data);