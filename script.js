const heartBtn = document.getElementById("heartBtn");
const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const closeLetter = document.getElementById("closeLetter");

// Show envelope
heartBtn.addEventListener("click", () => {
  document.querySelector(".heart-container").classList.add("hidden");
  envelope.classList.remove("hidden");
});

// Click envelope to slide out letter
envelope.addEventListener("click", () => {
  letter.classList.add("show");
});

// Close letter
closeLetter.addEventListener("click", (e) => {
  e.stopPropagation(); // stop triggering envelope click
  letter.classList.remove("show");
  setTimeout(() => {
    envelope.classList.add("hidden");
    alert("Next → we can add Gallery 📸 or Love Question 💕");
  }, 600);
});
