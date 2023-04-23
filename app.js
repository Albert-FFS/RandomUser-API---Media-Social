const main = document.querySelector('main');
function createLabel(tag){
  const object = document.createElement(tag);
  return object;
}
function writeDOM(){

}
function loadDOM(){

}
fetch('https://randomuser.me/api/?nat=us')
.then(response => response.json())
.then(data =>{
  // console.log(data.results[0]);
  const article = document.createElement('article');

  //image modal
  const imageBox = document.createElement('div');
  const close = document.createElement('button');
  const image = document.createElement('img');
  image.src = data.results[0].picture.large;
  //nameBox
  const nameBox = document.createElement('div')
  nameBox.classList.add("nameBox");
  const bar = document.createElement('span');
  bar.classList.add('bar');
  //thumbnail 
  const thumbnailBox = document.createElement('div');
  const thumbnail = document.createElement('img');
  thumbnail.src = data.results[0].picture.thumbnail;

  //info box
  const info = document.createElement('div');
  const Country = document.createElement('h3');
  Country.innerText = data.results[0].location.country;
  const State = document.createElement("h3");
  State.innerText = data.results[0].location.state;
  const City = document.createElement("h3");
  City.innerText = data.results[0].location.city;
  const Phone = document.createElement("h3");
  Phone.innerText = data.results[0].phone;
  const Email = document.createElement("h3");
  Email.innerText = data.results[0].email;
  //resource 
  const FirstName = document.createElement('h2');
  FirstName.innerText = data.results[0].name.first;
  const LastName = document.createElement('h2');
  LastName.innerText = data.results[0].name.last;

  //load
  main.appendChild(article);
  article.appendChild(imageBox);
  imageBox.appendChild(close);
  imageBox.appendChild(image);
  imageBox.appendChild(nameBox);
  nameBox.appendChild(FirstName);
  nameBox.appendChild(bar);
  nameBox.appendChild(LastName);
  article.appendChild(thumbnailBox).appendChild(thumbnail);
  article.appendChild(info).appendChild(FirstName);
  info.appendChild(LastName);
  info.appendChild(Country);
  info.appendChild(State);
  info.appendChild(City);
  info.appendChild(Phone);
  info.appendChild(Email);
} );