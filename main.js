const img = document.querySelector('.tmux');
const btn = document.querySelector('.run');

const animate = () => {
	gsap.to(img, {
		rotationY: 180,
		x: 400,
		y: 200,
		scale: 3,
		duration: 3,
	});
};

window.addEventListener('load', () => {
	btn.addEventListener('click', animate);
});
