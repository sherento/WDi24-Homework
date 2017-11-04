console.log($.fn.jquery);

$(document).ready(function () {

  $('img.thumbnail').on('click', function () {
    const imageSrc = $(this).attr('src')
    console.log(imageSrc);
    $('#full').hide().attr('src', imageSrc).fadeIn(2000);
  });


$('h1').funText(99, 'rainbow');

$('a').funText(30, 'rainbow');

});
