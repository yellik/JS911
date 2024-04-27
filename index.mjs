import {multiplierMessage, simpleSumMessage, consoleLogMessage} from "./messages.mjs";


    //simple console.log
const consoleLog = (consoleLogMessage, name) =>{
     name = consoleLogMessage(name);
}
    //simple sum
const simpleSum = (simpleSumMessage, a, b) => {
    const sumWithMessage = simpleSumMessage(a, b);
    return sumWithMessage;
}

const simpleMultiplied = (a, b) => {
    const multiplierWithMessage = multiplierMessage(a, b);
    return multiplierWithMessage;
}

//function calls
//use console log => //Write your name as the second param
consoleLog(consoleLogMessage, "Jelena");
simpleSum(simpleSumMessage, -2, 3);
simpleSum(simpleSumMessage, -2.6, 5.3);
simpleMultiplied(4, 7)
simpleMultiplied(1.2, 1.5)


