
		toggle = function () {

			const start = new Date() * 1,
				  toggleFn = function () {
					if (isAnimated === false) {
						isAnimated = true;

						let current = new Date() - start,
							i=0;

						if (nav.classList.contains('opened') === false) {
						let	slide = easingSqrt(current, 0, navWidth, duration),
							opacity = easingSqrt(current, 0, 0.7, duration);
							navStyle.left = navWidth - slide + 'px';
							backStyle.opacity = opacity;
							
							console.log(i++);
							if (current >= duration) {
								nav.classList.add('opened');
								//clearInterval(slideInterval);
								navStyle.left = '0';
								backStyle.opacity = '0.7';
								isAnimated = false;
								return;
							}
						} else {
							let current = new Date() - start;
							let	slide = easingSqrt(current, -320, navWidth, duration),
							opacity = easingSqrt(current, 0, 0.7, duration);
							navStyle.left = -slide + 'px';
							backStyle.opacity = 0.7 - opacity;

							if (current >= duration) {
								nav.classList.remove('opened');
								//clearInterval(slideInterval);
								navStyle.left = navWidth * -1 + 'px';
								backStyle.display = 'none';
								isAnimated = false;
								return;
							}
						}
					}
				},
				slideInterval = setInterval(toggleFn, 16);
			backStyle.display = 'block';

		};
	btn.addEventListener('click',toggle);
	console.log(navWidth);
/*
(function () {
	'use strict'

	const dt = document.getElementsByTagName('dt'),
		duration = 1000,
		ddPadding = 10,
		easingSqrt = (t, b, c, d) => {
			t /= d;
			t--;
			return c * Math.sqrt(1 - t * t) + b
		},
		easingLiner = (t, b, c, d) => {
			return c * t / d + b;
		};

	let isAnimate = false;

	for (let i = 0; i < dt.length; i++) {

		const accordion = function () {
			if (isAnimate === false) {
				isAnimate = true;

				const dd = this.nextElementSibling,
					ddStyle = dd.style,
					ddScr = dd.scrollHeight + ddPadding * 2,
					ddopac = ddStyle.opacity,
					start = new Date() * 1,
					toggle = () => {
						let current = new Date() - start;
						if (dd.classList.contains('opened') === false) {

							let H = easingSqrt(current, 0, ddScr, duration),
								P = easingLiner(current, 0, ddPadding, duration),
								opacity = easingLiner(current, ddopac, 1, duration);
							ddStyle.height = H + 'px';
							ddStyle.paddingTop = P + 'px';
							ddStyle.paddingBottom = P + 'px';
							ddStyle.opacity = opacity;
							if (current >= duration) {
								clearInterval(toggleFn);
								ddStyle.height = 'auto';
								ddStyle.paddingTop = ddPadding + 'px';
								ddStyle.paddingBottom = ddPadding + 'px';
								ddStyle.opacity = '1';
								dd.classList.add('opened');
								isAnimate = false;
								return;
							}
						} else {
							let H = easingSqrt(current, 0, ddScr, duration),
								P = easingSqrt(current, 0, ddPadding, duration),
								opacity = easingLiner(current, ddopac, 0.5, duration);
							ddStyle.height = ddScr - H + 'px';
							ddStyle.opacity = ddopac - opacity;
							ddStyle.paddingTop = ddPadding - P + 'px';
							ddStyle.paddingBottom = ddPadding - P + 'px';
							//console.log(H);
							//console.log(opacity);
							if (current >= duration) {
								clearInterval(toggleFn);
								ddStyle.height = '0';
								ddStyle.opacity = '0';
								ddStyle.border = 'none';
								ddStyle.paddingTop = '0';
								ddStyle.paddingBottom = '0';
								dd.classList.remove('opened')
								isAnimate = false;
								return;
							}

						}
					},
					toggleFn = setInterval(toggle, 16);
				ddStyle.border = 'solid 1px #444444';
			}
		};
		
		
		dt[i].addEventListener('click', accordion);
		
	}
})();

*/
