import {
    fatCatMessage,
    makeCatMessage,
    concatNumObjMessage,
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

const concatNumObj = (number1, number2) => {
    const makeNumObj = concatNumObjMessage(number1, number2);
    return makeNumObj;
}



const fatCat = (food) => {
    const catStatus = fatCatMessage(food)
    console.log(catStatus)
    
}

const makeCat = (name, age, weight) => {
    makeCatMessage(name, age, weight)
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
//concatNumObj(123, 456);

/*for the switch statement exercise you're going to feed a cat. 
each item contains a set amount of calories. See the cats hunger level
by feeding him a food. Use "banana", "apple pie" and "burger"
*/
//fatCat("banana");
//fatCat("apple pie");
//fatCat("burger");
makeCat("Gizma", 12, 3.5)
