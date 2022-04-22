const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
const portfolio = document.querySelector("#portfolio");
const portfolioTitles = portfolio.querySelectorAll(".portfolio__title");

portfolioTitles.forEach((item) => {
  item.innerText.length > 20
    ? (item.innerText = `${item.innerText.slice(0, 20)}...`)
    : item.innerText;
});

function onScroll() {
  if (window.scrollY > headerHeight) {
    header.classList.add("on-sroll--background-black");
  } else {
    header.classList.remove("on-sroll--background-black");
  }
}

window.addEventListener("scroll", onScroll);
