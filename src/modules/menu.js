function createCard(title) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = "<span>🍜</span>";
  card.innerHTML += `<h2>${title}</h2>`;
  card.innerHTML += "<p>Pork chashu, menma, nori, negi, boiled egg, corn</p>";
  card.innerHTML += "<p>$20</p>";
  return card;
}

function createMenuSection() {
  const menu = document.createElement("section");
  menu.classList.add("menu");
  menu.innerHTML = "<h1>Our menu:</h1>";
  menu.appendChild(createCard("Shio ramen"));
  menu.appendChild(createCard("Shoyu ramen"));
  menu.appendChild(createCard("Miso ramen"));
  menu.appendChild(createCard("Curry ramen"));
  return menu;
}

function loadMenu() {
  const content = document.querySelector("#content");
  content.removeChild(content.lastChild);
  const menu = createMenuSection();
  content.appendChild(menu);
}

export default loadMenu;