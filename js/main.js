const navBtn = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggler');
const closeBtn = document.getElementById('closeicon');

toggleBtn.addEventListener('click', () => {
    navBtn.classList.add('show')

})
closeBtn.addEventListener('click', () => {
    navBtn.classList.remove('show')
})

const nav = document.querySelectorAll('.navbar');

function takeAction() {
    navBtn.classList.remove('show')
}
nav.forEach(n => n.addEventListener('click', takeAction))

// Make Header active on scrollY greater than 500px

function boxShadow() {
    const scrollHeader = document.getElementById('header')
    if (this.scrollY >= 85)

        scrollHeader.classList.add('header-active')

    else
        scrollHeader.classList.remove('header-active')

}
window.addEventListener('scroll', boxShadow)

// voice note
var player = document.getElementById('player');
let progress = document.getElementById('progress');
let playBtn = document.getElementById('playIcon');

var playpause = function() {

    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}
playBtn.addEventListener('click', playpause);

player.onplay = function() {
    playBtn.classList.remove('uil-play');
    playBtn.classList.add('uil-pause');
}

player.onpause = function() {
    playBtn.classList.add('uil-play');
    playBtn.classList.remove('uil-pause');
}

player.ontimeupdate = function() {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);
    
    // progress
    let duration = player.duration;
    prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + "%");

}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}

// add move top button
const toTopBtn = document.querySelector('.to-top-btn');

function showBtn() {

    if (scrollY >= 100) {
        toTopBtn.style.display = 'block'
    } else {
        toTopBtn.style.display = 'none'
    }
}
window.addEventListener('scroll', showBtn)

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
})

sr.reveal(`.banner`, {
    interval: 200
})

sr.reveal(`.left-col`, {
    origin: 'left',
    distance: '60px',
    interval: 300
})
sr.reveal(`.right-col`, {
    origin: 'right',
    distance: '60px',
    interval: 300
})