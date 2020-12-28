/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {quote: "It seems that our brave new world is becoming less tolerant, spiritual and educated than it ever was when I was young.", source: "Lemmy Kilmister"},
  {quote: "If you end up with a boring miserable life because you listened to your mom, your dad, your teacher, your priest, or some guy on television telling you how to do your shit, then you deserve it.", source: "Frank Zappa", year: "1969", tags: "Musician"},
  {quote: "An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way.", source: "Charles Bukowski", tags: "Writer"},
  {quote: "Life is really simple, but we insist on making it complicated.", source: "Confucius"},
  {quote: "Life is what happens when you're busy making other plans.", source: "John Lennon", citation: "Beautiful Boy (Darling Boy)"},
  {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", source: "Thomas Edison"}
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {

  let randomNum = Math.floor(Math.random() * quotes.length);
  //console.log(randomNum);

  let randomObject = quotes[randomNum]; 
  //console.log(randomObject);
  return randomObject;
}
 


/***
 * `printQuote` function
***/


const printQuote = () => {
  //In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function.
  let ranObject = getRandomQuote();

  let HTML = '';
    HTML +=`
      <p class="quote"> ${ranObject['quote']}</p>
      <p class="source"> ${ranObject['source']}`

                if (ranObject['citation']) {
                  HTML += `<span class="citation"> ${ranObject['citation']}</span>`;
                }

                if (ranObject['year']) {
                  HTML += `<span class="year"> ${ranObject['year']} </span>`;
                }

                if (ranObject['tags']) {
                  HTML += `<span class="tags"> <strong>${ranObject['tags']}</strong> </span>`;
                }
  `</p>`


  return document.getElementById('quote-box').innerHTML = HTML;
}
  
setInterval(printQuote, 2000);

/*
if (setInterval) {
 ;
}
*/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);