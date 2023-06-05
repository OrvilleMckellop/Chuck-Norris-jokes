
const cardText = document.getElementById("card-text");
const cardBtn = document.getElementById("card-button");
const emojiCharacter = document.getElementById("card-emoji");

cardBtn.addEventListener("click", getJoke);

//generate random number for emoji
function getRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getJoke(){

    //exception handling for jokes
    try {
        const jokeResponse = await fetch("https://api.chucknorris.io/jokes/random");
        const jokeData = await jokeResponse.json();

        cardText.textContent = jokeData.value;

    } catch (e1) {
        cardText.textContent = "Error Occurred, Failed to get a Joke";
        console.error(e1);
        
    }

    //exception handling for emoji
    try {
        let emojiData = 128514;
        emojiData = getRandom(128512,128541);

        emojiCharacter.textContent = String.fromCodePoint(emojiData);
    } catch (e2) {
        emojiCharacter.textContent = `Error Occurred, Failed to get an emoji`;
        console.error(e2);
    }
}