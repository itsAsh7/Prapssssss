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
const floatingHearts = document.getElementById("floating-hearts");

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

// Surprise with heart explosion
surpriseBtn.addEventListener("click", () => {
  createHeartExplosion();
  surpriseScreen.classList.remove("hidden");
  setTimeout(() => {
    surpriseScreen.classList.add("hidden");
    endingScreen.classList.remove("hidden");
  }, 4000);
});

// Floating hearts background
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.classList.add("floating-heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  floatingHearts.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createFloatingHeart, 500);

// Heart explosion effect
function createHeartExplosion() {
  for (let j = 0; j < 30; j++) {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.classList.add("exploding-heart");
    document.body.appendChild(heart);

    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 600;
    heart.style.transform = `translate(${x}px, ${y}px) scale(${Math.random()*2})`;

    setTimeout(() => { heart.remove(); }, 1500);
  }
}
