function createHomeSection() {
  const main = document.createElement("main");
  main.classList.add("home");
  main.innerHTML = "<h1>Oishi Ramen</h1>";
  main.innerHTML += "<p>The tastiest ramen in town!</p>";
  main.innerHTML += "<button>Order now</button>";
  return main;
}

function loadHome() {
  const content = document.querySelector("#content");
  const home = createHomeSection();
  content.appendChild(home);
}

export default loadHome;