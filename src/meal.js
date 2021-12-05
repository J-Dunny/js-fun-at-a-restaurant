function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type){
  return {
    name: name,
    price: price,
    type: type,
  }

}

function addIngredients(newItem, array){
  if (array.includes(newItem) === false){
    array.push(newItem);
  }

}

function formatPrice(price){
  return `$${price}`
}

function decreasePrice(price){
  percent = price * .1;
  decrease = price - percent;
  return decrease;
}

function createRecipe(title, ingredients, type){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type:type,
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
