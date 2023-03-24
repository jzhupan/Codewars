//Sum Mixed Array
/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

function sumMix(x){

  let convertedArray = []
  
  for(let i =0; i < x.length; i++){
    convertedArray.push(Number(x[i]))
  }
  
  console.log(convertedArray)
  
  let sum = convertedArray.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)
  
  //console.log(sum)
  
  return sum
}




// Convert number to reversed array of digits

function digitize(n) {
  //code here
  //console.log(n)
  
  let reversedArray = Array.from(String(n), Number).reverse()
  
  return reversedArray
  
}



//Reversed Strings
//Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let array = []
  for(let i =0 ; i < str.length; i++){
    //console.log(str[i])
    array.push(str[i])
  }
  array.reverse()
  //console.log(array)
  return array.join('')
}




//Converting string into a Number!
/*
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

const stringToNumber = function(str){
  // put your code here
  
  let strToNum = Math.floor(str)
  //console.log(strToNum)
  return strToNum
}




//Grasshopper - Summation

/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/