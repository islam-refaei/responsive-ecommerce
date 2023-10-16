let links = document.querySelector("#links");
let userInfo = document.querySelector("#userInfo");
let userData = document.querySelector("#userData");
let logOutBtn = document.querySelector(".logoutBtn");
let productContainer = document.querySelector(".productContainer");
// car icon
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// add to cart
let cartContent = document.querySelector(".cart-content");
// Quanter
let Quanter = document.querySelector(".Quanter");
// fa-heart
let heart = document.querySelectorAll(".fa-heart");

if (localStorage.getItem("firstName") && localStorage.getItem("lastName")) {
  links.style.display = "none";
  userInfo.style.display = "block";
  userData.innerHTML = "Welcome " + localStorage.getItem("firstName");
}

logOutBtn.addEventListener("click", (R) => {
  R.preventDefault();
  // links.style.display = "block";
  // userInfo.style.display = "none";
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});

const product = [
  {
    id: 1,
    image: "images/products/3274872317253-removebg-preview.png",
    productBrand: "GIVENCHY",
    productName: "Prisme Visage",
    category: "Face Powder",
    price: "1270",
  },
  {
    id: 2,
    image: "images/products/3274872336346_-removebg-preview.png",
    productBrand: "GIVENCHY",
    productName: "Matissime Velvet Fluid",
    category: "foundaton",
    price: "1305",
  },
  {
    id: 3,
    image: "images/products/3274872341975_-removebg-preview.png",
    productBrand: "GIVENCHY",
    productName: "Le Rouge Lipstick Luminous",
    category: "Coverage Lipstick",
    price: "1305",
  },
  {
    id: 4,
    image: "images/products/3348901408714-removebg-preview.png",
    productBrand: "DIOR",
    productName: "Rouge Dior Ultra Rouge ",
    category: "Lipstick ",
    price: "1959",
  },
  {
    id: 5,
    image: "images/products/3365440675674-removebg-preview.png",
    productBrand: "YVES SAINT LAURENT",
    productName: "Encre De Peau Foundation",
    category: "foundaton",
    price: "1850",
  },
  {
    id: 6,
    image: "images/products/3380810234336_-removebg-preview.png",
    productBrand: "CLARINS",
    productName: "Skin Illusion SPF 15 ",
    category: "foundaton",
    price: "1100",
  },
  {
    id: 7,
    image: "images/products/3380810402759_1-removebg-preview.png",
    productBrand: "CLARINS",
    productName: "Everlasting Long-Wearing",
    category: "foundaton",
    price: "2025",
  },
  {
    id: 8,
    image: "images/products/3548752058636-removebg-preview.png",
    productBrand: "MAKE UP FOR EVER",
    productName: "Aqua Brow",
    category: "Kit Brow Gel ",
    price: "1305",
  },
  {
    id: 9,
    image: "images/products/3548752086363-removebg-preview.png",
    productBrand: "MAKE UP FOR EVER",
    productName: "Ultra HD Foundation Stick",
    category: "foundaton",
    price: "1200",
  },
  {
    id: 10,
    image: "images/products/3548752174831-removebg-preview.png",
    productBrand: "MAKE UP FOR EVER",
    productName: "Ultra HD Setting Powder 16g",
    category: "Face Powder",
    price: "1440",
  },
  {
    id: 11,
    image: "images/products/3662851232305-removebg-preview.png",
    productBrand: "WOW BEAUTY",
    productName: "Lipstuck - Extreme Wear",
    category: "Lipstick",
    price: "256",
  },
  {
    id: 12,
    image: "images/products/3274872288997-removebg-preview.png",
    productBrand: "GIVENCHY",
    productName: "Teint Cout Balm",
    category: "Foundation",
    price: "920",
  },
];

function print() {
  let P = product.map((item) => {
    return `         <div class="card col m-4" style="width: 18rem">
    <div class="bgImgProduct">
      <div class="bgImgProduct1 border"></div>
      <img
        src="${item.image}"
        class="card-img-top"
        alt="..."
      />
    </div>
    <div class="card-body">
      <div class="text-center">
        <h6 class="card-title mb-0">${item.productBrand}</h6>
        <p class="card-text mb-1">${item.productName}</p>
        <p class="card-text mb-1">
          <small class="text-mutedd">${item.category}</small>
        </p>
        <h5>${item.price} EGP</h5>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <button class="AddCartBtn" onclick="check_and_add_items(${item.id})">Add Cart</button>
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
  </div> `;
  });
  productContainer.innerHTML = P;
}
print();

function heazzrt() {
  // Quanter.style.backgroundColor = "#d87070";

  // if ((localStorage.getItem = "firstName")) {
  //   heart.addEventListener("click", function() {
  //     heart.style.color = "#d87070";
  //   });
  // } else {
  //   window.location = "login.html";
  // }
}
heazzrt();

// open cart
cartIcon.addEventListener("click", (R) => {
  R.preventDefault();
  cart.classList.add("active");
  updateTotal();
});

// close cart
closeCart.addEventListener("click", (R) => {
  R.preventDefault();
  cart.classList.remove("active");
  updateTotal();
});

// cart working
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making functio
function ready() {
  // Remove items from cart
  var removeItemsButtons = document.getElementsByClassName("cart-remove");
  console.log(removeItemsButtons);
  for (var i = 0; i < removeItemsButtons.length; i++) {
    var button = removeItemsButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  // Quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("click", quantityChange);
  }
  // btn work
  document
    .getElementsByClassName("AddCartBtn")[0]
    .addEventListener("click", buyBtnClicked);
}

// buy Btn Clicked
function buyBtnClicked() {}

// remove item from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  Quanterr();
  updateTotal();
}

// quantity Change
function quantityChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  ready();
  updateTotal();
}

function Quanterr() {
  // Quanter.style.display = "block";
  Quanter.style.backgroundColor = "#d87070";
  let carProductLenth = document.querySelectorAll(
    ".cart-box .cart-product-title"
  );
  Quanter.innerHTML = carProductLenth.length;
  if (carProductLenth.length == 0) {
    Quanter.style.backgroundColor = "#d8707000";
    Quanter.innerHTML = "";
  }
  // console.log(carProductLenth.length);
}

function check_and_add_items(id) {
  // console.log(id);
  if ((localStorage.getItem = "firstName")) {
    let chosenItem = product.find((item) => item.id === id);
    cartContent.innerHTML += `
    <div class="cart-box">
      <img
        src="${chosenItem.image}"
        alt=""
        class="cart-img"
      />
      <div class="detail-box">
        <div class="cart-product-title">${chosenItem.category}</div>
        <div class="cart-price">${chosenItem.price} EGP</div>
        <input type="number" value="1" class="cart-quantity" />
      </div>
      <!-- remove cart -->
      <i
        class="fa-solid fa-trash-can cart-remove"
        style="color: #fd0d0d"
      ></i>
    </div> 
    `;

    // let carProductLenth = document.querySelectorAll(
    //   ".cart-box .cart-product-title"
    // );
    // Quanter.innerHTML = carProductLenth.length;

    Quanterr();

    ready();
    updateTotal();
  } else {
    window.location = "login.html";
  }
}

// update total
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("EGP", ""));
    var quantity = quantityElement.value;
    var total = total + price * quantity;
    total = Math.round(total * 100) / 100;
  }
  document.getElementsByClassName("total-price")[0].innerHTML = total + " EGP";
  quantityChange();
}
