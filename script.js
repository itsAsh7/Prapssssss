const heartBtn = document.getElementById("heartBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");

// Show envelope
heartBtn.addEventListener("click", () => {
  document.querySelector(".heart-container").classList.add("hidden");
  envelope.classList.remove("hidden");
});

// Open envelope to show letter
envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");
  letter.classList.remove("hidden");
});

// Close letter
closeLetter.addEventListener("click", () => {
  letter.classList.add("hidden");
  alert("Next step: We'll add Gallery → Love Question → Starry Night 🌌");
});
