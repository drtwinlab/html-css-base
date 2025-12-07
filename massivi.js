let customers = [
  { cname: "Rost", purchases: [10, 20, 30] },
  { cname: "Maria", purchases: [5, 5, 5] },
  { cname: "Jon", purchases: [100, 50] }
];

function taxesMultiply(tax) {
    return Number((tax * 1.19).toFixed(2));
}

function customersTaxCount(customer) {
let totals = 0;
for (let el of customer.purchases.map(taxesMultiply)){
totals = el + totals;
}
    return {
        cname : customer.cname, 
        purchsesWithTax: customer.purchases.map(taxesMultiply),
        total: totals,
    }
}


