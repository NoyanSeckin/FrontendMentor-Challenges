const container = document.getElementById("container");
const startText = document.getElementById("start-text");
const inputsP = document.getElementById("inputs-p");
const startH1 = document.getElementById("start-h1");
const clickBtn = document.querySelector(".click-btn");
const inputsLid = document.querySelector(".inputs");

const choose = function (str) {
  return document.querySelector(str);
};
const firstDiv = {
  div: choose(".div-first"),
  input: choose(".fName-input"),
  errorImg: choose(".error-img-first"),
  errorP: choose(".error-p-first"),
};

const lastDiv = {
  div: choose(".div-last"),
  input: choose(".lName-input"),
  errorImg: choose(".error-img-last"),
  errorP: choose(".error-p-last"),
};

const emailDiv = {
  div: choose(".div-email"),
  input: choose(".email-input"),
  errorImg: choose(".error-img-email"),
  errorP: choose(".error-p-email"),
};

const passwordDiv = {
  div: choose(".div-password"),
  input: choose(".password-input"),
  errorImg: choose(".error-img-password"),
  errorP: choose(".error-p-password"),
};

const addClass = function (el, str) {
  el.classList.add(str);
};

const removeClass = function (el, str) {
  el.classList.remove(str);
};

const addDNone = function (div, ...el) {
  addClass(div, "mb-3");

  for (i = 0; i < el.length; i++) {
    addClass(el[i], "d-none");
  }
};

const removeDNone = function (div, ...el) {
  for (i = 0; i < el.length; i++) {
    removeClass(el[i], "d-none");
  }
};

if (screen.width < 400) {
  container.classList.add("flex-column", "gap-4", "mt-5");
  container.style.height = null;
  container.style.margin = "auto";
  startText.classList.add("container-fluid", "text-center");
  inputsP.classList.add("text-center", "px-5", "pt-3");
  inputsP.style.fontSize = 14 + "px";
  startH1.style.fontSize = 20 + "px";
  startH1.classList.add("px-5", "mb-3");
  removeClass(inputsLid, "pt-3");
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    // document.form1.text1.focus();
    return true;
  } else {
    // document.form1.text1.focus();
    return false;
  }
}

clickBtn.addEventListener("click", function () {
  firstDiv.input.value && firstDiv.input.innerText === ""
    ? addDNone(firstDiv.div, firstDiv.errorImg, firstDiv.errorP)
    : removeDNone(firstDiv.div, firstDiv.errorP, firstDiv.errorImg);
  lastDiv.input.value && lastDiv.input.innerText === ""
    ? addDNone(lastDiv.div, lastDiv.errorImg, lastDiv.errorP)
    : removeDNone(lastDiv.div, lastDiv.errorImg, lastDiv.errorP);
  passwordDiv.input.value && passwordDiv.input.innerText === ""
    ? addDNone(passwordDiv.div, passwordDiv.errorImg, passwordDiv.errorP)
    : removeDNone(passwordDiv.div, passwordDiv.errorImg, passwordDiv.errorP);

  ValidateEmail(emailDiv.input) === true
    ? addDNone(emailDiv.div, emailDiv.errorImg, emailDiv.errorP)
    : removeDNone(emailDiv.div, emailDiv.errorImg, emailDiv.errorP);
});
