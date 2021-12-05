function takeOrder(newOrder, orders){
  if (orders.length <= 2){
  orders.push(newOrder)
  }
}

function refundOrder(num, orders){
  for(var i = 0; i < orders.length; i++){
    if(orders[i].orderNumber === num){
      orders.splice(i, 1)
    }
  }
}

function listOrders(orders){
  itemNames = []
  for (var i = 0; i < orders.length; i++){
    itemNames.push(orders[i].item)
  }
  return itemNames.join(', ')
}

function searchOrder(orders, item){
  for (var i = 0; i < orders.length; i++){
    if (orders[i].item === item){
      return true
    }
  }
  return false
}




module.exports = {
  takeOrder,
  refundOrder,
  listOrders,
  searchOrder
}
