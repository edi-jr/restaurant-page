function createLogo() {
  const logo = document.createElement("div");
  const h1 = document.createElement("h1");
  logo.classList.add("logo");
  logo.innerHTML = "<span>🍜</span>";
  h1.innerHTML = "Oishi <span>Ramen</span>";
  logo.appendChild(h1);
  return logo;
}

function createNavSection() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.classList.add("nav");
  ul.innerHTML = "<li id='home'>Home</li>";
  ul.innerHTML += "<li id='menu'>Menu</li>";
  ul.innerHTML += "<li id='contact'>Contact</li>";
  nav.appendChild(createLogo());
  nav.appendChild(ul);
  return nav;
}

function loadNav() {
  const content = document.querySelector("#content");
  const nav = createNavSection();
  content.appendChild(nav);
}

export default loadNav;