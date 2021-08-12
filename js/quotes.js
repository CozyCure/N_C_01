const quotes = [
    {
        quote: "The unexamined life is not worth living",
        author: "Socrates",
    },
    {
        quote: "Whereof one cannot speak, thereof one must be silent",
        author: "Ludwig Wittgenstein",
    },
    {
        quote: "Entities should not be multiplied unnecessarily",
        author: "William of Ockham",
    },
    {
        quote: "I think therefore I am",
        author: "René Descartes",
    },
    {
        quote: "He who thinks great thoughts, often makes great errors",
        author: "Martin Heidegger",
    },
    {
        quote: "What is rational is actual and what is actual is rational",
        author: "G. W. F. Hegel",
    },
    {
        quote: "No man's knowledge here can go beyond his experience",
        author: "John Locke",
    },
    {
        quote: "If God did not exist, it would be necessary to invent Him",
        author: "Voltaire",
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit",
        author: "Aristotle",
    },
    {
        quote: "Life must be understood backward. But it must be lived forward",
        author: "Søren Kierkegaard",
    },
    {
        quote: "Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck",
        author: "Immanuel Kant",        
    },
    {
        quote: "The greater the difficulty, the more glory in surmounting it",
        author: "Epicurus",        
    },
    {
        quote: "Man is condemned to be free",
        author: "Jean-Paul Sartre",        
    },
    {
        quote: "It is wrong always, everywhere and for everyone, to believe anything upon insufficient evidence",
        author: "W. K. Clifford",        
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;