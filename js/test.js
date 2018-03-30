(function () {
	'use strict'

	let isAnimated = false;

	const btn = document.getElementById('nav_img'),
		back = document.getElementById('background'),
		nav = document.getElementById('navi'),
		navStyle = nav.style,
		backStyle = back.style,
		backOpacity = 0.6,
		navWidth = nav.offsetWidth,
		duration = 800,
		easingSqrt = (t, b, c, d) => {
			t /= d;
			t--;
			return c * Math.sqrt(1 - t * t) + b
		},
		toggleFn = () => {
			if (isAnimated === false) {
				isAnimated = true;
				const start = new Date() * 1,
					toggle = () => {
						
						let current = new Date() - start,
							left = easingSqrt(current, 0, navWidth, duration),
							opacity = easingSqrt(current, 0, backOpacity, duration);
						
						if (nav.classList.contains('opened') === false) {
							navStyle.left = left - navWidth + 'px';
							backStyle.opacity = opacity;

							if (current >= duration) {
								clearInterval(toggleInterval);
								navStyle.left = '0';
								backStyle.opacity = backOpacity;
								nav.classList.add('opened');
								isAnimated = false;
								return;
							}

						} else {

							navStyle.left = left * -1 + 'px';
							backStyle.opacity = backOpacity - opacity;

							if (current >= duration) {
								clearInterval(toggleInterval);
								navStyle.left = navWidth * -1 + 'px';
								backStyle.opacity = '0';
								backStyle.display = 'none';
								nav.classList.remove('opened');
								isAnimated = false;
								return;
							}
						}
					},
					toggleInterval = setInterval(toggle, 16);
				backStyle.display = 'block';
			}
		};


	btn.addEventListener('click', toggleFn);
	back.addEventListener('click', toggleFn);
	console.log(backOpacity);
}());
