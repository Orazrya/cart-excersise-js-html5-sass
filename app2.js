let price = document.querySelectorAll("h4");
let quantity = document.querySelectorAll("input");
let totalPrice = document.getElementById("total-price");

let allPrices = [
  Number(price[0].innerHTML),
  Number(price[1].innerHTML),
  Number(price[2].innerHTML),
];

let initialValue = 0;
const sumWithInitial = allPrices.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
let x;
let y;
let z;

// first product
let productPrice = () => {
  x = quantity[1].value * allPrices[0];
};

// second product
let productTwoPrice = () => {
  y = quantity[2].value * allPrices[1];
};

// third product

let productThreePrice = () => {
  z = quantity[3].value * allPrices[2];
};

// new function for all products price //
let newFunc = () => {
  productPrice();
  productTwoPrice();
  productThreePrice();
  let newArray = [x, y, z];

  let sumSum = newArray.reduce((prev, curr) => prev + curr, initialValue);

  totalPrice.innerText = sumSum;
};
quantity[1].addEventListener("click", newFunc);
quantity[2].addEventListener("click", newFunc);
quantity[3].addEventListener("click", newFunc);
