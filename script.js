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

  // Start intro music on first click (autoplay allowed here)
  if (!musicStarted) {
    fadeIn(bgMusic1, 0.6, 1000); // fade in over 1s
    musicStarted = true;
  }
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

// Gallery lightbox
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-btn");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
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
const bgMusic1 = document.getElementById("bgMusic1");
const bgMusic2 = document.getElementById("bgMusic2");

// Helpers for fade effects
function fadeOut(audio, duration, callback) {
  let vol = audio.volume;
  let step = vol / (duration / 100);
  let interval = setInterval(() => {
    vol -= step;
    if (vol <= 0) {
      vol = 0;
      clearInterval(interval);
      audio.pause();
      audio.currentTime = 0;
      if (callback) callback();
    }
    audio.volume = vol;
  }, 100);
}

function fadeIn(audio, target, duration) {
  audio.volume = 0;
  audio.play().catch(err => console.log("Autoplay blocked:", err));
  let step = target / (duration / 100);
  let vol = 0;
  let interval = setInterval(() => {
    vol += step;
    if (vol >= target) {
      vol = target;
      clearInterval(interval);
    }
    audio.volume = vol;
  }, 100);
}

// Track if intro music has started
let musicStarted = false;

// --- Switch to music2 when "OK" is clicked ---
toNight.addEventListener("click", () => {
  switchScene(questionScene, nightScene);

  fadeOut(bgMusic1, 1000, () => {
    setTimeout(() => {
      fadeIn(bgMusic2, 0.6, 1000);
    }, 1000); // 1s silence gap
  });
});
