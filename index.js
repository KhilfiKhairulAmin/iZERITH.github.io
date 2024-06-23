// Objective: Automate play audio for iZERITH

const music = document.getElementById("music")

// navigator.mediaDevices.getUserMedia({
//   audio: true,
// })
// .then((stream) => {
//   music.play()
// })

const img = document.getElementById("img")

img.addEventListener("click", (e) => {
  music.play()
})
