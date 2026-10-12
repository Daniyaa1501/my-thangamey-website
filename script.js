

"use strict";

// ========================================
// GET HTML ELEMENTS
// ========================================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const clickNote = document.getElementById("clickNote");
const letterMessage = document.getElementById("letterMessage");
const loveButton = document.getElementById("loveButton");
const finalMessage = document.getElementById("finalMessage");

const ourSong = document.getElementById("ourSong");
const musicButton = document.getElementById("musicButton");
const musicStatus = document.getElementById("musicStatus");

const missEnvelope = document.getElementById("missEnvelope");
const missLetter = document.getElementById("missLetter");
const missLetterMessage = document.getElementById("missLetterMessage");

const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");
const footerHeart = document.getElementById("footerHeart");
const toast = document.getElementById("toast");

// ========================================
// YOUR ORIGINAL LOVE LETTER
// ========================================

const message = `I don't think you realise how much you mean to me.

Out of all the people in this world, I'm so glad
life brought me to you.

You're not just my best friend.
You're my comfort person, my favourite headache,
my everything, my thangamey, my sayang,
my partner in nonsense, and someone I never want
to lose.

Thank you for staying, for listening, for making
me laugh when I don't feel like smiling, and for
being you.

No matter how busy life gets or how much things
change, I hope you always remember that you have
someone in your corner.

And that someone is me.

You don't have to be perfect around me.
You don't always have to be strong.
You can be yourself with me, even on your
worst days.

I'm always rooting for you, okay?

I love you forever ever and ever my saiyaara. 🖤`;

// ========================================
// OPEN THE ORIGINAL ENVELOPE
// ========================================

let originalLetterOpened = false;
let originalTypingTimer;

envelope.addEventListener("click", () => {
  if (originalLetterOpened) return;

  originalLetterOpened = true;

  letter.hidden = false;
  clickNote.textContent =
    "A little piece of my heart, just for you ♡";

  envelope.querySelector(".envelope-hint").textContent =
    "OPENED ♥";

  envelope.disabled = true;
  envelope.style.opacity = "0.7";

  letterMessage.textContent = "";
  loveButton.hidden = true;

  let index = 0;

  function typeLetter() {
    if (index >= message.length) {
      loveButton.hidden = false;
      return;
    }

    letterMessage.textContent += message.charAt(index);
    index++;

    originalTypingTimer = setTimeout(typeLetter, 22);
  }

  typeLetter();

  letter.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// ========================================
// REVEAL THE FINAL I LOVE YOU
// ========================================

loveButton.addEventListener("click", () => {
  finalMessage.hidden = false;
  loveButton.textContent = "You are so loved ♥";
  loveButton.disabled = true;

  burstHearts();

  finalMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// ========================================
// MUSIC PLAYER
// ========================================

musicButton.addEventListener("click", async () => {
  if (ourSong.paused) {
    musicStatus.textContent = "Getting your song ready... ♡";

    try {
      await ourSong.play();
      musicStatus.textContent =
        "Playing our little soundtrack ♡";
    } catch (error) {
      musicStatus.textContent =
        "Couldn't play the song. Check music/our-song.mp3.";
    }
  } else {
    ourSong.pause();
  }
});

ourSong.addEventListener("play", () => {
  musicButton.textContent = "Ⅱ Pause our song";
  musicStatus.textContent = "Playing our little soundtrack ♡";
});

ourSong.addEventListener("pause", () => {
  musicButton.textContent = "▶ Play our song";

  if (!ourSong.ended) {
    musicStatus.textContent = "Paused, but the memories stay ♡";
  }
});

ourSong.addEventListener("ended", () => {
  musicButton.textContent = "▶ Play our song";
  musicStatus.textContent = "Play it again whenever you like ♡";
});

ourSong.addEventListener("error", () => {
  musicStatus.textContent =
    "Song unavailable. Check the MP3 file and folder name.";
});

// ========================================
// OPEN WHEN YOU MISS ME LETTER
// ========================================

const missMeMessage = `Hey, my Thangamey. 🖤

If you're reading this, I guess you're missing me
a little. So come here and imagine I'm giving you
the biggest hug ever.

I wish I could be there beside you right now,
annoying you, making stupid jokes, and listening
to whatever is on your mind.

I know I can be dramatic, annoying, and sometimes
an absolute headache. But no matter how much I
tease you, please know that you mean so much to me.

If today feels lonely, remember that you don't
have to pretend to be okay with me.

You can tell me what's wrong, stay quiet, or just
be yourself. You don't have to explain everything
perfectly for me to care about you.

I hope you smile a little while reading this.
Remember our stupid jokes, our random conversations,
and all the little things that make our bond ours.

Please take care of yourself for me, okay?
Eat properly, drink water, get enough rest, and
don't be too hard on yourself.

Even when we're busy or far apart, I will still
be cheering for you and wishing the best for you.

Until I can annoy you in person again, remember:

YOU ARE LOVED.
YOU MATTER.
AND YOU HAVE ME. 🖤

Missing you a little extra today.

Sending you all my love,
your favourite person. Ur Dani ♡`;

let missLetterOpened = false;
let missLetterVisible = false;
let missTypingTimer;

missEnvelope.addEventListener("click", () => {
  if (missLetterOpened) {
    missLetterVisible = !missLetterVisible;
    missLetter.hidden = !missLetterVisible;

    missEnvelope.setAttribute(
      "aria-expanded",
      String(missLetterVisible)
    );

    missEnvelope.querySelector(".miss-envelope-hint")
      .textContent = missLetterVisible
        ? "CLOSE MY LETTER ↑"
        : "OPEN WHEN YOU MISS ME";

    if (missLetterVisible) {
      missLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    return;
  }

  missLetterOpened = true;
  missLetterVisible = true;
  missLetter.hidden = false;

  missEnvelope.setAttribute("aria-expanded", "true");

  missEnvelope.querySelector(".miss-envelope-hint")
    .textContent = "CLOSE MY LETTER ↑";

  missLetterMessage.textContent = "";

  let index = 0;

  function typeMissLetter() {
    if (index >= missMeMessage.length) return;

    missLetterMessage.textContent +=
      missMeMessage.charAt(index);

    index++;

    missTypingTimer = setTimeout(typeMissLetter, 24);
  }

  typeMissLetter();

  missLetter.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// ========================================
// SECRET MESSAGE
// ========================================

secretButton.addEventListener("click", () => {
  const isOpening = secretMessage.hidden;

  secretMessage.hidden = !isOpening;

  secretButton.textContent = isOpening
    ? "Keep this little secret ♡"
    : "Discover your little surprise ♡";

  secretButton.setAttribute(
    "aria-expanded",
    String(isOpening)
  );

  if (isOpening) {
    burstHearts();

    secretMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

// ========================================
// FLOATING HEARTS
// ========================================

function createHeart(x, y) {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left =
    (x === undefined ? Math.random() * 100 + "vw" : x + "px");

  if (y !== undefined) {
    heart.style.top = y + "px";
    heart.style.bottom = "auto";
  }

  heart.style.fontSize =
    (12 + Math.random() * 20) + "px";

  heart.style.animationDuration =
    (5 + Math.random() * 6) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

function burstHearts() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight * 0.6;

  for (let i = 0; i < 24; i++) {
    setTimeout(() => {
      createHeart(centerX, centerY);
    }, i * 70);
  }
}

// A few floating hearts in the background
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

let heartInterval;

function startFloatingHearts() {
  if (heartInterval) return;
  if (reducedMotion.matches) return;

  heartInterval = setInterval(() => {
    createHeart();
  }, 1100);
}

function stopFloatingHearts() {
  clearInterval(heartInterval);
  heartInterval = null;
}

startFloatingHearts();

reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches) {
    stopFloatingHearts();
  } else {
    startFloatingHearts();
  }
});

// ========================================
// FOOTER HEART
// ========================================

footerHeart.addEventListener("click", () => {
  const rect = footerHeart.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      createHeart(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      );
    }, i * 70);
  }

  showToast("Sending you a little love. ♡");
});

// ========================================
// STAR BACKGROUND
// ========================================

const stars = document.getElementById("stars");

if (!reducedMotion.matches) {
  for (let i = 0; i < 65; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration =
      (2 + Math.random() * 3) + "s";

    stars.appendChild(star);
  }
}

// ========================================
// SMALL POP-UP MESSAGE
// ========================================

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

console.log("A little website, made with love. ♡");