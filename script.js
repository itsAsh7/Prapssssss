const heartBtn = document.getElementById("heart-button");
const entryScreen = document.getElementById("entry-screen");
const envelopeScreen = document.getElementById("envelope-screen");
const letterScreen = document.getElementById("letter-screen");
const galleryBtn = document.getElementById("gallery-btn");
const galleryScreen = document.getElementById("gallery-screen");
const closeGallery = document.getElementById("close-gallery");
const surpriseBtn = document.getElementById("surprise-btn");
const surpriseScreen = document.getElementById("surprise-screen");
const endingScreen = document.getElementById("ending-screen");
const typewriterText = document.getElementById("typewriter-text");
const music = document.getElementById("bg-music");

// Typewriter text
const message = "From the moment you walked into my life, everything felt brighter, warmer, and better. This page is just a small way of saying how much you mean to me 💕";

let i = 0;
function typeWriter() {
  if (i < message.length) {
    typewriterText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Heart button click
heartBtn.addEventListener("click", () => {
  entryScreen.classList.add("hidden");
  envelopeScreen.classList.remove("hidden");
  music.play();

  setTimeout(() => {
    envelopeScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");
    typeWriter();
  }, 3000);
});

// Gallery
galleryBtn.addEventListener("click", () => {
  galleryScreen.classList.remove("hidden");
});
closeGallery.addEventListener("click", () => {
  galleryScreen.classList.add("hidden");
});

// Surprise
surpriseBtn.addEventListener("click", () => {
  surpriseScreen.classList.remove("hidden");
  setTimeout(() => {
    surpriseScreen.classList.add("hidden");
    endingScreen.classList.remove("hidden");
  }, 3000);
});
