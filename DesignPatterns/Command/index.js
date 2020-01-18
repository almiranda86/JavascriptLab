var {createInterface}=require('readline');
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('create <filename> <text> | exit');

rl.prompt();

rl.on('line', input => {

    var [commandText, ...remaining] = input.split(' ')
    var [fileName, ...fileText] = remaining
    var text = fileText.join(' ')

    switch(commandText){

        case "exit":
            console.log('TODO: Exit');
            break;

        case "create":
            console.log(`TODO: Create file ${fileName}`);
            console.log('file content:', text);
            break;
        default:
            console.log(`${commandText} command not found`);
    }

    rl.prompt();

});