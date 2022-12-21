
let f2p = false;
const tryToPlay = setInterval(() => {
    const audio = new Audio('./public/background.mp3');
    audio.volume = 0.01;
    audio.play()
        .then(() => {
            clearInterval(tryToPlay);
            f2p = true;
        })
        .catch(error => {
            console.info('User has not interacted with document yet.');
        });
}, 100);

let allowed = true;

wrapperFunction();

async function wrapperFunction() {
    // ! Throttling
    if (allowed === true) {
        allowed = false;
        setTimeout(() => {
            allowed = true;
        }, 2000);
        takeHit();
        const quote = await fetchQuote();
        modifyDom(quote);
    }
}

function takeHit() {
    let tight = document.getElementById("btn-music");
    tight.volume = 0.02;
    if (f2p)
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