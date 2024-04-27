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