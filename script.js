let quote = document.getElementById('quote');
let author = document.getElementById('author')
let btn = document.getElementById('btn')
const url = "https://api.quotable.io/random"


btn.addEventListener('click',()=> {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.content)
        console.log(data.author)
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    });
})

let getQuote = () => {
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    })
}
window.addEventListener('load',getQuote)
btn.addEventListener('click',getQuote)