"use strict";

const phoneInput = document.getElementById("phoneId");
const phoneMessage = document.getElementById("phoneSpan");
const patternPhone = /^[\d\+][\d\(\)\ -]{4,15}\d$/;

phoneInput.addEventListener("input", (event) => {
  const phone = event.target.value;
  const isPhoneValid = patternPhone.test(phone);
  if (isPhoneValid) {
    phoneMessage.textContent = "Valid Phone";
  } else {
    phoneMessage.textContent = "Invalid Phone";
  }
});

const emailInput = document.getElementById("emailId");
const emailMessage = document.getElementById("emailSpan");
const patternEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

emailInput.addEventListener("input", (event) => {
  const email = event.target.value;
  const isEmailValid = patternEmail.test(email);
  if (isEmailValid) {
    emailMessage.textContent = "Valid Email";
  } else {
    emailMessage.textContent = "Invalid Email";
  }
});
debugger;
const fullNameInput = document.getElementById("fullNameId");
const fullNameMessage = document.getElementById("fullNameSpan");
const patternFullName = /^(?=.*[A-ZА-ЯЇЄЁ])[a-zA-Zа-яїєёА-ЯЇЄЁ]+\s+(?=.*[A-ZА-ЯЇЄЁ])[a-zA-Zа-яїєёА-ЯЇЄЁ]+\s+(?=.*[A-ZА-ЯЇЄЁ])[a-zA-Zа-яїєёА-ЯЇЄЁ]+$/;

fullNameInput.addEventListener("input", (event) => {
  debugger;
  const fullName = event.target.value;
  const isFullNameValid = patternFullName.test(fullName);
  if (isFullNameValid) {
    fullNameMessage.textContent = "Valid Fullname";
  } else {
    fullNameMessage.textContent = "Invalid Fullname";
  }
});

let myButton = document.getElementById("myButton");

myButton.addEventListener(
  "click",
  function () {
    myButton.className = myButton.className + " loading";
    setTimeout(removeClass, 5000);
  },
  false
);

function removeClass() {
  const element = document.getElementById("myButton");
  element.classList.remove("button");
  document.getElementById("myButton").onClick = document.location =
    "index1.html";
}
