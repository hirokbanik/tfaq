const $ = el => {
  return document.querySelector(el);
};

window.addEventListener("scroll", event => {
  if (window.pageYOffset > 80) {
    if ($("nav").classList.contains("active")) return;
    $("nav").classList.add("active");
    $("a.scroll-to-top").classList.add("active");
  } else {
    $("nav").classList.remove("active");
    $("a.scroll-to-top").classList.remove("active");
  }
});
