const main = document.querySelector("main");
function CallApi(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const article = document.createElement("article");
      const templateArticle = `
        <div class="thumbnail">
          <img src="${data.results[0].picture.thumbnail}" alt="" />
        </div>
        <div class="image">
          <a href="#">
            <i class="far fa-window-close"></i>
          </a>
          <img src="${data.results[0].picture.large}" alt="" />
          <div class="nameBox">
            <h2>${data.results[0].name.first}</h2>
            <span class="bar"></span>
            <h2>${data.results[0].name.last}</h2>
          </div>
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
CallApi("https://randomuser.me/api/?nat=us");
CallApi("https://randomuser.me/api/?nat=mx");
CallApi("https://randomuser.me/api/?nat=es");
CallApi("https://randomuser.me/api/?nat=fr");