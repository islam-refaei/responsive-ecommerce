let emailAddress = document.querySelector("#emailAddress");
let password = document.querySelector("#password");
let logInBtn = document.querySelector("#login");

let getEmailAddress = localStorage.getItem("emailAddress");
let getPassword = localStorage.getItem("password");

logInBtn.addEventListener("click", (R) => {
  R.preventDefault();
  if (
    getEmailAddress &&
    getEmailAddress.trim() === emailAddress.value.trim() &&
    getPassword &&
    getPassword.trim() === password.value
  ) {
    setTimeout(() => {
      window.location = "index.html";
    }, 1000);
  } else {
    alert("user name or password wrong!");
    // emailAddress.innerHTML = "";
  }
});
