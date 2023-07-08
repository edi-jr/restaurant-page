function createDiv(content) {
  const div = document.createElement("div");
  div.innerHTML = content;
  return div;
}

function createSpan(content) {
  const span = document.createElement("span");
  span.innerHTML = content;
  return span;
}

function createNav(content) {
  const nav = document.createElement("nav");
  nav.innerHTML = content;
  return nav;
}

function createUl(content) {
  const ul = document.createElement("ul");
  ul.innerHTML = content;
  return ul;
}

function createLi(content) {
  const li = document.createElement("li");
  li.innerHTML = content;
  return li;
}

function createH1(content) {
  const h1 = document.createElement("h1");
  h1.innerHTML = content;
  return h1;
}

function createP(content) {
  const p = document.createElement("p");
  p.innerHTML = content;
  return p;
}

function createButton(content) {
  const btn = document.createElement("button");
  btn.innerHTML = content;
  return btn;
}

export { createDiv, createSpan, createNav, createUl, createLi, createH1, createP, createButton };