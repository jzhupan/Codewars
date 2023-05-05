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

