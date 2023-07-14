import loadMenu from "./menu";

function createHomeSection() {
  const main = document.createElement("main");
  main.classList.add("home");
  main.innerHTML = "<h1>Oishi Ramen</h1>";
  main.innerHTML += "<p>The tastiest ramen in town!</p>";
  main.innerHTML += "<button>Order now</button>";
  main.querySelector("button").addEventListener("click", loadMenu);
  return main;
}

function loadHome() {
  const content = document.querySelector("#content");
  if(content.childElementCount > 1) {
    content.removeChild(content.lastChild);
  }
  const home = createHomeSection();
  content.appendChild(home);
}

export default loadHome;