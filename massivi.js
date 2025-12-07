let orders = [
  { id: 1, items: [10, 20, 35] },
  { id: 2, items: [100, 34] },
  { id: 3, items: [7, 8, 9, 100] }
];



function orderItemsRowSum(order) {

let total = order.items.reduce((acc, el) => acc + el,0);

  return {
    totalRevenue: total,
  }
}
let totalCount = orders.map(orderItemsRowSum);
totalCount = totalCount.reduce ((acc, el) => acc + el.totalRevenue,0) // сумма всех цен

function getItemsValue(item){
  return {
    items: item.items,
  }
}
function bOrder(order) {
  let totalitem = 0;
  for (let el of order.items) 
    {
    if(el > 30) ++totalitem; 
    }

  return totalitem;
}

let bigOrders = orders.map(bOrder);
bigOrders = bigOrders.reduce((acc, el) => acc + el, 0) // количество заказов, где сумма заказа > 30


function itemsArr(item){
 
  return item.items 
}

let allItems = orders.map(itemsArr)

let newa = []; //// массив всех товаров, но только > 10
for (let el of allItems) {
  for (let inel of el) {
    if(inel>10) {newa.push(inel)}
    
  }
}

let lastInfo = {
  totalRevenue: totalCount,   // сумма всех цен
  bigOrders: bigOrders,      // количество заказов, где сумма заказа > 30
  allItems: newa,      // массив всех товаров, но только > 10
}
console.log(lastInfo)
