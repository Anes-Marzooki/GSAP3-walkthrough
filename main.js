const run = document.querySelector('.run');

const animate = () => {
	gsap.to('.squares .square', {
		scale: -1,
		stagger: {
			amount: 1,
			grid: 'auto',
			from: 'center',
		},
	});
};

window.addEventListener('load', () => {
	run.addEventListener('click', animate);
});
