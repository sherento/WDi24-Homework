

const fetchSpace = function () {
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
    // create and append node
    const img = document.createElement( 'img' );
    img.src = imgSrc;
    console.log( img );
    document.body.appendChild( img );

  };
  xhr.open( 'GET', 'https://images-api.nasa.gov/search?year_start=2000' );
  xhr.send();
};

fetchSpace();
