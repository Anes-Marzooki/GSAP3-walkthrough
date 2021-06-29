const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const reverseBtn = document.querySelector('.reverse');
const restartBtn = document.querySelector('.restart');

const myTween = gsap.to('.tmux', {
	x: 200,
	duration: 5,
	ease: 'linear',
	paused: true,
});

window.addEventListener('load', () => {
	playBtn.addEventListener('click', () => myTween.play());
	pauseBtn.addEventListener('click', () => myTween.pause());
	reverseBtn.addEventListener('click', () => myTween.reverse());
	restartBtn.addEventListener('click', () => myTween.restart());
});
