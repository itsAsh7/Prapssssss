const envelope = document.getElementById("envelope");
const topFlap = document.querySelector(".top");
const letter = document.getElementById("letter");
const toGallery = document.getElementById("toGallery");

// Gallery
const galleryScene = document.getElementById("gallery-scene");
const closeGallery = document.getElementById("closeGallery");

// Question
const questionScene = document.getElementById("question-scene");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const answer = document.getElementById("answer");
const toNight = document.getElementById("toNight");

// Night sky
const nightScene = document.getElementById("night-scene");

// Step 1: Envelope → click to open
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

// Step 2: Letter "Next" → open Gallery
const toGallery = document.getElementById("toGallery");
const envelopeScene = document.getElementById("envelope-scene");
const galleryScene = document.getElementById("gallery-scene");

toGallery.addEventListener("click", () => {
  envelopeScene.classList.add("hidden");  // hide envelope
  galleryScene.classList.remove("hidden"); // show gallery
});

// Step 3: Gallery "Next" → Question
const closeGallery = document.getElementById("closeGallery");
const questionScene = document.getElementById("question-scene");

closeGallery.addEventListener("click", () => {
  galleryScene.classList.add("hidden");
  questionScene.classList.remove("hidden");
});

// Step 4: Question "Yes" → Show Answer
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const answer = document.getElementById("answer");

yesBtn.addEventListener("click", () => {
  answer.classList.remove("hidden");
});

// Step 5: Question "No" → runaway button
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Step 6: Answer "OK" → Night Scene
const toNight = document.getElementById("toNight");
const nightScene = document.getElementById("night-scene");

toNight.addEventListener("click", () => {
  questionScene.classList.add("hidden");
  nightScene.classList.remove("hidden");
});

