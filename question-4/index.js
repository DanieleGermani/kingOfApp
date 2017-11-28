//Undefined
var miVariable;

console.log(miVariable); // undefined
console.log(typeof miVariable); // undefined

function foo(bar) {
  console.log(bar);
}

foo(); // el parámetro bar es undefined


//Null
var variable = null;
console.log(variable); // null
console.log(typeof variable); // object
