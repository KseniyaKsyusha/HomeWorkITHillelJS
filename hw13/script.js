"use strict";

const valuePassword = document.querySelector(".password").value;
const passwordInput = document.getElementById("passwordId").value;
const emailInput = document.getElementById("loginId").value;


// document.getElementById("myButton").onclick = function () {
//   myFunctionTimeout();
// };

// function myFunctionTimeout() {
//   const myTimeout = setTimeout(myFunction, 5000);
//   document.getElementById("buttonId").onClick = document.location =
//     "index.html";
// }

let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
    console.log(`Login: ${emailInput}`);
    console.log(`Password: ${valuePassword}`);
    console.log(`Password: ${passwordInput}`);
    
    console.log(`Screen size: ${screen.width}x${screen.height}px`);
    myButton.className = myButton.className + " loading";
    setTimeout(removeClass, 2000);
  },
  false
);

function removeClass() {
    myButton.className = myButton.className.replace(new RegExp("(?:^|\\s)loading(?!\\S)"), "" );
    document.getElementById("myButton").onClick = document.location = "index1.html";
}
