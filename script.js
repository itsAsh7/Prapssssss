// Helper: fade switch
function switchScene(hide, show) {
  // fade out old scene
  hide.classList.remove("active");

  // after fade-out, hide it completely
  setTimeout(() => {
    hide.style.display = "none";

    // prepare new scene
    show.style.display = "flex"; // matches .scene flex layout
    setTimeout(() => show.classList.add("active"), 50);
  }, 1000); // matches CSS transition (1s)
}

// Step 1: Envelope → open
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

// Scenes
const envelopeScene = document.getElementById("envelope-scene");
const galleryScene = document.getElementById("gallery-scene");
const questionScene = document.getElementById("question-scene");
const nightScene = document.getElementById("night-scene");

// Initialize first scene as active
envelopeScene.style.display = "flex";
envelopeScene.classList.add("active");

// Step 2: Letter "Next" → Gallery
const toGallery = document.getElementById("toGallery");
toGallery.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent triggering envelope again
  switchScene(envelopeScene, galleryScene);
});

// Step 3: Gallery "Next" → Question
const closeGallery = document.getElementById("closeGallery");
closeGallery.addEventListener("click", () => {
  switchScene(galleryScene, questionScene);
});

// Step 4: Question logic
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const answer = document.getElementById("answer");

yesBtn.addEventListener("click", () => {
  answer.classList.remove("hidden");
});

// "No" runs away
noBtn.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const offsetX = e.clientX - (rect.left + rect.width / 2);
  const offsetY = e.clientY - (rect.top + rect.height / 2);

  if (Math.abs(offsetX) < 80 && Math.abs(offsetY) < 50) {
    const newX = (Math.random() - 0.5) * 400;
    const newY = (Math.random() - 0.5) * 200;
    noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
  }
});

// Step 5: Answer "OK" → Night sky
const toNight = document.getElementById("toNight");

// Helper: fade audio
function fadeAudio(audio, from, to, duration, callback) {
  let step = (to - from) / (duration / 100);
  let vol = from;
  let interval = setInterval(() => {
    vol += step;
    if ((step < 0 && vol <= to) || (step > 0 && vol >= to)) {
      vol = to;
      clearInterval(interval);
      if (callback) callback();
    }
    audio.volume = Math.max(0, Math.min(1, vol));
  }, 100);
}

toNight.addEventListener("click", () => {
  // Switch scenes visually
  switchScene(questionScene, nightScene);

  // Fade out music1 over 2s
  fadeAudio(bgMusic1, bgMusic1.volume, 0, 2000, () => {
    bgMusic1.pause();
    bgMusic1.currentTime = 0;
  });

  // After 1 second silence → fade in music2 over 3s
  setTimeout(() => {
    bgMusic2.volume = 0;
    bgMusic2.play().catch(err => console.log("Autoplay blocked:", err));
    fadeAudio(bgMusic2, 0, 0.6, 3000);
  }, 1000);
});

