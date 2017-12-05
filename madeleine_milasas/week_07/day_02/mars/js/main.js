const fetchMars = function (e) {
  e.preventDefault();

  // get the query value
  const date = $('#query').val();   // yyyy-mm-dd

  const noCuriosity = function () {
    $('#curiosity-alert').html( '* No images from <em>Curiosity</em> on this date.' );
    $('#curiosity-image').attr('src', ''); // remove prev image
    $('#curiosity-image').attr('alt', '');
  };

  const noOpportunity = function () {
    $('#opportunity-alert').html( '* No images from <em>Opportunity</em> on this date.' );
    $('#opportunity-image').attr('src', ''); // remove prev image
    $('#opportunity-image').attr('alt', '');
  };

  // get json from api
  $.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${ date }&api_key=9iGkM4XpqNHAJL5c7cSp4SBHDaLlNpDZJClwHlfz`)
    .done( function (rover) {
      if ( rover.photos.length > 0 ) {
        $('#curiosity-alert').text( 'Curiosity' );  // show name, remove any prev alert
        const marsImage = rover.photos[0].img_src;
        $('#curiosity-image').attr('src', marsImage);
        $('#curiosity-image').attr('alt', 'Image from the Curiosity Rover');
      } else {
        noCuriosity();
      }
    }).fail( function () {
        noCuriosity();
    });

    $.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${ date }&api_key=9iGkM4XpqNHAJL5c7cSp4SBHDaLlNpDZJClwHlfz`)
      .done( function (rover) {
        if ( rover.photos.length > 0 ) {
          $('#opportunity-alert').text( 'Opportunity' );  // show name, remove any prev alert
          const marsImage = rover.photos[0].img_src;
          $('#opportunity-image').attr('src', marsImage);
          $('#opportunity-image').attr('alt', 'Image from the Opportunity Rover');
        } else {
          noOpportunity();
        }
      }).fail( function () {
        noOpportunity();
      });





}; // end fetchMars



///************    EVENT HANDLER ****************//////
$(document).ready( function () {
  $('#date-search').on('submit', fetchMars );
});
