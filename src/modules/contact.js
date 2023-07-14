function createContactSection() {
  const contact = document.createElement("section");
  contact.classList.add("contact");
  contact.innerHTML = "<h1>Contact</h1>";
  const phone = document.createElement("a");
  phone.href =  "tel:+999999999999";
  phone.innerHTML = "📞 Phone: 999999999999";
  const email = document.createElement("a");
  email.href = "mailto:oishiramen@contact.com";
  email.innerHTML = "📧 Email: oishiramen@contact.com";
  contact.appendChild(phone);
  contact.appendChild(email);
  return contact;
}

function loadContact() {
  const content = document.querySelector("#content");
  const contact = createContactSection();
  content.appendChild(contact);
}

export default loadContact;