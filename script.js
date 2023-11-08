function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else if (bill > 300) {
    tip = bill * 0.2;
  }
  console.log(
    `The bill is ${bill}, the tip is ${tip}, and the total cost is ${
      bill + tip
    }`
  );
}

console.log(calcTip(78));
