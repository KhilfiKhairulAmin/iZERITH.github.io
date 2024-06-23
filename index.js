// Objective: Automate play audio for iZERITH

let audio = new Audio('./happy.mp3')

navigator.mediaDevices.getUserMedia({
  audio: true
})
.then((stream) => {
  audio.play()
})
