
console.log("vid exercise --- 3");

// Now, in the thumbnailify() function, add a click listener to the link. We recommend using an anonymous function for the callback (not a named function). Put a console.log inside the callback to make sure it works.
// In the click listener callback, you will be using the "create and store, manipulate, inject" pattern to display an embedded video in the DIV you created.
// To find out what the code for an embedded Youtube video looks like, go to Youtube.com and find any embed code for a video.
// You can use youtube.generateEmbedUrl() from the youtube.js library to generate an embed URL.
// Use string concatenation, .html(), or other jQuery method of your choice to assemble and insert the embedded video element.
// Check your work! Try all your video links. Is there anything you need to change?
// As a bonus, try to make the video watcher <div> fade in using jQuery.
// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.
//

let thumbnailify = function (i) {
    let $link = $($links[i]);
    
    let href = $link.attr('href')
    let thumbURL = youtube.generateThumbnailUrl(href)
    let $thumbnail = $('<img>');
    $thumbnail.attr('src', thumbURL);
    $link.append($thumbnail);

    $link.on('click', function (event) {
      event.preventDefault() // dont move to link...

      const videoURL = $(this).attr('href')
      const embedURL = youtube.generateEmbedUrl (videoURL);

      const embedCode = `<iframe width="560" height="315" src=${embedURL} frameborder="0" allowfullscreen></iframe>`;

      $('#embed1').hide().html( embedCode).fadeIn(4000);

    })
}

let $links = $('a');

for (var i = 0; i < $links.length; i++) {

  thumbnailify (i)
}
