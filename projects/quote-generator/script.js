const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');

function getQuote(){
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author || 'Unknown';
    quoteText.textContent = quote.text;
    quote.text.length > 120 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote');
}

newQuoteBtn.addEventListener('click', getQuote);

getQuote();