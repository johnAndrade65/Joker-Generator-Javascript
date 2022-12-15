/*-=VARIABLES=-*/
const button = document.getElementById('button');
const joker = document.getElementById('joke');
const urlApi = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

/*-=FUNCTION THAT TAKES DATA FROM THE API AND TRANSFORMS IT INTO HTML CONTENT TO DISPLAY=-*/
function getJoke(){
    fetch(urlApi)
    .then(data => data.json())
    .then(item => {
        joker.textContent = `${item.joke}`;
    });
}

/*-=WHENEVER CLICKING ON THE BUTTON TRIGGERS THE EVENT THAT CALLS THE FUNCTION=-*/
button.addEventListener('click', getJoke);