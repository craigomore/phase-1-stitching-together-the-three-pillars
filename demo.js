// Step 1: Grab all the heart glyphs from the DOM
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Mock server function (simulates real backend calls)
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Add event listeners to each heart glyph
for (const glyph of articleHearts) {
  glyph.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (glyph.innerText === "♡") {
          glyph.innerText = "♥";
          glyph.classList.add("activated-heart");
        } else {
          glyph.innerText = "♡";
          glyph.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        alert(error);
      });
  });
}
