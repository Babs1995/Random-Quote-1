/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Create an Array of objects to store the data for your quotes
***/
const quotes = [
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: '2016'
  },
  {
    quote: 'Turn your wounds into wisdom.',
    source: 'Oprah Winfrey',
  },
  {
    quote: 'A light heart lives long.',
    source: 'William Shakespeare',
    citation: "Love's Labour's Lost",
    year: '1598'
  },
  {
    quote: 'Your only obligation in any lifetime is to be true to yourself.',
    source: 'Richard Bach', 
  },
  {
    quote: 'Nobody has a better vision of who you are than yourself.',
    source: 'Sheryl Crow',
  }
]




/***
 * `getRandomQuote` function
 * The getRandomQuote function should create a random number, 
 * and use that random number to return a random quote object 
 * from the quotes array.
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber]
  return randomQuote;
}


/***
 * `printQuote` function
 * function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
}
***/
function printQuote() {
  const quoteRandom = getRandomQuote();
  let html = `<p class= "quote"> ${quoteRandom.quote} </p>
    <p class = "source"> ${quoteRandom.source}`;
  if (quoteRandom.citation) {
    html += `<span class= "citation"> ${quoteRandom.citation} </span>`;
  }
  if (quoteRandom.year) {
    html += `<span class= "year"> ${quoteRandom.year} </span>`;
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML=html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);