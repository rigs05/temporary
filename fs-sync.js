const { readFileSync, writeFileSync } = require ('fs');

const file1 = readFileSync ('./content/fileA.txt', 'utf8');
const file2 = readFileSync ('./content/sub/fileB.txt', 'utf8');

writeFileSync (
    './content/sub/file.txt',
    `${file1}, ${file2}\n`,
    {flag: 'a'}                     // Used to append the content everytime the program is executed, without this, content will be overwritten
)

console.log (readFileSync('./content/sub/file.txt', 'utf-8'));
// console.log (file1);