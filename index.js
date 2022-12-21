wrapperFunction();

async function wrapperFunction() {
    var audio = document.getElementById("bg-music");
    audio.volume = 0.01;
    const quote = await fetchQuote();
    modifyDom(quote);


}

function takeHit() {
    let tight = document.getElementById("btn-music");
    tight.volume = 0.02;
    tight.play();
}

async function fetchQuote() {
    const quote = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
    return quote.json();
}

function modifyDom(quoteObj) {
    const { quote, author } = quoteObj[0];
    document.getElementById('quote').innerText = `"${quote}"`;
    document.getElementById('author').innerText = `-${author}`;
}