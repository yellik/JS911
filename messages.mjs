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
 
 export const concatNumObjMessage = (number1, number2) => {
    console.log(`You are passing in two numbers ${number1} and ${number2}
    As you are unable to split the numbers to turn the into arrays. 
    You can if you turn them into strings`);
    const numArr1 = number1.toString().split('');
    const numArr2 = number2.toString().split('');
    console.log(`Then we can go ahead and split them. This gives you
    ${numArr1} and ${numArr2} Now you go ahead and use concat. `);
    const numObj = numArr1.concat(numArr2);
    console.log(`This give you ${numObj}, which is of the type: ${typeof(numObj)}`);
 } 


 export const fatCatMessage = (food) => {
    console.log(`This function accepts 1 food parametres.
    You are feeding the cat a ${food}`);
    let totalCal = 0;
    console.log(`at this stage, the cat has eaten ${totalCal} calories.
    We just started feeding him, so that makes sense`);
    
    switch(food){
        case "banana":
            totalCal += 100;
            break;
        case "apple pie":
            totalCal += 250;
            break;
        case "burger":
            totalCal += 500;
            break;
    }
    console.log(`now the cat has eaten his ${food} and his total
    intale is: ${totalCal}. This funtion therefore returns:`);
    if(totalCal <= 100) return "The cat is still hungry"; 
    if(totalCal <= 250 ) return "The cat could eat more";
    if(totalCal <= 500 ) return "the cat is full";
    
 }

 export const reduceCaloriesMessage = (calForFood1, calForFood2, calForFood3) => {

    console.log(`A reduce function takes a allows us to return a value
    of the whole array. For example, we might want to know how much the cat 
    eats in total during the day. This might determine whether ot not he 
    (she, in my case) gets fat over time`);

    const foodCalorieArr = [calForFood1, calForFood2, calForFood3]

    console.log(`In this case, we have logged the calorie count for the foods
    the cat has eating today. These are: ${calForFood1}, ${calForFood2} and ${calForFood3}.
    Sorry kitty, but you've got to stay fit!`);
    const totalCalIntake = foodCalorieArr.reduce((accumulator, currentValue ) => {
        return accumulator + currentValue;
    });
    
    console.log(`Your kitty has eaten: ${totalCalIntake}`);
   
 }
 export const makeCatMessage = (name, age, weight) => {
    const keys = ['name', 'age', 'weight']
    console.log(`This fn expects to receive three params: ${keys}`);
    const values = [name, age, weight];
    console.log(`You have passed the following values ${values}`);
    
    const catObject = keys.reduce((obj, key, index) => {
        return {...obj, [key]: values[index]}
        }, {});
    
    console.log(catObject);

 }