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

// prettier-ignore
$("footer").innerHTML += `<p class="text-center" style="font-size:0.9rem;color:#ffffff80">Copyright © ${new Date().getFullYear()} Technology FAQ</p>`;
