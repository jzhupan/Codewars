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

var summation = function (num) {
  // Code here
  //console.log(num) //output 1
  let sum = 0
  for(let i = 0; i <= num; i ++){
    sum += i
  }
  console.log(sum)
  return sum
}




//Remove String Spaces
/*
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/


function noSpace(x){
  return x.replace(/\s/g,'')

}


//Grasshopper - Grade book
/*
Grade book
Complete the function so that it finds the average of the three scores passed to it and 
returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values 
or values greater than 100.

*/

function getGrade (s1, s2, s3) {
  // Code here
  let score = (s1 + s2 + s3)/3
      if(90 <= score && score <= 100){
      return 'A'
    } else if (80 <= score && score < 90){
      return 'B'
    } else if (70 <= score && score < 80){
      return 'C'
    } else if (60 <= score && score < 70){
      return 'D'
    } else if (0 <= score && score < 60){
      return 'F'
    }
}


//Keep Hydrated!
/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

function litres(time) {
  //console.log(time) //output 2 hours
  
  let litresPerHour = 0.5
  let amountOfWaterNeeded = Math.floor(time* litresPerHour)
  return amountOfWaterNeeded; 
}

