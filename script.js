const boxQuote = document.querySelector(".boxQuote");
const boxPic = document.querySelector(".pic");
const quote = document.getElementById("quote");
let randomQuote;



boxQuote.addEventListener('click', function afficher() {
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    randomQuote = (`${data.content} —${data.author}`);
    quote.innerHTML = randomQuote;



    fetch('https://picsum.photos/1600/1000')
    .then(response => boxPic.innerHTML = `<img src="${response.url}"  />`);
    

  })
});







