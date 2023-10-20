let progress = document.getElementById("progress")
let song = document.getElementById("song")
let controlIcon = document.getElementById("controlIcon")

let sImage = document.getElementById("sImage")
let sinName = document.getElementById("sinName")
let soName = document.getElementById("soName")

let data = [{
    singerImage: "media/cairokee.jpg",
    singerSong: "media/Cairokee - James Dean.mp3",
    singerName: "CairoKee",
    songName: "James Dean"
}, {
    singerImage: "media/lanadelray.jpg",
    singerSong: "media/Lana Del Rey - Summertime Sadness.mp3",
    singerName: "Lana Del Ray",
    songName: "Summertime Sadness"
}, {
    singerImage: "media/tamino.jpg",
    singerSong: "media/Tamino - You Don't Own Me.mp3",
    singerName: "Tamino",
    songName: "You Don't Own Me"
}]

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause()
        controlIcon.classList.remove("fa-pause")
        controlIcon.classList.add("fa-play")

    } else {
        song.play()
        controlIcon.classList.add("fa-pause")
        controlIcon.classList.remove("fa-play")
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value
    controlIcon.classList.add("fa-pause")
    controlIcon.classList.remove("fa-play")
}

let i = 0
sImage.src = data[0].singerImage
song.src = data[0].singerSong
sinName.innerText = data[0].singerName
soName.innerText = data[0].songName
// console.log(data.singerImage.length)
function nextMusic() {
    i++
    if (i == 3)
        i = 0
    console.log(i)
    sImage.src = data[i].singerImage
    song.src = data[i].singerSong
    sinName.innerText = data[i].singerName
    soName.innerText = data[i].songName
}


function previousMusic() {
    if (i == 0) {
        i = 3
    }
    i--
    console.log(i)
    sImage.src = data[i].singerImage
    song.src = data[i].singerSong
    sinName.innerText = data[i].singerName
    soName.innerText = data[i].songName
}