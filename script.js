// Helper: fade switch
function switchScene(hide, show) {
  hide.classList.remove("active");
  setTimeout(() => {
    hide.classList.add("hidden");
    show.classList.remove("hidden");
    setTimeout(() => show.classList.add("active"), 50);
  }, 600); // matches CSS transition
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
toNight.addEventListener("click", () => {
  switchScene(questionScene, nightScene);
});
