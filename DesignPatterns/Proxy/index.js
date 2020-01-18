//var fs = require('fs');
var path = require('path');

var FS_Proxy = require('./FS_Proxy');
var fs = new FS_Proxy(require('fs'));

//var txtFile = path.join(__dirname, 'text.txt');
var mdFile = path.join(__dirname, 'text.md');

var result = (error, contents) => {
    if(error){
        console.log('\x07');
        console.log(error);
        process.exit(0);
    }

    console.log('Lendo arquivo...');
    console.log(contents);
}

//fs.readFile(txtFile,'UTF-8', result);
fs.readFile(mdFile,'UTF-8', result);