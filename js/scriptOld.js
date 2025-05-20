let contentSlider = new Swiper('.content-slider', {
	//*@ Включение/отключение перетаскивания на ПК
	//* по умолчанию включено
	simulateTouch: true,
	// simulateTouch: false,
	//* Чувствительность свайпа от 0 до 1, где 0 полный игнор перетаскивания
	touchRatio: 1,
	//* Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//* Курсор перетаскивания в виде руки, при true
	grabCursor: true,
	//grabCursor: false,
	//*@ Управление клавиатурой
	keyboard: {
		//* Включить\выключить переключение стрелками, на клавиатуре
		enabled: true,
		//enabled: false,
		//* Включить\выключить переключение только когда слайдер, в пределах вьюпорта(окна браузера)
		//onlyInViewport: true,
		onlyInViewport: false,
		//* Включить\выключить управление клавишами pageUp, pageDown
		pageUpDown: true,
	},

	//*@ Управление колесом мыши
	mousewheel: {
		//* Чувствительность колеса мыши
		sensitivy: 1,
		// sensitivy: 0,
		//* Класс объекта на котором будет срабатывать прокрутка мышью (как ни странно работает и без него)
		//eventsTarget: ".page-slider"
	},
	//*@ Количество пролистываемых слайдов
	slidesPerGroup: 1,
	//*@ Бесконечный слайдер
	//* Сенсей говорит, что надо отключать scroll, но всё работает:))
	//* 2) нельзя использовать с мультирядностью, но я и так её включить не смог
	//* 3) если мы используем slidesPerView, со значением 'auto', то нужно указывать кол-во дублирующих слайдов
	loop: true,
	//*@ Обновление свайпера
	//*@ Не смог проверить, всё подозрительно хорошо работало и так
	//* Обновить свайпер, при изменении элементов слайдера
	observer: true,

	//* Обновить свайпер, при изменении родительских элементов слайдера
	observeParents: true,

	//* Обновить свайпер, при изменении дочерних элементов, внутри, слайда
	observeSlideChildren: true,
});

let contentButtonPrev = document.querySelector('.content-button-prev');
let contentButtonNext = document.querySelector('.content-button-next');


contentButtonPrev.addEventListener('click', function () {
	if (contentSlider.realIndex > 0) {
		contentSlider.slideTo(contentSlider.realIndex, 500, false);
	} else {
		contentSlider.slideTo(document.querySelectorAll('.swiper-slide').length - 2, 700, false);
	}
});

contentButtonNext.addEventListener('click', function () {
	if (contentSlider.realIndex < 3) {
		contentSlider.slideTo(contentSlider.realIndex + 2, 500, false);
	} else {
		contentSlider.slideTo(1, 700, false);
	}
});
document.querySelector('.content-slider').addEventListener('click', function () {
	if (contentSlider.realIndex < 3) {
		contentSlider.slideTo(contentSlider.realIndex + 2, 500, false);
	} else {
		contentSlider.slideTo(1, 700, false);
	}
});

let contentBlock = document.querySelector('.content');
let contentRight = document.querySelector('.content-right');
let contentLeft = document.querySelector('.content-left');
let contentLeftText = document.querySelector('.content-left .text');

let rearrangingBlocks = function () {
	if (document.documentElement.clientWidth <= 1280) {
		contentLeft.insertBefore(contentRight, contentLeftText);
	} else {
		contentBlock.insertBefore(contentRight, null);
	}
}
rearrangingBlocks();

let burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
	document.body.classList.toggle('burger-on');
});



//*@ изменение титула на нужную характеристику
/* let titleLeft = document.querySelector('.content-left .title');
console.log(titleLeft);
titleLeft.innerHTML = `${getComputedStyle(document.querySelector('.content-left .text')).lineHeight}`
	*/



const resize1 = function () {
	//* перестановка блоков
	rearrangingBlocks();
	//* другие полезные функции
};
resize1();
window.addEventListener('resize', function () {
	resize1();
});
window.addEventListener('orientationchange', function () {
	resize1();
});
