export const consoleLogMessage = (name) => { 
    console.log(`Hello ${name}. You are now using the console.log method. 
    You can print messages, variables, or objects} Here you are printing 
    your name by passing in a variable. Try calling this function with another 
    name and see what happens`)
}
export const simpleSumMessage = (a, b) => { 
    const result = a + b; 
    console.log(`You are adding ${a} to ${b}. 
    This equals to ${result} This is done through a function call and 
    two parametres - or numbers that is passed in the function. 
    In this case, it is ${a} and ${b}, but you can add any numbers you want, 
    even "floats" (which are numbers that include decimals). 
    You will still get the right. 
    The sum is: ${result}. 
 `)}

 export const multiplierMessage = (a, b) => {
    const result = a * b;
    console.log(`You are multiplying ${a} with ${b}.
    This equals to ${result};
    This is done through multiplication of the two variable
    you passed thruugh the function. You can add any numbers you want.
    You can use floats and negative numbers. Try it out. 
    The result should still be right. 
    The result it ${result}`);
 }

 export const concatMessage = (word1, word2) => {
    const result = word1.concat(" ", word2)
    console.log(`It would be preatty boring if you were limited 
    numbers only. Why not just use a calculator for that? No, JS 
    is a lot cooler than that. With the "concat" function you can 
    add A LOT of other things together. In this case, you are putting 
    two words together. As a result, you get ${result}. In this case, 
    it also copies the type. Two strings together is...
    well a  ${typeof(result)}`);
 }

 export const concatNumMessage = (number1, number2) => {
    const num1String = number1.toString();
    const num2String = number2.toString();
    const result = num1String.concat(num2String);
   console.log ( `using concat on number displays a different result. You get: ${result}.
   In this case, you are trying to put two numbers together. This won't work. 
   It works in this case, because we actually turned them into strings. 
    So the number1 which originally is ${typeof(number1)} becomes a ${typeof(num1String)} 
    and number2, which originally is ${typeof(number2)} becomes ${typeof(num2String)}
    resulting to the type: ${typeof(result)}. 
    This gives us a lot of interesting features donw the line, but for now, let's only use
    concat with strings and arrays`)
 }
 

