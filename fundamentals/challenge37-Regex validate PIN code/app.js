//Regex validate PIN code
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

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