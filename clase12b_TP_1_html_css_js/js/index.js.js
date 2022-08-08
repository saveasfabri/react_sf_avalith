
const play = document.querySelector(".play")

play.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "./img/RyM.mp3")
  etiquetaAudio.play()
});


const click1 = document.querySelector(".uno")

click1.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "./img/click.wav")
  etiquetaAudio.play()
});

const click2 = document.querySelector(".dos")

click2.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "./img/click.wav")
  etiquetaAudio.play()
});

const click3 = document.querySelector(".tres")

click3.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "./img/click.wav")
  etiquetaAudio.play()
});

const click4 = document.querySelector(".cuatro")

click4.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "./img/click.wav")
  etiquetaAudio.play()
});
