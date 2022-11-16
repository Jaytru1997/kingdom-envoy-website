"use strict";

const toggler = document.querySelectorAll(".toggle-password2");
const password = document.querySelector("#password");
const conpassword = document.querySelector("#conpassword");
// console.log(toggler, location.pathname);

toggler.forEach((t) => {
  t.addEventListener("click", (e) => {
    if (password.type === "text") {
      t.classList =
        "fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2";
      password.type = "password";
      conpassword.type = "password";
    } else if (password.type === "password") {
      t.classList =
        "fa fa-fw fa-eye text-light fs-16 field-icon toggle-password2";
      password.type = "text";
      conpassword.type = "text";
    }
  });
});
