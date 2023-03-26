const article = document.createElement('Article');

fetch('https://randomuser.me/api/?nat=us')
.then(response => response.json())
.then(data =>{
  console.log(data.results[0]);
} );

