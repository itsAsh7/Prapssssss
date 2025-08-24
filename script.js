// Step 1: Envelope → open
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

// Step 2: Letter "Next" → Gallery
const toGallery = document.getElementById("toGallery");
const envelopeScene = document.getElementById("envelope-scene");
const galleryScene = document.getElementById("gallery-scene");
toGallery.addEventListener("click", () => {
  envelopeScene.classList.add("hidden");
  galleryScene.classList.remove("hidden");
});

// Step 3: Gallery "Next" → Question
const closeGallery = document.getElementById("closeGallery");
const questionScene = document.getElementById("question-scene");
closeGallery.addEventListener("click", () => {
  galleryScene.classList.add("hidden");
  questionScene.classList.remove("hidden");
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
const nightScene = document.getElementById("night-scene");
toNight.addEventListener("click", () => {
  questionScene.classList.add("hidden");
  nightScene.classList.remove("hidden");
});
