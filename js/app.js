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

(function () {
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})()





window.addEventListener("scroll", onScroll);
