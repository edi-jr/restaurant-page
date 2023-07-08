import { createDiv, createH1, createLi, createNav, createSpan, createUl } from "./elements";

function createLogo() {
  const logo = createDiv("");
  const h1 = createH1("Oishi");
  logo.classList.add("logo");
  h1.appendChild(createSpan("Ramen"));
  logo.appendChild(createSpan("🍜"));
  logo.appendChild(h1);
  return logo;
}

function createNavSection() {
  const nav = createNav("");
  const ul = createUl("");
  nav.classList.add("nav");
  ul.appendChild(createLi("Home"));
  ul.appendChild(createLi("Menu"));
  ul.appendChild(createLi("Contact"));
  nav.appendChild(createLogo(""));
  nav.appendChild(ul);
  return nav;
}

function loadNav() {
  const content = document.querySelector("#content");
  const nav = createNavSection();
  content.appendChild(nav);
}

export default loadNav;