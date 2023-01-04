const showMemeBtn = document.getElementsByClassName('meme-btn');
const showJokesBtn = document.getElementsByClassName('joke-btn');
const showQuoteBtn = document.getElementsByClassName('quote-btn');
const showRiddleBtn = document.getElementsByClassName('riddle-btn');
const revealAnswerBtn = document.getElementsByClassName('reveal-btn');
const riddleElem = document.getElementsByClassName('riddle_answer');

function showMeme() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': window.env.RapidAPIKey,
            'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
        }
    };
  
    fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
      .then(response => response.json())
      .then(data => {
        const memeImages = [];
        for (const img of data) {
            memeImages.push(img.image);
        }
        const index = Math.floor(Math.random() * memeImages.length);

        for (let i = 0; i < memeImages.length; i++) {
            const memeSrc = document.querySelector("img");
            memeSrc.src = memeImages[index];
        }
      })
      .catch(err => console.error(err));
} 
showMemeBtn.addEventListener("click", showMeme);
  

function showJoke() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': window.env.RapidAPIKey,
            'X-RapidAPI-Host': 'deez-nuts-jokes.p.rapidapi.com'
        }
    };

    fetch('https://deez-nuts-jokes.p.rapidapi.com/joke/random', options)
        .then(response => response.json())
        .then(data => {
            const joke = data.data[0];

            const jokePrompt = document.querySelector(".joke-prompt");
            const reply1 = document.querySelector(".joke-reply1");
            const reply2 = document.querySelector(".joke-reply2");

            // Update the container element with the HTML
            jokePrompt.innerHTML = `Question: ${joke.prompt}`;
            reply1.innerHTML = `#1 ${joke.reply.first}`;
            reply2.innerHTML = `#2 ${joke.reply.second}`;   
        })
        .catch(err => console.error(err));
}
showJokesBtn.addEventListener("click", showJoke);

function showQuote() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': window.env.RapidAPIKey,
            'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com'
        }
    };
    
    fetch('https://random-quote-generator2.p.rapidapi.com/randomQuote', options)
        .then(response => response.json())
        .then(data => {
            const quote = data[0];
            
            const Quote = document.querySelector(".quote");
            const Author = document.querySelector(".author");
            
            // Update the container element with the HTML
            Quote.innerHTML = `${quote.Quote}`;
            Author.innerHTML = `Author: ${quote.Author}`;
        })
        .catch(err => console.error(err));
}
showQuoteBtn.addEventListener("click", showQuote);

function showRiddle() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': window.env.RapidAPIKey,
            'X-RapidAPI-Host': 'riddles-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles', options)
        .then(response => response.json())
        .then(data => {
            const riddle = data[0];

            const riddle_question = document.querySelector('.riddle_question');
            const riddle_answer = document.querySelector('.riddle_answer');

            riddle_answer.style.display = 'none';

            // Update the container element with the HTML
            riddle_question.innerHTML = `${riddle.question}`;
            riddle_answer.innerHTML = `${riddle.answer}`;
        })
        .catch(err => console.error(err));
}
showRiddleBtn.addEventListener("click", showRiddle);

function revealAnswer() {
    revealAnswerBtn.addEventListener('click', () => {
        if (riddleElem.style.display === 'none') {
            riddleElem.style.display = 'block';
        } else {
            riddleElem.style.display = 'none';
        }
    });
}