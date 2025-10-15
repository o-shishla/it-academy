const fs = require('fs-extra');

const dir = 'Folder1';
fs.ensureDirSync(dir);

const file1 = 'Folder1/file1.txt';
fs.ensureFileSync(file1);

const dir2 = 'Folder2';
fs.ensureDirSync(dir2);

fs.moveSync('Folder1/file1.txt', 'Folder2/file1.txt');

const dir3 = 'Folder3';
fs.ensureDirSync(dir3);

fs.moveSync('Folder2/file1.txt', 'Folder3/file1.txt');

fs.removeSync('Folder3/file2.txt');
fs.removeSync('Folder3');
fs.removeSync('Folder2');
fs.removeSync('Folder1');

