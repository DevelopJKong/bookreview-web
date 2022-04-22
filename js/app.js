const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;

function onScroll() {
  if (window.scrollY > headerHeight) {
    header.classList.add("on-sroll--background-black");
  } else {
    header.classList.remove("on-sroll--background-black");
  }
}

window.addEventListener("scroll", onScroll);
