

const fetchBook = function () {
  // make new xhr obj
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if ( xhr.readyState !== 4 ) {
      return;
    }
    // convert string into object
     const book = JSON.parse( xhr.response );
     const bookCover = book.items[0].volumeInfo.imageLinks.thumbnail;
    // create img element and append
    const img = document.createElement( 'img' );
    img.src = bookCover;
    document.body.appendChild( img );
  }
  xhr.open( 'GET', 'https://www.googleapis.com/books/v1/volumes?q=Glamorama' );
  xhr.send();

};

fetchBook();
