// select div s want to get animation
let selectDiv = document.querySelectorAll(".freshAnimation");

selectDiv.forEach((val) => {
  let classAnimation = val.getAttribute(
    "data-freshAnimation",
    "data-freshAnimation"
  );
  val.classList.add(classAnimation);
  val.setAttribute("data-top", val.offsetTop);
  let timeAnimation = val.getAttribute(
    "freshAnimationTime",
    "freshAnimationTime"
  );

  window.addEventListener("scroll", () => {
    let st = parseInt(window.scrollY);
    if (st + 400 > val.getAttribute("data-top", "data-top")) {
      val.classList.remove(classAnimation);
      val.classList.add(`duration-${timeAnimation}`);
    } else {
      val.classList.add(classAnimation);
      val.classList.remove(`duration-${timeAnimation}`);
      console.log("hloo");
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
