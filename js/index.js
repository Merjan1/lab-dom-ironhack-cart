// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtototal = product.querySelector(".subtotal span");

  let productTotal = quantity.value * price.innerHTML;
  subtototal.innerText = productTotal;

  return productTotal;
}

function calculateAll() {
  const products = document.querySelectorAll(".product");

  let totalSum = 0;
  products.forEach((product) => {
    let subtotal = updateSubtotal(product);
    totalSum += subtotal;
  });

  const total = document.querySelector("#total-value span");
  total.innerText = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
