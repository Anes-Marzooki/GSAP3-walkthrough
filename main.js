const linear = document.querySelector('.tmux1');
const elastic = document.querySelector('.tmux2');
const bounce = document.querySelector('.tmux3');
const run = document.querySelector('.run');

const animate = () => {
	gsap.to(linear, { x: 200, duration: 2, ease: 'linear' });
	gsap.to(elastic, { x: 200, duration: 2, ease: 'elastic' });
	gsap.to(bounce, { x: 200, duration: 2, ease: 'bounce.in' });
};

window.addEventListener('load', () => {
	run.addEventListener('click', animate);
});
