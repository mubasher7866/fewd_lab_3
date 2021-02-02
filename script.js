// 3. a) Define a function ( expression) greet returning the value 'Haydo!'.

function greet (){
    return "HAydo!"
}

// b) Declare a variable salutation. Call the function greet and assign the result of the call
//to the variable salutation.

var salutation = greet();

//4. Write a function echo that has a parameter called sound and return that passed
//parameter.

function echo (sound){
    return sound;
}

// 5. Write a function greet having a parameter called name. Return 'Hello <parameter> !'
//where the parameter variable is concatenated with the ‘Hello’ and ‘!’ strings.

function greet (name){
    return "Hello" + name + "!";
}


//11. Write a function called doSomething with a parameter called name, return the name
//parameter. On the next line call the function with a value for the name ( can be any
//name you like ).

function doSomething (name){
    return name;
}


//13. Define a function called myFunction that uses the alert() method with a string value
//“Hello World!” inside. Call myFunction on the next line.

function myFunction (message){
    alert(message);
}

myFunction("Hello World");

//14. Define a variable called isAnswerRight and give it a true value. Use the ternary
//operator to console.log the ‘The answer is right!’ if the value is true and ‘The answer is
//wrong!’ if the value is false.

var isAnswerRight = true;

isAnswerRight ? console.log('The answer is right!') : ('The answer is wrong!');

//12. Define a function called multiplyFive which accepts a number and returns that number
//multiplied by 5.

function multiplyFive (number){
    return number*5;
}

// 8. Write a function shout that takes a string and returns this string duplicated. In addition,
//the return should be logged. The call shout('Fire') should return 'FireFire' and should log
//'FireFire' for example.

function shout (string){
    
    return string + string;
}

console.log(shout("fire"));






