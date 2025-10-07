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

fadeUpBtn.addEventListener("click", () => {
  fadeUpBtn.setAttribute("src", "src/images/tick.png");
  setTimeout(() => {
    fadeUpBtn.setAttribute("src", "src/images/copy.png");
  }, 3000);
});
