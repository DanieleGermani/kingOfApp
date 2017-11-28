//Ejemplo 1

//El problema aquí es que this no está apuntando al objeto como cabría esperar, sino que está buscando la referencia fuera, en el contexto global (window).
var myApp = {
  name : 'Daniele',
  lastName : 'Germani',
  age: 32,
  completeName : this.name + this.lastName
};
console.log( myApp.completeName ); // undefined


// En esta ocasión, si podemos comprobar como this apunta al propio objeto y busca la propiedades ‘name‘ y ‘lastName‘ dentro en lugar de remontarse hasta el contexto global.
var myApp = {
  name : 'Daniele',
  lastName : 'Germani',
  age: 32,
  completeName : function(){
    return this.name + ' ' + this.lastName;
  }
};
console.log( myApp.completeName() ); // Daniele Germani

//Ejemplo 2

var myApp = function(){
  var name = "World";
  var sayHello = function(){
    console.log( 'Hello, ' + this.name );

  };
  sayHello();
};

myApp(); // Hello,
//Como la función no es ahora la propiedad de un objeto, this apunta de nuevo al global (window)
//Este comportamiento lo podemos comprobar si creamos una variable global con aquel nombre por el que estamos preguntando:
var name = "Strange World";
var myApp = function(){
  var name = "World";
  var sayHello = function(){
    console.log( 'Hello, ' + this.name );
  };

  sayHello();

};

myApp(); // Hello, Strange World

//Para resolver este problema, podemos  definir dentro de nuestra función contenedora una nueva variable que cachee el valor de this para que así esté disponible desde cualquier otra función anidada que lo precise. Por convención, el nombre de esta variable es that:

var myApp = function(){
  var that = this;
  var name = "World";
  var sayHello = function(){
    console.log( 'Hello, ' + that.name );
  };

  sayHello();
};

myApp(); // Hello, World
