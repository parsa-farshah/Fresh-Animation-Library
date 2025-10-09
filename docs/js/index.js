// select divs want to get animation
let selectDiv = document.querySelectorAll(".freshAnimation");

selectDiv.forEach((val) => {
  let classAnimation = val.getAttribute("data-freshAnimation");
  let timeAttr = val.getAttribute("data-time");
  let easingAttr = val.getAttribute("data-timingFunction");
  let delayAttr = val.getAttribute("data-delay");

  // تبدیل مقادیر داده‌ها
  let timeAnimation = timeAttr ? parseFloat(timeAttr) / 1000 : null;
  let timingFunction =
    easingAttr && easingAttr.trim() !== "" ? easingAttr : "ease";
  let delayAnimation = delayAttr ? parseFloat(delayAttr) / 1000 : 0; // پیش‌فرض 0s

  // افزودن کلاس اولیه (برای حالت مخفی)
  val.classList.add(classAnimation);

  // تنظیم استایل transition با زمان، easing و delay
  if (timeAnimation && !isNaN(timeAnimation)) {
    val.style.transition = `all ${timeAnimation}s ${timingFunction} ${delayAnimation}s`;
  } else {
    val.style.transition = `all 0.4s ${timingFunction} ${delayAnimation}s`;
  }

  // ذخیره موقعیت المنت در صفحه
  val.setAttribute("data-top", val.offsetTop);

  // رویداد اسکرول برای حذف یا افزودن کلاس انیمیشن
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
