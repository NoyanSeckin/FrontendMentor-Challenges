//Some responsive stuff
const container = document.querySelector(".container");
const leftCol = document.querySelector(".left-col");
const row = document.querySelector(".row");

if (screen.width <= 345) {
  container.classList.remove("vh-80");
  leftCol.classList.remove("mt-4", "gap-5", "pe-5");
  row.classList.remove("w-80");
}

// Selecting Dom elements
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people-count");
const resetBtn = document.querySelector(".reset-btn");
const warnPTag = document.getElementById("warn-p-tag");
let tip = 0;
const d5 = document.querySelector("#d5");
const d10 = document.querySelector("#d10");
const d15 = document.querySelector("#d15");
const d25 = document.querySelector("#d25");
const d50 = document.querySelector("#d50");
const customTip = document.querySelector("#custom-input");
let holder = [];

let tipArray = [d5, d10, d15, d25, d50];
// This mapped array defines tip percentage from clicked button values, also adds and removes button active state classes
let mapped = tipArray.map(function (e) {
  e.addEventListener("click", function () {
    tip = Number(e.innerText.split("%").join("")) / 100;
    customTip.value = "";
    holder = [];
    tipArray.forEach((el) => {
      el.classList.remove("strong-cyan");
    });
    e.classList.toggle("strong-cyan");
  });
});
// These code blocks get the custom tip input
customTip.addEventListener("input", function (e) {
  if (e.data === null) {
    holder.pop();
  } else {
    tipArray.forEach((el) => {
      el.classList.remove("strong-cyan");
    });
    holder.push(e.data);
    tip = Number(holder.join("")) / 100;
  }
});
// This is the function which calculates the user input. Also, it activates warning states if user input involves zero
const calculateTip = function (bill, tip, person) {
  if (person === 0) {
    warnPTag.style.display = "inline";
    peopleInput.classList.add("red-border");
  } else if (bill === 0 || tip === 0) {
    alert("Calculation do not accept 0");
  } else {
    warnPTag.style.display = "none";
    totalAmount.innerText =
      "$" + parseFloat((bill * tip + bill) / person).toFixed(2);
    tipAmount.innerText = "$" + parseFloat((bill * tip) / person).toFixed(2);
  }
};
1111;
// This calculates the user input and displays on the screen on "Enter"
addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculateTip(
      Number(billInput.value),
      Number(tip),
      Number(peopleInput.value)
    );
  }
});
// Resets the following
resetBtn.addEventListener("click", function () {
  totalAmount.innerText = "$0.00";
  tipAmount.innerText = "$0.00";
  peopleInput.value = "";
  billInput.value = "";
  customTip.value = "";
  holder = [];
  tipArray.forEach((el) => {
    el.classList.remove("strong-cyan");
  });
});
