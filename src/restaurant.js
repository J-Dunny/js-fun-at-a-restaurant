function createRestaurant(name){
  var newRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }

  }
  return newRestaurant
}

function addMenuItem(restaurant, item) {
  if(item.type == "lunch" && restaurant.menus.lunch.includes(item) === false){
    restaurant.menus.lunch.push(item)
  }
  else if(item.type == "breakfast" && restaurant.menus.breakfast.includes(item) === false){
    restaurant.menus.breakfast.push(item)
  }
  else if(item.type == "dinner" && restaurant.menus.dinner.includes(item) === false){
    restaurant.menus.dinner.push(item)
  }

}



function removeMenuItem(restaurant, name, type){
  if(type = "breakfast"){
    for(var i = 0; i < restaurant.menus.breakfast.length; i ++){
      if(restaurant.menus.breakfast[i].name === name){
        restaurant.menus.breakfast.splice(i, 1);

        return `No one is eating our ${name} - it has been removed from the ${type} menu!`
      }
    }
  }
  if(type = "lunch"){
    for(var i = 0; i < restaurant.menus.lunch.length; i ++){
      if(restaurant.menus.lunch[i].name === name){
        restaurant.menus.lunch.splice(i, 1);

        return `No one is eating our ${name} - it has been removed from the ${type} menu!`
      }
    }
  }
  if(type = "dinner"){
    for(var i = 0; i < restaurant.menus.dinner.length; i ++){
      if(restaurant.menus.dinner[i].name === name){
        restaurant.menus.dinner.splice(i, 1);
        return `No one is eating our ${name} - it has been removed from the ${type} menu!`
      }
    }
  }

  return `Sorry, we don't sell ${name}, try adding a new recipe!`
}



// function removeMenuItem(restaurant, name, type){
//   if(type = "breakfast"){
//
//     for (var i = 0; i < restaurant.menus.breakfast.length; i ++){
//       // if(restaurant.menus.breakfast[i].includes(name) === false){
//       //   return `Sorry, we don't sell ${name}, try adding a new recipe!`
//       // }
//
//        if(restaurant.menus.breakfast[i].name === name){
//         restaurant.menus.breakfast.splice(i, 1);
//         return `No one is eating our ${name} - it has been removed from the ${type} menu!`
//       }
//     }
//   }
//   else if(type = "lunch"){
//
//         for (var i = 0; i < restaurant.menus.lunch.length; i ++){
//           // if(restaurant.menus.lunch[i].includes(name) === false){
//           //   return `Sorry, we don't sell ${name}, try adding a new recipe!`
//           // }
//
//            if(restaurant.menus.lunch[i].name === name){
//             restaurant.menus.lunch.splice(i, 1);
//             return `No one is eating our ${name} - it has been removed from the ${type} menu!`
//           }
//         }
//       }
//   else if(type = "dinner"){
//
//         for (var i = 0; i < restaurant.menus.dinner.length; i ++){
//           // if(restaurant.menus.dinner[i].includes(name) === false){
//           //   return `Sorry, we don't sell ${name}, try adding a new recipe!`
//           // }
//
//            if(restaurant.menus.dinner[i].name === name){
//             restaurant.menus.dinner.splice(i, 1);
//             return `No one is eating our ${name} - it has been removed from the ${type} menu!`
//           }
//         }
//       }
// }




module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
