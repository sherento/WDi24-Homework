// Step by Step:
//
// Create an array of every link on the page using document.querySelectorAll(cssSelector)
//
// Iterate through the array. In each iteration of the loop:
//
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)
//


console.log("vid exercise --- 2");

let $links = $('a');
console.log($links);

for (var i = 0; i < $links.length; i++) {
  let $link = $( $links[i]);

  let href = $link.attr('href')
  console.log(href);

  let thumbURL = youtube.generateThumbnailUrl(href)
  console.log(thumbURL);

  // let thumbnail = document.createElement('img');
  // thumbnail.setAttribute('src', thumbURL)
  // console.log(thumbnail);

let $thumbnail = $('<img>');
$thumbnail.attr('src', thumbURL);


$link.append ( $thumbnail);

}
