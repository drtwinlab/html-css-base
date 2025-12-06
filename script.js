let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let sum = 0;
let line = "" ;

for (let row of matrix) {
    for (let value of row) {
       sum += value;
       line += value + " "
    }
}

 console.log(line)