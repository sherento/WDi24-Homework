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


console.log("vid exercise");

let arr1 = document.querySelectorAll('a');
console.log(arr1);

for (var i = 0; i < arr1.length; i++) {
  let link = arr1[i].getAttribute('href')
  console.log(link);
  let thumbURL = youtube.generateThumbnailUrl(link)
  console.log(thumbURL);
  let thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumbURL)
  console.log(thumbnail);

  arr1[i].appendChild(thumbnail)

}

// for (href of arr1) {   /////// DOESNT WORK !!
//   console.log(href);
//     let thumbURL = youtube.generateThumbnailUrl(href)
//     console.log(thumbURL);
// }
