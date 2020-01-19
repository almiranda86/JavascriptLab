var path = require('path');
var {appendFile} = require('fs');

class LogStrategy{

    static noDate(timeStamp, message){
        console.log(message);
    }

    static toFile(timeStamp, message){
        var fileName = path.join(__dirname, 'logs.txt');
        appendFile(fileName, `${timeStamp} - ${message} \n`, error => {
            if(error){
                console.log('Erro ao escrever no arquivo');
                console.error(error);
            }
        });
    }

    static toConsole(timeStamp, message){
        console.log(`${timeStamp} - ${message}`);
    }

    static none(){

    }

}

module.exports = LogStrategy;