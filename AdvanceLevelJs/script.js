// "use strict"
// this call apply and bind
// keyword its means that there have some meaning 

// this  - the value of this it can be varies according to phase of action like dom , object , simple function, arrow function

// =========================== this ============================//
// value of this in global scope          ====> window
// value of this in function              ====> window
// value of this in method                ====> object
// function inside method (es5)           ====> window
// function inside method (es6)           ====> object
// constructor function the value of this ====> new object
// event listner main this value          ====> that element where event attached


// // global scope
// console.log(this)


// // value of this in function     
// function this_Function() {
//   console.log(this)
// }

// const new_Function = function() {
//      console.log(this)
// }

// new_Function()
// this_Function()

// // value of this in method  

// const addr = {
//     name : function() {
//         console.log(this)
//     },
//     age:44,
//     address:"Sant tukaram Nagar"

// }

// addr.name()


// // function inside method (es5)           ====> window

// const locations = {
//     firstName: function() {
//          function childFunction() {
//               console.log(this)
//          }
//         childFunction()
//     }
// }

// locations.firstName()

// // function inside method (es6)           ====> window

// var obj3 =  {
//     firstName: function(){
//         const newFunc = () => {
//             console.log(this)
//         }
//         newFunc()
//     } 
    
// }
// obj3.firstName()

// // constructor function the value of this ====> new object

// function add() {
//     console.log(this)
// }

// const  ans = new add()

// // event listner main this value          ====> that element where event attached


// let button = document.createElement("button");
// button.textContent = "Click Me "
// button.className  = "btn"


// document.querySelector("body").appendChild(button)

// button.addEventListener("click", function() {
//     console.log(this)
// })

// call , apply, bind
// this are three things where we can call function by using this or // we stated as this

/*

const obj = {name: "nilesh", age:34, employeeId: 'RI222'}

function  myDetails() {
    console.log(this)
}
myDetails.call(obj)

// apply

function myDetailsApply(a,b, c) {
    console.log(this, a,b, c)
}
myDetailsApply.apply(obj, [20,40,50])

// bind

const newObj = {name:'nilesh k' , empl: "ID-2229"};

function userDetails (){
    console.log(this);
}

const newFunc = userDetails.bind(newObj)

newFunc()

*/
// ==========================    Javascript Prototypal Inheritance =============================//
// Prototypal Inheritance
/*
const feture = new Object()
feture.name = "Camera"

console.log(feture)


function blankObjFun() {

}

const blankObj = new blankObjFun()
console.log(blankObj)

function makeHuman(name, age) {
    this.name = name;
    this.age = age;

} 

makeHuman.prototype.printMyName = function() {
    console.log(this.name);
    console.log(this.age)
}

const human1 = new makeHuman("nilesh", 32);   // In this new create blank Object = {} ; and refers to or point to 
const human2 = new makeHuman("Akash", 34);
const human3 = new makeHuman("Jyoti", 26)



console.log(human1)
console.log(human2)
console.log(human3)

*/

// =============================== Clouser ->  A function that return another function ================================

/*
Defination - Closure is a function created when it continues accessing and remebering outer  scope variable even outer 
             function execution complated inner function can access/ remeber outer function variable that is clouser
             
Simple Defination - A closure is a function which return another inner function and remeber value of outer function

*/


function OuterCountFun() {
     let count = 0 ;
      function InnerFunction() {
        count++
        console.log(count)
     }
     return InnerFunction;
}
let counter = OuterCountFun()

// const button = document.createElement("Button")
// button.textContent  = "click me";

// document.querySelector("body").appendChild(button);

// button.addEventListener("click", counter)

/*
function createBankAccount() {
    let balance = 0;
    const div = document.createElement("div");
   
    return {
        deposite(amount) {
            balance += amount;
            console.log("Balance",balance)
             document.querySelector("body").appendChild(div).textContent = balance
        },
        withdrawal(amount) {
            balance -= amount;
            console.log("Balance", balance)
             document.querySelector("body").appendChild(div).textContent = balance
        }
    }
    
}




const account = createBankAccount();
const button1 = document.createElement("Button")
button1.textContent  = "Deposite";
document.querySelector("body").appendChild(button1);

const button2 = document.createElement("Button")
button2.textContent  = "Widrawal";
document.querySelector("body").appendChild(button2);


button1.addEventListener("click", () => account.deposite(30))

button2.addEventListener("click", () => account.withdrawal(10))


*/


// Event Delegation


//===================================  Higher Order function  ====================================

/* 
Defination - A higher order function is function which take other function as argument or 
             return a function 

*/

function greet(name) {
    return `Welcome ${name}`;
}

function processGreet(name, callback) {
    return callback(name)
}

console.log(processGreet("nilesh", greet))

console.log(processGreet("Akash", greet))

console.log(processGreet("Pratik", greet))






















