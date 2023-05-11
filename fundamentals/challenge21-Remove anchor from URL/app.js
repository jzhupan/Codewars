//Remove anchor from URL
/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    // TODO: complete
   if(!url.includes('#')){
     return url
   } else if(url.includes('#')){
     let noHash = url.split('#')[0]
     return noHash
   }
  }