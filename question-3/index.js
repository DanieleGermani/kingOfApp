function Animal (name, owner) {
  this.name = name;
  this.owner = owner;
}

var myAnimal   = new Animal("Arya", "Josephine");
var yourAnimal = new Animal("Max",  "Owen");

Animal.prototype.showOwnerName = function(){
  return "My owner is " + this.owner;
};  

console.log(myAnimal.showOwnerName());    //=> "My owner is Josephine"
console.log(yourAnimal.showOwnerName());  //=> "My owner is Owen"
