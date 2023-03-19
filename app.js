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




