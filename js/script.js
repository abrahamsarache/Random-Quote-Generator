/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Here I created the "quotes" array.
//Added extra properties like: 'tags', 'year' and 'citation'.

const quotes = [
  {quote: "It seems that our brave new world is becoming less tolerant, spiritual and educated than it ever was when I was young.", source: "Lemmy Kilmister"},
  {quote: "If you end up with a boring miserable life because you listened to your mom, your dad, your teacher, your priest, or some guy on television telling you how to do your shit, then you deserve it.", source: "Frank Zappa", year: "1969", tags: "Musician"},
  {quote: "An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way.", source: "Charles Bukowski", tags: "Writer"},
  {quote: "Life is really simple, but we insist on making it complicated.", source: "Confucius"},
  {quote: "Life is what happens when you're busy making other plans.", source: "John Lennon", citation: "Beautiful Boy (Darling Boy)"},
  {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", source: "Thomas Edison"}
];

//Starting with the 'getRandomQuote' function using Math.random to create a random number within my array's length. I stored this value into the variable 'randomNum'.
const getRandomQuote = () => {

  let randomNum = Math.floor(Math.random() * quotes.length);

//Then I used bracket notation and my variable 'randomNum' to access a random value from my array 'quotes'. I stored that value into a new variable called 'randomObject'. 
  const randomObject = quotes[randomNum]; 

//Now the function 'getRandomQuote' returns 'randomObject' when it is called. 
  return randomObject;
}
 
//I created the 'printQuote' function to print out a random quote to the browser using the random object created in the 'getRandomQuote' function.
const printQuote = () => {

//I stored the value of 'getRandomQuote' inside a new variable 'ranObject'.
  const ranObject = getRandomQuote();

//I created another variable to store an empty string 'HTML' that will be substituted everytime by a newer string with random quotes and properties
  let HTML = '';
    HTML +=`
      <p class="quote"> ${ranObject['quote']}</p>
      <p class="source"> ${ranObject['source']}`

//These conditional statements add extra content to the browser if the array 'quotes' contain any extra properties(citation, year, tags)
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

//the function returns the content of the string 'HTML' to the inner HTML of element 'quote-box'
  return document.getElementById('quote-box').innerHTML = HTML;
}

//I added the method that allows the page to refresh automatically with setInterval using 'printQuote' as its argument and setting the timer to 5 seconds.
//setInterval method taken from https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(printQuote, 5000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);