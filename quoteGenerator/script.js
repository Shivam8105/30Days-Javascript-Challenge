const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_key = "dCX7m3rh6gHXF5SxuOwnig==BVcF25X1ZUkeg9Dl";
const api_url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

async function getquote(url){
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': api_key
        }
    });
    const data = await response.json();
    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
    console.log(data);
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML)
}
