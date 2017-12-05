const bookInfo = function () {

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    console.log('readyState', xhr.readyState);
    if ( xhr.readyState !== 4 ) {
      return;
    }


      const info = JSON.parse( xhr.response );


      const p = document.createElement('p');
      p.innerHTML = `${ info.items[0].volumeInfo.title}`;
      document.body.appendChild( p );

      const bookImage = document.createElement('img');
      bookImage.src = info.items[0].volumeInfo.imageLinks.smallThumbnail;
      document.body.appendChild( bookImage );
      // console.log(info);
      console.log(info);
      // console.log(cats.items[0].volumeInfo.title)
  }
  xhr.open( 'GET', `https://www.googleapis.com/books/v1/volumes?q=cats`);
  xhr.send();
  console.log( 'book info is done' );
};

bookInfo();

const inputField = document.getElementById('#input1');
inputField.addEventListener('input', function () {
  const input = this.value;
});

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', bookInfo);
