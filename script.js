const showJokesBtn = document.querySelector('.joke-btn');
const showQuoteBtn = document.querySelector('.quote-btn');
/* function showMeme() {
    showMemeBtn.addEventListener("click", async () => {
        try {
            const response = await fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact', options)
            const data = await response.json();

            const img = document.createElement('img');

            img.src = data.imageUrl;
            img.alt = data.name;

            memeContent.appendChild(img);
            /* const randomMeme = Math.floor(Math.random() * data.length);
            console.log(randomMeme); */
            // console.log(data[randomMeme]);
            /* const randomMeme = Math.floor(Math.random() + data.length);
            return data[randomMeme]; */
        //} 
        //catch(err) {
        //    console.log(err);
        //}
    //});
//} */


function showMeme() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2a32f0047cmsh79e887a04f89a9dp1581abjsn713fe14b14cf',
                'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
            }
        };
        
        fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
            .then(response => response.json())
            .then(data => {
                const memeImages = [];
                for (const img of data) {
                    //const index = Math.floor(Math.random() + data.length);
                    memeImages.push(img.image);
                }
                const index = Math.floor(Math.random() * memeImages.length);
                
                for(let i=0; i<memeImages.length; i++) {
                    // console.log(memeImages[index]);
                    const memeSrc = document.querySelector("img");
                    memeSrc.src = memeImages[index]
                }
                // console.log(memeImages.length);

                /* for(const meme of data) {
                    const image = meme.image;

                    console.log(image[index]);
                } */
                /* const meme = data[index];
                
                const id = meme.id;
                const image = meme.image;

                console.log(id, image); */
            });

    } catch(err) {
        console.error(err);
    }
}

function showJoke() {
    showJokesBtn.addEventListener("click", () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '2a32f0047cmsh79e887a04f89a9dp1581abjsn713fe14b14cf',
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
        } catch(err) {
            console.error(err);
        }
    });
}

function showQuote() {
    showQuoteBtn.addEventListener("click", () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '2a32f0047cmsh79e887a04f89a9dp1581abjsn713fe14b14cf',
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
                });
        } catch(err) {
            console.error(err);
        }
    });
}

function showRiddle() {
    const randomRiddle = getRandomData('riddles');
}

function revealAnswers() {
}
