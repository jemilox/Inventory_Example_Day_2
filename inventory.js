console.log('inventory.js sourced');
//global vars
var selectedColor = 'none';
var selectedSize = 'none';
var inventory = [];


var searchInventory = function(){
  console.log("in searchInventory");
    //get size from user
  selectedSize = document.getElementById('sizeIn').value;
    //get color from user
  selectedColor = document.getElementById('colorIn').value;
  console.log("I'm looking for something that is:", selectedColor, selectedSize);
  //check if an item fits this description
  findItem();
};//end searchInventory

var addItem = function(color, name, size){
  console.log("in addItem", name);
  inventory.push( {itemSize: size, itemColor: color, itemName: name});


}; //end addItem


addItem( 'Blue', 'Smurf', 'Small');
addItem( 'Mermaid treasure', 'Prime Academy', 'Large');
addItem( 'Bus seat green', 'Baby Banner', 'Medium');
addItem( 'Purple', 'Eggplant', 'Small');
addItem( 'Purple', 'Prince', 'Medium');

console.log(inventory);

var findItem = function(){
  console.log("in findItem");
  for( i = 0; i < inventory.length; i++){
    // console.log(selectedColor, selectedSize)
    // console.log(inventory[i].itemColor, inventory[i].itemSize);
    if (inventory[i].itemColor == selectedColor && inventory[i].itemSize == selectedSize){
      console.log(inventory[i].itemName);
    }
  }

};
