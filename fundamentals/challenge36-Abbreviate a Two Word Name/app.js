//Abbreviate a Two Word Name
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    // code away
  let splitWords = name.split(' ')
  //console.log(splitWords) //'Sam' , 'Harris'
  let initials = splitWords[0][0] + '.' + splitWords[1][0]
  let initialString = initials.toString()
  let initialsInCaps = initialString.toUpperCase()
  return initialsInCaps
  }
  