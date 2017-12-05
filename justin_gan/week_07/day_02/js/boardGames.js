
const fetchBoardGames = function () {
  $.getJSON( 'https://bgg-json.azurewebsites.net/hot' ).done( function ( info ) {
    info.forEach( function ( game ) {
      const $image = $( '<img>' );
      $image.attr( 'src', game.thumbnail );
      $image.css( 'margin-bottom', '10px' );
      $( '#board-games' ).append( $image );
    });
  } );
}






$( document ).ready( fetchBoardGames );
