  // 1. Ways to print in JS
    // console.log("Hello World"); // alert("Run Now"); 
    // document.write("New Document");

    // 2. Javascript console API
    /* console.log("Hello World");
        console.warn("This is a warning");
    console.error("This is an error"); */ 

// 3. Javascript Variables
// What are variables ? - Containers to store data values
var numnber1 = 34;
var numnber2 = 34;
// console.log(numnber1 + numnber2);

//4. Data types in JS
// Numbers
var num1 = 455;
var num2 = 333; 

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

//Objects
var marks = {
  ravi: 34, 
  shubham: 99,
  vanraj: 88,
}
// console.log(marks);

//Booleans 
var a = true;
var b = false;
// console.log(a)

var und = undefined;
// console.log(und);

var n = null
// console.log(null);

/* 
At a very high level, there are two types of data types in JS
1. Primitive Data Types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects 
*/

var arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

// Operators in JS
// Arithmetic Operators 

var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators 
// var c = b;
// console.log(b);
// c += 21; 
//c -+ 5;
//c *= 11;
// console.log(c);

// Comparison Operators 
var x = 34;
var y = 11; 
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);
// console.log(x = y);

// Logical Operators 
// Logical and 
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
// Logical or 
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
// Logical not 
// console.log(!true);
// console.log(!false);

//Function in JS
function avg(a,b){
  return (a + b)/2;
}
// DRY = Do ont repeat yourself 

// c1 = avg(4, 6);
// c2 = avg(22,19);
// // console.log(c1,c2);

// // Conditionals in JS
// var age =40;
// // single if statement 
// if(age > 5){
//   console.log("You are not a kid");
// }
// // if else statement 
// else{
//   console.log("You are a kid");
// }

// // if-else ladder 
// var age = 22; 
// if(age> 60) {
//   console.log("You are a senior citizen");
// }
// else if (age > 18){
//   console.log(" You are an adult");
// }
// else if (age > 5){
//   console.log(" You are a teenager");
// }
// else if (age < 5){
//   console.log(" You are a kid");
// }
// else{
//   console.log("You are an alien")
// }

// Loop 
 /* var arr = [1,2,3,4,5,6,7]
// console.log(arr)
for(var i=0;i<arr.length;i++){
  if(i==2){
    continue;
  }
console.log(arr[i])
} */ 

// arr.forEach(function(element){
// console.log(element);
// })

// const r = 0; 
// c++;

/* let j=0;
while(j<arr.length){
  console.log(arr[i]);
  j++;
}

do{
  console.log(arr[i]);
  j++;
} while(j<arr.length); */

// let myArr = ["fan", "camera", 34, null, true]
// // Array Methods 
// console.log(myArr,length);
// // myArr.pop()
// // myArr.push("harry");
// // myArr.shift()
// myArr.unshift("Harry")
// console.log(myArr);

// String methods in JS
// let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))
// console.log(myLovelyString.slice(1,5))

// console.log(myLovelyString.replace("Harry", "Rohan"))

// let myDate= new Date; 
// // console.log(myDate);
// console.log(myDate.getFullYear())

// DOM Manipulation 
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
elemClass[0].style.background = "red";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

let tn = document.getElementsByTagName('button');
console.log(tn);




