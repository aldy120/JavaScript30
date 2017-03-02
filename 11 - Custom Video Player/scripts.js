/* get our element */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtoms = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* build up function */
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}
/* hook up the event listener */