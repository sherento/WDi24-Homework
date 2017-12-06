console.log( $.fn.jquery, _.VERSION );

const searchFlickr = function (term) {
  console.log( `Searching Flickr for ${ term }` );

  // Fetch images from Flickr using Ajax
  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: term , // what we're actually searching for
    format: "json"  // flickr's api is old, gives xml by default
  }).done(showImages);
};

const showImages = function (results) {
  console.log( results );
  _(results.photos.photo).each(function (photoInfo) {
    const photoURL = generateURL(photoInfo);
    // Create a new image, set source
    const $img = $('<img/>', {src: photoURL});  // create and set attr at same time
    // Append the image on the page
    $img.appendTo('#images');  // or $('#images').append($img);
  });
};

const generateURL = function (photo) {
  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_q.jpg'  // change "q" for different sizes, e.g. m
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault();

    const query = $('#query').val();
    searchFlickr( query );

  });

  $(window).on('scroll', _.throttle(function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom > 600) {
      return; // don't do anything until we are within 600px of bottom of page; n.b could pick any number, 600 not nec ideal
    }
    console.log( 'nearing the bottom' );
    // your code here
  },
  300 ));
});
