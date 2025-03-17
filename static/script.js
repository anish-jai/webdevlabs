let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
   let x3 = x1 + x2;
   console.log(x3);
   return x3;
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
   console.log(C);
}
else if (C.length < z) {
   console.log(z);
}
else {
   console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found at " + i + "!");
//          }
//     }
// }

function checkBanana(fruit, ind) {
   if (fruit === "Banana") {
      alert("Banana found at " + ind + "!");
   }
}

function findTheBanana(arr) {
   arr.forEach(checkBanana);
}

function greetingFunc() {
   let d = new Date();
   let h = d.getHours();
   let E = document.getElementById("greeting");

   if ((h >= 20 && h < 24) || (h >= 0 && h < 5))
   {
      E.innerHTML = "Good night";
   }
   else if (h < 12)
   {
      E.innerHTML = "Good morning";
   }
   else if (h < 18)
   {
      E.innerHTML = "Good afternoon";
   }
   else if (h < 20)
   {
      E.innerHTML = "Good evening";
   }
   E.innerHTML += ", I am Anish.";
}

// findTheBanana(L1);
// findTheBanana(L2);



if (window.location.pathname === "/" || window.location.pathname === "" || window.location.href.includes("index.html")) {
   greetingFunc();
}

function addYear() {
   let yearElem = document.getElementById("copyYear");
   if (yearElem) {
       let currentYear = new Date().getFullYear();
       yearElem.innerHTML = `&copy; ${currentYear}`;
   }
}

function showList() {
   document.getElementById("funList").style.display = "block";
   document.getElementById("showButton").style.display = "none";
}

$(document).ready(function() {
   $("#readMore").click(function() {
       $("#allBio").slideDown();
       $("#readMore").hide();
       $("#readLess").show();
   });

   $("#readLess").click(function() {
       $("#allBio").slideUp();
       $("#readLess").hide();
       $("#readMore").show();
   });
});

let form = document.getElementById('contactForm');
if (form) {
   const name = document.getElementById('name');
   const email = document.getElementById('email');
   const message = document.getElementById('message');

   [name, email, message].forEach(input => {
      input.addEventListener('invalid', function (event) {
         error1.textContent = "Please make the inputs to the form valid before submitting!";
      });
   });

}
