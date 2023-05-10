//Basic Mathematical Operations
/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2)
{
  // Code (4 + 7)
  if(operation == '+'){
    let sum = value1 + value2
    return sum
  } else if(operation == '-'){
    let substraction = value1 - value2
    return substraction
  } else if(operation == '*'){
    let multiplication = value1 * value2
    return multiplication
  } else if(operation == '/'){
    let division = value1 / value2
    return division
  } else {
    console.log('that is not a math problem')
  }
}