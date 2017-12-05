console.log("working");

const button = document.getElementById('gobutton');



const fetchBook = function () {

const bookInfo  = document.getElementsByTagName('input')[0].value;
console.log(bookInfo);

const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {

  if (xhr.readyState != 4) {
    return;
  }

  const data = JSON.parse(xhr.response);
  const bookTitle = data.items[0].volumeInfo.title
  const bookImage = data.items[0].volumeInfo.imageLinks.thumbnail
  const bookDescription = data.items[0].volumeInfo.description
  const bookRating = data.items[0].volumeInfo.averageRating

  const h1 = document.createElement('h1');
  h1.innerHTML = `You searched for: ${bookTitle}`
  document.body.appendChild(h1);

  const img = document.createElement('img');
  img.src = `${bookImage}`;
  img.height = 150;
  img.width = 100;
  document.body.appendChild(img);

  const h2 = document.createElement('h2');
  h2.innerHTML = `Rating: ${bookRating} / 5`
  document.body.appendChild(h2);

  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>Description:</strong> ${bookDescription}`
  document.body.appendChild(h3);
  }

xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookInfo}`)
xhr.send();
};


button.addEventListener('click', fetchBook);
