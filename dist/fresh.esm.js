// select div s want to get animation
let selectDiv = document.querySelectorAll(".freshAnimation");

selectDiv.forEach((val) => {
  let classAnimation = val.getAttribute("data-freshAnimation");
  // let timeAnimation = val.getAttribute("data-freshAnimationTime") / 300;

  val.classList.add(classAnimation);
  // val.style.transition = `all ${timeAnimation}s ease`;
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
