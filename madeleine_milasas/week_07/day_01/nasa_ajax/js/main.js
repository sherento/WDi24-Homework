const button = document.getElementById( 'search' );

const fetchSpace = function () {
  const searchYear = document.getElementById( 'search-year' ).value;
  // new xhr obj
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if ( xhr.readyState !== 4 ) {
      return;
    }
    // convert string to obj
    const spaceInfo = JSON.parse( xhr.response );
    console.log('spaceInfo', spaceInfo);
    // get img link
    const imgSrc = spaceInfo.collection.items[0].links[0].href;
    // remove prev node
    const prevImg = document.querySelector('img');
    if ( prevImg ) {
      prevImg.parentNode.removeChild( prevImg );
    }
    // create and append node
    const img = document.createElement( 'img' );
    img.src = imgSrc;
    console.log( img );
    document.body.appendChild( img );
    // change button text
    button.innerText = "Again, again."
  };
  xhr.open( 'GET', `https://images-api.nasa.gov/search?media_type=image&year_start=${ searchYear }&year_end=${ searchYear }` );
  xhr.send();
};



button.addEventListener( 'click', fetchSpace );
