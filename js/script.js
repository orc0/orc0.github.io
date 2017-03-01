var link = document.querySelector(".feedback-btn")
var popup = document.querySelector(".modal-field");
var background = document.querySelector(".modal-background");
var close = document.querySelector(".modal-field-close");
var user = popup.querySelector("[name=username]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

link.addEventListener("click", function(event)	{
	event.preventDefault();
	background.classList.add("modal-background-show");
	popup.classList.add("modal-field-show");
	user.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-field-show");
	background.classList.remove("modal-background-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event){
	
	if (!user.value || !email.value || !text.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		var storageName = localStorage.getItem("user");
		var storageEmail = localStorage.getItem("email");
		localStorage.setItem("user", user.value);
		localStorage.setItem("email", email.value);
		localStorage.setItem("text", text.value);
	}	
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-field-show")) {
			popup.classList.remove("modal-field-show");
			background.classList.remove("modal-background-show");
		}	
	}
});

