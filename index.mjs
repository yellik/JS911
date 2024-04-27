import {simpleSumMessage, consoleLogMessage} from "./messages.mjs";


    //simple console.log
const consoleLog = (consoleLogMessage, name) =>{
     name = consoleLogMessage(name);
}
    //simple sum
export const simpleSum = (simpleSumMessage, a, b) => {
    const sumWithMessage = simpleSumMessage(a, b);
    return sumWithMessage;
}

//function calls
//use console log => //Write your name as the second param
consoleLog(consoleLogMessage, "Jelena");
simpleSum(simpleSumMessage, -2, 3);
simpleSum(simpleSumMessage, -2.6, 5.3);



