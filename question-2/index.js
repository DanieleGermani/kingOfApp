// Metodo Call()

function multiplicar(num) {
  console.log(this.valor * num  );
}

var obj = {
  valor: 10
};

multiplicar.call(obj, 3); // 30

var obj2 = {
  valor: 8
};

multiplicar.call(obj2, 4); // 32

//Si la función multiplicar tuviera más parámetros se puede pasar una lista separada por comas:
multiplicar.call(obj, 4, 5, 6);


// Metodo Apply()

multiplicar.apply(obj, [4]); // 40
multiplicar.apply(obj2, [4]); // 32

//Si la función multiplicar tuviera más parámetros se agregan todos en el mismo arreglo:
multiplicar.apply(obj, [4, 5, 6]);
