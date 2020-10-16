// 1
function instruction(bottle) {
  console.log("Leave from house");
  console.log("go straight 100m");
  console.log("turn right");
  console.log("go to market");
  console.log(`buy ${bottle} bottles of drink`);
  console.log("pay for drink");
  console.log("leave from market");
  console.log("come back to house");
 }

 //2
let total;
let price;
function calcBottles(total,price){
return Math.floor(total/price)
}
// console.log(calcBottles(59,5))

//3
function calcChange(total, price){
  return `Change is ${total % price}$`
}
//console.log(calcChange(59,5))

//4
function getDrink(total,price){

  instruction(calcBottles(total, price))
  console.log(calcChange(total, price));
}
//5
getDrink(40,3)
