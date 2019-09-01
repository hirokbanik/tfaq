let hamburger = select(".hamburger");
let navbar = select("nav");
let scrolli = 0,
  scrollf = 0;

window.addEventListener("scroll", e => {
  scrollf = window.pageYOffset;
  if (scrolli < scrollf) navbar.classList.add("scrollDown");
  else navbar.classList.remove("scrollDown");
  scrolli = scrollf;
});

hamburger.addEventListener("click", () => navbar.classList.toggle("active"));

function navbarScroll() {}

// SELECTOR function
function select(el) {
  let elements = document.querySelectorAll(el);
  elementsArr = [...elements];

  if (elements.length === 1) return elementsArr[0];
  return elementsArr;
}
