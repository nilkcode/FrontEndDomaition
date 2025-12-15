// js the language ----------------------------------- Basic
// basic  -------------------------------------------- Basic
// inbuilt features ---------------------------------- Basic
// varibles constant --------------------------------- Basic
// compiler and interpreters ------------------------- Basic
// window--------------------------------------------- Basic
// conditionals -------------------------------------- Basic
// loops --------------------------------------------- Basic
// arrays -------------------------------------------- Basic
// objects ------------------------------------------- Basic

// ---------------------------Advanced ----------------------------------

// prototypes  
// prototypes inheritance
// e6 climax
// asynchronous




let arr = [1,2,3,4,5,6,7]
let b  = arr;
b.pop()
b.pop()
console.log(b)
console.log(arr)

let number = 1;
while(number < 10) {
    console.log(number)
    number++
}




// Undefined     => value, (Undefined is value which trate as  grabage value)
//  Not Defined  => error , ()
//  and Null     => 
    

// Not defined  is an error
// The value and perticular element which is use without it's decleration  gives an error , and that error is undefined error


// null is also a value
// This is value which reolve that not found, It recive somthing is not found


// =============================== Arrays ==================================//

let arr1= [1,2,3,4,5,6]
let arrG = [];
arr1.forEach((item) => {
   arrG = item * 2
   return arrG;
})
console.log("New array :" , arrG)
console.log("Old array" , arr1)

// =======================  Objects ======================================//

// Remove duplicates from 


let arrr = [0,1,1,1,2,2,3,3,4,5,5,6,6,7,8,8, 9 , 9]

let removeDuplciateInterget = (arrr) => {
    let x = 0;

    for(let i = 0; i < arrr.length; i++) {

        if(arrr[i] > arrr[x]) {
            x++;
            arrr[x] = arrr[i]
        }
    }
        console.log(arrr)

    return x + 1
   
}



const result = removeDuplciateInterget(arrr)
console.log(result)


















