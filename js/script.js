let headerRight = document.querySelector('.header-right');
let buttonContacts = document.querySelector('.header-right-title');
let burger = document.querySelector('.burger');



buttonContacts.addEventListener('click', function () {
	headerRight.classList.toggle('active');
});
burger.addEventListener('click', function () {
	headerRight.classList.toggle('burger-on');
});
document.addEventListener('click', function (event) {
	let headerRightTarget = event.target.closest('.header-right');
	let buttonContactsTarget = event.target.closest('.header-right-title');
	let burgerTarget = event.target.closest('.burger');

	if (headerRightTarget || buttonContactsTarget) {
	} else {
		headerRight.classList.remove('active');
	}

	if (headerRightTarget || burgerTarget) {
	} else {
		headerRight.classList.remove('burger-on');
	}
});
document.body.addEventListener('keydown', function (event) {
	if (event.key == "Escape") {
		headerRight.classList.remove('active');
		headerRight.classList.remove('burger-on');
	} else {
		return;
	}
});