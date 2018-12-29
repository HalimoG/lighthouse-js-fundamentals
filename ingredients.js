var ingredients = ["eggs", "milk", "flour", "sugar", "backing soda", "chocolate chips", "bananans"];

// Write a while loop that prints out the contents of ingredients:

var i = 0;
while (i < ingredients.length) {

  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var reversed = ingredients.reverse();

for (var i = 0; i < reversed.length; i++) {
  console.log(reversed[i]);
}