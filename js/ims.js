window.addEventListener('load', function () {
	//*@ замена адресов для ссылок поделиться

	let addressURL = window.location.href;
	let siteName = `Туристическое агенство 'Удачный отпуск'`;
	let siteTitle = 'Туры, по всему миру, на любой бюджет';



	let socialVk = document.querySelector('a.social-vk');
	let socialTg = document.querySelector('a.social-tg');
	let socialOk = document.querySelector('a.social-ok');
	let socialWts = document.querySelector('a.social-wts');
	// let socialFb = document.querySelector('a.social-fb');
	// let socialTwit = document.querySelector('a.social-twit');


	socialVk.setAttribute('href', `https://vk.com/share.php?url=${addressURL}`);
	socialTg.setAttribute('href', `https://telegram.me/share/url?url=${addressURL}&text=${siteName}`);
	socialOk.setAttribute('href', `https://connect.ok.ru/offer?url=${addressURL}`);
	socialWts.setAttribute('href', `https://api.whatsapp.com/send?text=${addressURL}`);
	// socialFb.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${addressURL}`);
	// socialTwit.setAttribute('href', `https://twitter.com/intent/tweet?text=${siteName}&url=${addressURL}&via=${siteTitle}`);



	let imagesHidden = document.querySelectorAll('.img-hidden');

	imagesHidden.forEach(i => {
		i.style.display = 'block';
	});


















	console.log(document.querySelector('.content-slaid1 picture'));


	function waitForElement(elementId, callBack) {
		window.setTimeout(function () {
			var element = document.getElementById(elementId);
			if (element) {
				callBack(elementId, element);
			} else {
				waitForElement(elementId, callBack);
			}
		}, 500)
	}

	waitForElement('slide1-img', function () {
		console.log('Ghbstn');

		const fonts = [
			new FontFace("Montserrat", 'url(./fonts/Montserrat-Bold.woff2)', {
				weight: "700",
				stretch: "condensed",
			}),
			new FontFace("Montserrat", 'url(./fonts/Montserrat-SemiBold.woff2)', {
				weight: "600",
				stretch: "condensed",
			}),
			new FontFace("Montserrat", 'url(./fonts/Montserrat-Medium.woff2)', {
				weight: "500",
				stretch: "condensed",
			}),
			new FontFace("Gilroy", 'url(./fonts/Gilroy-Semibold.woff2)', {
				weight: "600",
				stretch: "condensed",
			}),
		];
		fonts.forEach(fontFace => {
			document.fonts.add(fontFace);
		});


	});






});