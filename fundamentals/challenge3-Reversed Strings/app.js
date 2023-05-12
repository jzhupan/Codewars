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
  