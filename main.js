const img = document.querySelector('.tmux');
const fromBtn = document.querySelector('.from');
const fromToBtn = document.querySelector('.fromTo');

const from = () => {
	gsap.from(img, {
		x: 400,
		y: 200,
	});
};

const fromTo = () => {
	gsap.fromTo(
		img,
		{
			x: 400,
			y: 400,
		},
		{
			x: 200,
			y: 200,
		}
	);
};

window.addEventListener('load', () => {
	fromBtn.addEventListener('click', from);
	fromToBtn.addEventListener('click', fromTo);
});
