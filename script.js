lucide.createIcons();

const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const progressBar = document.getElementById('progress-bar');

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playIcon.setAttribute('data-lucide', 'pause');
    } else {
        audio.pause();
        playIcon.setAttribute('data-lucide', 'play');
    }
    lucide.createIcons();
};

audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
};

progressBar.oninput = () => {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
};

const fechaBoda = new Date(2026, 7, 15, 18, 0, 0).getTime(); 

  const intervalo = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    // Cálculos de tiempo
    const d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar resultados
    document.getElementById("dias").innerText = d;
    document.getElementById("horas").innerText = h;
    document.getElementById("minutos").innerText = m;
    document.getElementById("segundos").innerText = s;

    // Si la cuenta termina
    if (distancia < 0) {
      clearInterval(intervalo);
      document.getElementById("contador").innerHTML = "¡HOY ES EL GRAN DÍA!";
    }
  }, 1000);