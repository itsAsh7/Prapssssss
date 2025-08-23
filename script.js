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
envelope.addEventListener("click", () => {
  topFlap.style.transform = "rotateX(160deg)";
 letter.style.transform = "translate(-50%, -120px)";
});

// Step 2: Letter → Gallery
toGallery.addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("envelope-scene").classList.add("hidden");
  galleryScene.classList.remove("hidden");
});

// Step 3: Gallery → Question
closeGallery.addEventListener("click", () => {
  galleryScene.classList.add("hidden");
  questionScene.classList.remove("hidden");
});

// No button runaway effect
noBtn.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const offsetX = e.clientX - (rect.left + rect.width / 2);
  const offsetY = e.clientY - (rect.top + rect.height / 2);

  // If mouse is too close, move the button away
  if (Math.abs(offsetX) < 80 && Math.abs(offsetY) < 50) {
    const newX = (Math.random() - 0.5) * 400; // random X shift
    const newY = (Math.random() - 0.5) * 200; // random Y shift
    noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
  }
});


yesBtn.addEventListener("click", () => {
  answer.classList.remove("hidden");
});

// Step 4: To Night Sky
toNight.addEventListener("click", () => {
  questionScene.classList.add("hidden");
  nightScene.classList.remove("hidden");
});
