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
    const result = word1.concat(word2)
    console.log(`It would be preatty boring if you were limited 
    numbers only. Why not just use a calculator for that? No, JS 
    is a lot cooler than that. With the "concat" function you can 
    add A LOT of other things together. In this case, you are putting 
    two words together. As a result, you get ${result}. But wait,
    where is the space gone? It literally copies ${word1} and ${word2} together. 
    But do you know what else it compies? The type. So two string will be...
    well... a:  ${typeof(result)}`);
 }

 export const concatMixedTypesMessage = (string, number) => {
    const result = string.concat(number);
    `Wait... so adding two things is not just adding two things. 
    Also, there is no obvious way to make a space between the words. So,
    what is it good for? In fact, this is where js starts getting interesting. 
    Interesting for me at least... What happens if you concat a number with a string?
    Now, you att ${string} with ${number}. 
    The result will be ${result}
    and it is of the type ${typeof(result)}`
 }