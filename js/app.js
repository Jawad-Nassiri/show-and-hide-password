const passwordInput = document.querySelector(".password");
const showPasswordIcon = document.querySelector(".show-password");

let isShowPassword = false;

showPasswordIcon.addEventListener("click", function () {

  //! first way (recommended)
  isShowPassword = !isShowPassword
  isShowPassword ? passwordInput.type = 'text' : passwordInput.type = 'password'

  //!  second way 
   
  // if (isShowPassword) {
  //   passwordInput.setAttribute("type", "password");
  //   isShowPassword = false;
  // } else {
  //   passwordInput.setAttribute("type", "text");
  //   isShowPassword = true;
  // }

});
