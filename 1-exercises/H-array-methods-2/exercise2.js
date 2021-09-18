/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

/*function capitalise(str) {
var together = str.split().charAt(0).toUpperCase();
var joined = together.join();
return joined;
}*/
/*function capitalise(str) {
  var together = str.split('');
  together = together[0].toUpperCase;
  //var result = Array.toUpperCase(together[0]).join("");
  return together;
}*/

function capitalise(str) {
  return str.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
