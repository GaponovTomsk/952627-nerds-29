const contacts_Button = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal");
const modal_Close = document.querySelector(".modal-close");
const login = popup.querySelector("[name=login]");
const email = popup.querySelector("[name=email]");
const form = popup.querySelector("form");

const storageEmail = localStorage.getItem("email");

let isStorageSupport = true;
let storageLogin = "";

try {
	storageLogin = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
} 

contacts_Button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	
	if (storageLogin) {
		login.value = storageLogin;
		email.focus();
	} else {
		login.focus();
	}
});

modal_Close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt){
	if(!login.value || !email.value) {
	evt.preventDefault();
	alert("Вы не ввели логин или пароль! Попробуйте ещё раз!");
	} else { 
		if (isStorageSupport) {
		localStorage.setItem("login", login.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
			if (popup.classList.contains("modal-show")) {
				evt.preventDefault();
				popup.classList.remove("modal-show");
			}
	}
});