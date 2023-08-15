/* Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    //console.log(a, b) [1,2] [1] == [2]
    let diffArray = []
    for(let i = 0; i < a.length; i++){
      if(!b.includes(a[i])){
        diffArray.push(a[i])
      }
    }
    return diffArray
  }