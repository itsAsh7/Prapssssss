const heartBtn = document.getElementById("heart-btn");
const startScreen = document.getElementById("start-screen");
const envelopeScene = document.getElementById("envelope-scene");
const envelope = document.querySelector(".envelope");
const letter = document.getElementById("letter");
const closeLetterBtn = document.getElementById("close-letter");

heartBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  envelopeScene.classList.remove("hidden");
});

// Open envelope and slide out letter
envelope.addEventListener("click", () => {
  envelope.classList.add("opened");
  setTimeout(() => {
    letter.classList.remove("hidden");
    setTimeout(() => letter.classList.add("show"), 100);
  }, 600);
});

// Close letter
closeLetterBtn.addEventListener("click", () => {
  letter.classList.remove("show");
  setTimeout(() => {
    letter.classList.add("hidden");
    // TODO: trigger gallery next
    alert("Next: Gallery will appear here!");
  }, 1000);
});
