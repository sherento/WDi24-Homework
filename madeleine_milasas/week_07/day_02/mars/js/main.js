const fetchMars = function (e) {
  e.preventDefault();

  $('#search').text('Searching...');

  // get the query value
  const date = $('#query').val();   // yyyy-mm-dd

  // get json from api
  $.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${ date }&api_key=9iGkM4XpqNHAJL5c7cSp4SBHDaLlNpDZJClwHlfz`)
    .done( function (rover) {
      if ( rover.photos.length > 0 ) {
        $('#alert').text( '' );  // remove any prev alert
        const marsImage = rover.photos[0].img_src;
        $('#mars-image').attr('src', marsImage);
        $('#earth-image').attr('src', marsImage);
        $('#search').text('Show me a new date');
      }
    }).fail( function () {
      $('#alert').text( 'Sorry, no images for that date.' );
      $('#search').text('Show me a different date');
    });
}; // end fetchMars



///************    EVENT HANDLER ****************//////
$(document).ready( function () {
  $('#date-search').on('submit', fetchMars );
});
