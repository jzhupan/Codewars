//Break camelCase
/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/


// complete the function
function solution(string) {
    for(let i =0; i < string.length; i ++){
      if(string[i] != string[i].toUpperCase() && string === ''){
        return string
        } else{
        let addSpace = string.replace(/([A-Z])/g, ' $1')
        return addSpace
        }
    }
  }
  
