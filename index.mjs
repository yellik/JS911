import {
    concatMixedTypesMessage,
    concatNumMessage,
    concatMessage,
    multiplierMessage, 
    simpleSumMessage, 
    consoleLogMessage} from "./messages.mjs";


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

const concat = (part1, part2) => {
    const concatWithMessage = concatMessage(part1, part2)
    return concatWithMessage;
}

const concatNum = (number1, number2) => {
    const concatWithNums = concatNumMessage(number1, number2);
    return concatWithNums;
    //const concatMixin = concatMixedTypesMessage(string, number);
    //return concatMixin;
}

const switchIt = (banana, ) => {

}

//function calls
//use console log => //Write your name as the second param
//consoleLog(consoleLogMessage, "Jelena");
//simpleSum(simpleSumMessage, -2, 3);
//simpleSum(simpleSumMessage, -2.6, 5.3);
//simpleMultiplied(4, 7)
//simpleMultiplied(1.2, 1.5)
//concat("Hello", "Word");
//concatNum(1, 3)
//concatMix("hello", 123);

//