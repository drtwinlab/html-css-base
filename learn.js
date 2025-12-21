

/*
const container = document.querySelector("#container");

const content = document.createElement("div");

const fancyText = document.createElement("p");
const fancyHeadlineH3 = document.createElement("h3");
const secondContainer = document.createElement("div");
const fancyHeadlineH1 = document.createElement("h1");
const fancyText2 = document.createElement("p");


content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

container.appendChild(fancyText);
container.appendChild(fancyHeadlineH3);

secondContainer.appendChild(fancyHeadlineH1);
secondContainer.appendChild(fancyText2);

container.appendChild(secondContainer);

fancyText.textContent = "Hey I’m red!";
fancyText.style.cssText = "color: red;"
fancyHeadlineH3.textContent = "I’m a blue h3!";
fancyHeadlineH3.style.cssText = "color: blue;"

secondContainer.style.cssText = "border: 1px solid black; background-color: pink;";
fancyHeadlineH1.style.cssText = "padding: 20px;";
fancyHeadlineH1.textContent = "Im in div!";
fancyText2.textContent = "Me TOO!";
fancyText2.style.cssText = "padding: 0 20px;";

const parentContainer = document.querySelector("#container");
const lastParagraph = document.querySelector(".ParagraphTree");
const firstParagraph = document.querySelector(".ParagraphMain")

const div = document.createElement("div");

// Наша уязвимая функция
function sayHello(userName) {
  const container = document.querySelector(".ParagraphMain");

  // ВНИМАНИЕ: Мы используем innerHTML для вставки данных
  let dirtyCode = "Привет, " + userName + "!";
  let cleanCode = DOMPurify.sanitize(dirtyCode, {ALLOWED_TAGS: ["i", "sup"]});
  container.innerHTML = cleanCode;
}
let userName = prompt("What is name");

sayHello(userName)





const parentContainer = document.querySelector("#container");
const lastParagraph = document.querySelector(".ParagraphTree");
const firstParagraph = document.querySelector(".ParagraphMain")

const div = document.createElement("div");

// Наша уязвимая функция
function sayHello(userName) {
  const container = document.querySelector(".ParagraphMain");

  // ВНИМАНИЕ: Мы используем innerHTML для вставки данных
  let dirtyCode = "Привет, " + userName + "!";
  let cleanCode = DOMPurify.sanitize(dirtyCode);
  container.innerHTML = cleanCode;
}
let userName = prompt("What is name");

sayHello(userName)

const parentContainer = document.querySelector("#container");
const lastParagraph = document.querySelector(".ParagraphTree");


const div = document.createElement("div");

parentContainer.insertBefore(div, lastParagraph)
parentContainer.removeChild(lastParagraph)
div.style.cssText = "display: flex; background-color: red; padding: 12px;"


const convertToCelsius = function (fahrenheit) {
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