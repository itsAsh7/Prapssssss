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
  const bgMusic1 = document.getElementById("bgMusic1");
  const bgMusic2 = document.getElementById("bgMusic2");
  
 // Helper: simple fade-out
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

// Helper: simple fade-in
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

// Start music1 on load
window.addEventListener("load", () => {
  bgMusic1.volume = 0.6;
  bgMusic1.play().catch(err => console.log("Autoplay blocked:", err));
});

toNight.addEventListener("click", () => {
  // Switch scene
  switchScene(questionScene, nightScene);

  // Fade out music1 in 1s
  fadeOut(bgMusic1, 1000, () => {
    // After 1s silence, fade in music2 over 1s
    setTimeout(() => {
      fadeIn(bgMusic2, 0.6, 1000);
    }, 1000);
  });
});

  
  
