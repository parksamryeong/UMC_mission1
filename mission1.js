let username = document.querySelector('#name');
let Fnm = document.querySelector('.nm1');
let Snm = document.querySelector('.nm2');

let email = document.querySelector('#email');
let Fem = document.querySelector('.em1');
let Sem = document.querySelector('.em2');

let age = document.querySelector('#age');
let Fam1 = document.querySelector('.am1');
let Fam2 = document.querySelector('.am2');
let Fam3 = document.querySelector('.am3');
let Fam4 = document.querySelector('.am4');
let Fam5 = document.querySelector('.am5');
let Fam6 = document.querySelector('.am6');
let Sam = document.querySelector('.am7');

let password = document.querySelector('#password')
let Spm = document.querySelector('.pm1');
let Fpm1 = document.querySelector('.pm2');
let Fpm2 = document.querySelector('.pm3');
let Fpm3 = document.querySelector('.pm4');

let confirmPassword = document.querySelector('#confirmPassword');
let Fcpm = document.querySelector('.cpm1');
let Scpm = document.querySelector('.cpm2');



username.addEventListener("keyup", () => {
  if (username.value !== '') {
    Snm.classList.remove('hide');
    Fnm.classList.add('hide');
  }
  else {
    Snm.classList.add('hide');
    Fnm.classList.remove('hide');
  }
});

email.addEventListener("keyup", () => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  if (!isValidEmail) {
    Fem.classList.remove('hide');
    Sem.classList.add('hide');
  }
  else {
    Fem.classList.add('hide');
    Sem.classList.remove('hide');
  }
});

age.addEventListener("keyup", () => {
  if (isNaN(age.value)){
    Fam2.classList.remove('hide');
  }
});

password.addEventListener("keyup", () => {
  const hasLetter = /[a-zA-Z]/.test(password.value);
  const hasNumber = /\d/.test(password.value);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value);

  if (password.value.length >= 4 && password.value.length <=12 && hasLetter && hasNumber && hasSpecialChar) {
    Spm.classList.remove('hide');
    Fpm1.classList.add('hide');
    Fpm3.classList.add('hide');
  }

  if (password.value.length < 4) {
      Fpm1.classList.remove('hide');
  }

  if (password.value.length > 12) {
      Fpm2.classList.remove('hide');
  }

  if (!hasLetter || !hasNumber || !hasSpecialChar) {
      Fpm3.classList.remove('hide');
  }
});

confirmPassword.addEventListener("keyup", () => {
  if (confirmPassword.value !== password.value) {
    Fcpm.classList.remove('hide');
    Scpm.classList.add('hide');
  } else {
    Fcpm.classList.add('hide');
    Scpm.classList.remove('hide');
  }
});



 