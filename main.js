"use strict";

// grab both of email forms
const heroButtonForm = document.querySelector("#hero-button");
const earlyAccessButtonForm = document.querySelector("#early-access-button");

// grab both email input element
const heroInput = document.querySelector("#hero-email");
const earlyAccessInput = document.querySelector("#early-access-email");

// grab error message element
const heroErrorMessage = document.querySelector("#hero-error-message");
const earlyAccessErrorMessage = document.querySelector(
  "#early-access-error-message"
);

heroButtonForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let heroInputValue = document.querySelector("#hero-email").value;
  if (validateEmail(heroInputValue)) {
    heroInput.classList.remove("error-email");
    heroErrorMessage.classList.remove("text-[red]");
    heroErrorMessage.classList.add("text-[green]");
    heroErrorMessage.textContent = "Subscribed successfully ☑";
  } else {
    heroErrorMessage.textContent = "Please check your email ❌";
    heroInput.classList.add("error-email");
    heroErrorMessage.classList.remove("text-[green]");
    heroErrorMessage.classList.add("text-[red]");
  }
});

earlyAccessButtonForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let earlyAccessValue = document.querySelector("#early-access-email").value;
  if (validateEmail(earlyAccessValue)) {
    earlyAccessInput.classList.remove("error-email");
    earlyAccessErrorMessage.textContent = "Subscribed successfully ☑";
  } else {
    earlyAccessErrorMessage.textContent = "Please check your email ❌";
    earlyAccessInput.classList.add("error-email");
  }
});

// function to validate email address using regular expression pattern
function validateEmail(email_id) {
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex_pattern.test(email_id)) {
    return true;
  } else {
    return false;
  }
}
