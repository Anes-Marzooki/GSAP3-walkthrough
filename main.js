const tmux = document.querySelector('.tmux');
const gnu = document.querySelector('.gnu');
const run = document.querySelector('.run');

const animate = () => {
	gsap.to(tmux, { x: 200, duration: 2, repeat: 1 });
	gsap.to(gnu, { x: 200, duration: 2, delay: 2 });
};

window.addEventListener('load', () => {
	run.addEventListener('click', animate);
});
