import { createButton, createH1, createP } from "./elements";

function createHomeSection() {
  const main = document.createElement("main");
  main.classList.add("home");
  main.appendChild(createH1("Oishi Ramen"));
  main.appendChild(createP("The tastiest ramen in town!"));
  main.appendChild(createButton("Order now"));
  return main;
}

function loadHome() {
  const content = document.querySelector("#content");
  const home = createHomeSection();
  content.appendChild(home);
}

export default loadHome;