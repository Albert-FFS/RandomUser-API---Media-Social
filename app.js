const main = document.querySelector("main");
const modal = document.getElementById("modal");
const ModalImage = document.getElementById("ModalImage");
const ModalFirstName = document.getElementById("ModalFirstName");
const ModalLastName = document.getElementById("ModalLastName");
let nat = "mx";
function CallApi(url, iteraction) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const article = document.createElement("article");
      article.classList.add(`Item_${iteraction}`);
      const templateArticle = `
        <div class="thumbnail">
          <img src="${data.results[0].picture.thumbnail}" alt="thumbnail" onclick="OpenModalImage({
            url:'${data.results[0].picture.large}',
            Firstname:'${data.results[0].name.first}',
            Lastname:'${data.results[0].name.last}'
          })"/>
        </div>
        <div class="info">
          <h2>${data.results[0].name.first}</h2>
          <h2>${data.results[0].name.last}</h2>
          <h3>${data.results[0].location.country}</h3>
          <h3>${data.results[0].location.state}</h3>
          <h3>${data.results[0].location.city}</h3>
          <h3>${data.results[0].phone}</h3>
          <h3>${data.results[0].email}</h3>
        </div>
      `;
      article.innerHTML = templateArticle;
      main.appendChild(article);
    });
}
function StarResponse() {
  let Url = "https://randomuser.me/api/?";
  for (let a = 0; a < 10; a++) {
    CallApi(`${Url}nat=${nat}`, a);
  }
}
StarResponse();
// CallApi("https://randomuser.me/api/?nat=us");
// CallApi("https://randomuser.me/api/?nat=mx");
// CallApi("https://randomuser.me/api/?nat=es");
// CallApi("https://randomuser.me/api/?nat=fr");
function CloseModalImage(item) {
  modal.classList.remove("Open");
}
function OpenModalImage(item) {
  modal.classList.add("Open");
  ModalImage.src = item.url;
  ModalFirstName.innerHTML = item.Firstname;
  ModalLastName.innerHTML = item.Lastname;
}
function ChangeCountryPeople(Country) {
  nat = Country;
  StarResponse();
}
//Todo: Recrear el Skelethon
