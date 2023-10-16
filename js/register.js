let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let fullName = firstName + lastName;
let emailAddress = document.querySelector("#emailAddress");
let password = document.querySelector("#password");
let registerBTN = document.querySelector("#Sign_Up");

// console.log(fullName);
registerBTN.addEventListener("click", function (R) {
  R.preventDefault();
  // localStorage.setItem("fullName", fullName.value);
  localStorage.setItem("firstName", firstName.value);
  localStorage.setItem("lastName", lastName.value);
  localStorage.setItem("emailAddress", emailAddress.value);
  localStorage.setItem("password", password.value);

  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});
