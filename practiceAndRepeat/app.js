//String to Number
const stringToNumber = function(str){
    // put your code here
    let number = Number(str)
    return number;
  }

//You can't Code Under Pressure #1
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  let doubleNum = i * 2
  return doubleNum;
}

//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  if(bool == true){
    return 'Yes'
  } else {
    return 'No'
  }
}

//MakeUpperCase
function makeUpperCase(str) {
  // Code here
  let upperCase = str.toUpperCase()
  return upperCase
}

//String repeat

function repeatStr (n, s) {
  let stringTimes= '';
  for(let i = 0; i < n; i++){
   stringTimes += s 
  } 
  console.log(stringTimes)
  return stringTimes;
}

//Switch it Up!
function switchItUp(number){
  //Write your own Code!
    switch(number) {
        case 0 :
        return 'Zero'
        break;
        case 1 :
        return 'One'
        break;
        case 2 :
        return 'Two'
        break;
        case 3 :
        return 'Three'
        break;
        case 4 :
        return 'Four'
        break;
        case 5 :
        return 'Five'
        break;
        case 6 :
        return 'Six'
        break;
        case 7 :
        return 'Seven'
        break;
        case 8 :
        return 'Eight'
        break;
        case 9 :
        return 'Nine'
        break;
        default:
        console.log('Enter a valid number between 0-9')
    }
  }

//Twice as Old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let sonsDoubleAge = sonYearsOld * 2
  let yearsDifference = dadYearsOld - (sonsDoubleAge)
  if(yearsDifference < 0){
    return yearsDifference * -1
  }
  return yearsDifference
}

//Regex validate PIN code
function validatePIN (pin) {
  //return true or false
   let isnum = /^\d+$/.test(pin);
   if(!isnum){
     return false
   } if(pin.length == 4 && parseInt(pin)){
     return true
   } else if(pin.length == 6 && parseInt(pin)){
     return true 
   } else if(pin == '0000' || pin == '000000') {
     return true
   } else {
     return false
   }
}

//Fake Binary
function fakeBin(x){
  let numReplace = ''
  for(let i =0; i< x.length; i++){
      if(x[i] < 5){
       numReplace += 0
    } else {
        numReplace += 1
    }
  }
    return numReplace 
}

//Odd or Even?
function oddOrEven(array) {
  //enter code here
 let sum = array.reduce((acc, value) => {
   return acc + value
},0);
 if(sum % 2 == 0){
   return "even"
 } else {
   return "odd"
 }
}

//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  // Implement me
  if(name[0] == 'R' || name[0] == 'r'){
    return name + " plays banjo" 
  } else {
    return name + " does not play banjo"
  }
}

//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  const currentDistanceToPump = mpg * fuelLeft
  const needFuelOrNot = distanceToPump - currentDistanceToPump
  if(needFuelOrNot <= 0){
    return true
  } else {
    return false
  }
};

//Is this a triangle?
function isTriangle(a,b,c){
  //1 ,2 , 2 || 7 ,2 ,2
 if(a + b > c && a + c > b && c + b > a){
   return true
 } else {
   return false
 }
}

//Abbreviate a Two Word Name
function abbrevName(name){
  // code away
let splitWords = name.split(' ')
//console.log(splitWords) //'Sam' , 'Harris'
let initials = splitWords[0][0] + '.' + splitWords[1][0]
let initialString = initials.toString()
let initialsInCaps = initialString.toUpperCase()
return initialsInCaps
}

//Reversed sequence
const reverseSeq = n => {
  let array = []
  for(let i =1; i<= n; i++){
   array.push(i)
  }
  let reversed = array.reverse()
  return reversed
};

//Quarter of the year
const quarterOf = (month) => {
  // Your code here
  switch(month) {
      case 1 : case 2: case 3: 
      return 1;
      case 4 : case 5: case 6: 
      return 2;
      case 7 : case 8: case 9: 
      return 3;
      case 10 : case 11: case 12: 
      return 4;
      default: return 'could not found month'
  }
}

//Training JS #7: if..else and ternary operator
// function saleHotdogs(n){
//  if(n < 5){
//    return n * 100
//  } else if (n >= 5 && n < 10){
//    return n * 95
//  } else if( n >= 10){
//    return n * 90
//  } else {
//    'No luck in sales today'
//  }
// }
//elegant Ternary operator
function saleHotdogs(n){
  return n < 5 ? n * 100 
  : n >= 5 && n < 10 ? n * 95 
  : n >= 10 ? n * 90 
  : 'no luck with sales today'
}