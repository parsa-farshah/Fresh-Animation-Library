// select div s want to get animation
let selectDiv = document.querySelectorAll(".freshAnimation");

selectDiv.forEach((val) => {
  let classAnimation = val.getAttribute("data-freshAnimation");
  let timeAnimation = val.getAttribute("data-freshAnimationTime") / 1000;

  val.classList.add(classAnimation);
  val.style.transition = `all ${timeAnimation}s ease`;
  val.setAttribute("data-top", val.offsetTop);

  window.addEventListener("scroll", () => {
    let st = parseInt(window.scrollY);
    let top = parseInt(val.getAttribute("data-top"));
    if (st + 400 > top) {
      val.classList.remove(classAnimation);
    } else {
      val.classList.add(classAnimation);
    }
  });
});

// copy fade up
let fadeUpBtn = document.querySelector("#fadeUpBtn");
let fadeUpCode = document.querySelector("#fadeUpCode");

fadeUpBtn.addEventListener("click", () => {
  fadeUpBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    fadeUpBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(fadeUpCode.innerHTML);
});

// copy fade Down
let fadeDownBtn = document.querySelector("#fadeDownBtn");
let fadeDownCode = document.querySelector("#fadeDownCode");

fadeDownBtn.addEventListener("click", () => {
  fadeDownBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    fadeDownBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(fadeDownCode.innerHTML);
});

// copy fade left
let fadeLeftBtn = document.querySelector("#fadeLeftBtn");
let fadeLeftCode = document.querySelector("#fadeLeftCode");

fadeLeftBtn.addEventListener("click", () => {
  fadeLeftBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    fadeLeftBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(fadeLeftCode.innerHTML);
});

// copy fade right
let fadeRightBtn = document.querySelector("#fadeRightBtn");
let fadeRightCode = document.querySelector("#fadeRightCode");

fadeRightBtn.addEventListener("click", () => {
  fadeRightBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    fadeRightBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(fadeRightCode.innerHTML);
});

// copy fade up left
let fadeUpLeftBtn = document.querySelector("#fadeUpLeftBtn");
let fadeUpLeftCode = document.querySelector("#fadeUpLeftCode");

fadeUpLeftBtn.addEventListener("click", () => {
  fadeUpLeftBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    fadeUpLeftBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(fadeUpLeftCode.innerHTML);
});

// copy fade up right
let fadeUpRightBtn = document.querySelector("#fadeUpRightBtn");
let fadeUpRightCode = document.querySelector("#fadeUpRightCode");

fadeUpRightBtn.addEventListener("click", () => {
  fadeUpRightBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    fadeUpRightBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(fadeUpRightCode.innerHTML);
});

// copy flip left
let flipLeftBtn = document.querySelector("#flipLeftBtn");
let flipLeftCode = document.querySelector("#flipLeftCode");

flipLeftBtn.addEventListener("click", () => {
  flipLeftBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    flipLeftBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(flipLeftCode.innerHTML);
});

// copy flip right
let flipRightBtn = document.querySelector("#flipRightBtn");
let flipRightCode = document.querySelector("#flipRightCode");

flipRightBtn.addEventListener("click", () => {
  flipRightBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    flipRightBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(flipRightCode.innerHTML);
});

// copy flip up
let flipUpBtn = document.querySelector("#flipUpBtn");
let flipUpCode = document.querySelector("#flipUpCode");

flipUpBtn.addEventListener("click", () => {
  flipUpBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    flipUpBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(flipUpCode.innerHTML);
});

// copy flip down
let flipDownBtn = document.querySelector("#flipDownBtn");
let flipDownCode = document.querySelector("#flipDownCode");

flipDownBtn.addEventListener("click", () => {
  flipDownBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    flipDownBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(flipDownCode.innerHTML);
});

// copy zoom in
let zoomInBtn = document.querySelector("#zoomInBtn");
let zoomInCode = document.querySelector("#zoomInCode");

zoomInBtn.addEventListener("click", () => {
  zoomInBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    zoomInBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(zoomInCode.innerHTML);
});

// copy zoom in up
let zoomInUpBtn = document.querySelector("#zoomInUpBtn");
let zoomInUpCode = document.querySelector("#zoomInUpCode");

zoomInUpBtn.addEventListener("click", () => {
  zoomInUpBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    zoomInUpBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(zoomInUpCode.innerHTML);
});

// copy zoom in down
let zoomInDownBtn = document.querySelector("#zoomInDownBtn");
let zoomInDownCode = document.querySelector("#zoomInDownCode");

zoomInDownBtn.addEventListener("click", () => {
  zoomInDownBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    zoomInDownBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
  navigator.clipboard.writeText(zoomInDownCode.innerHTML);
});
