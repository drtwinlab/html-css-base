







/*const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

console.log(convertToFahrenheit(10))


function leapYearChecker (year) {

  if (Number.isInteger(year) && typeof(year) === "number") {
    if((year%4==0) && (year%100==0 && year%400==0)) {console.log("Visokosnii")}
    else { console.log("Ne Visokosnii")}
   } 
  else { console.log("Error, write year correct")}
return year;
}

console.log(leapYearChecker(1600))
typeof(year) == number
function sumAll(numOne, numTwo) {
 
  if (numOne>numTwo) {return console.log("Error!")} else if ((!Number.isInteger(numOne)) || (!Number.isInteger(numTwo))) {return console.log("Error!")} else {
     let sum = 0;
      let arr = [];
    for(let i=numOne; i<=numTwo; i++) {
     sum += i;
     
    }
    return sum;
  }
}
console.log(sumAll(1, 3))



function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O




let orders = [
  { id: 1, items: [10, 20, 35] },
  { id: 2, items: [100, 34] },
  { id: 3, items: [7, 8, 9, 100] }
];


let ordersTotal = orders.reduce(function(acc, el) {
  
  let ordsum = el.items.reduce((a,b)=> a+b,0)
  acc.totalRevenue += ordsum;
  
  acc.bigOrders += el.items.reduce(function(counter, element){
  if (element > 30)  {return ++counter} else return counter
    
    }, 0)

 acc.allItems = el.items.reduce((arr, value) => {
    if (value > 10) arr.push(value);
    return arr;
}, acc.allItems);


  return acc;
}, {totalRevenue: 0, bigOrders: 0, allItems: []})

console.log(ordersTotal)




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
*/