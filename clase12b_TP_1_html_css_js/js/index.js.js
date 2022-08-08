
const play = document.querySelector(".play")

play.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "./img/RyM.mp3")
  etiquetaAudio.play()
});

