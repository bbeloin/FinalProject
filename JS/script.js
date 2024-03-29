console.log("hello world");

let currentIndex = 0;
const slide = document.getElementById("slide"); 
const quote = document.getElementById("quote");
const homeBTN = document.getElementById("homeBTN");
const ProjectBTN = document.getElementById("ProjectBTN");
const skillBTN = document.getElementById("skillBTN");
const meBTN = document.getElementById("meBTN");
const api_url = "https://type.fit/api/quotes";
const images = [
    "./img/me(2).jpg",
    "./img/me(1).jpg",
    "./img/selfe.jpg"
]

homeBTN.addEventListener("click", () => {
    window.location.href = 'index.html';
})

ProjectBTN.addEventListener("click", () => {
    window.location.href = 'projects.html';
})

skillBTN.addEventListener("click", () => {

    window.location.href = 'skills.html';
})

meBTN.addEventListener("click", () => {
    window.location.href = 'me.html';
})

async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    loadUser(data)
    
}

getapi(api_url);

function loadUser(quotes){
    let html = ``;
    var randNum = Math.floor( Math.random() * quotes.length ) + 1;

    for (let key in quotes){
        let quote = quotes[key];

        let text = quote.text;
        let auther = quote.auther;

        let userHTML = `
        <div class="userBox">
            <h2>
                ${text}
            </h2>

            <div>
                <label>Auther: </label>${auther}
            </div>
        </div>
        `;
        html += userHTML;

    }

    console.log("randnum: " + randNum);
    quote.innerHTML = randNum(html);
    console.log("quote: " + quote);
    console.log("html: " + html);
}

function myTimer(){
    currentIndex++;

    if (currentIndex >= images.length){
        currentIndex = 0;
    }

    slide.src = images[currentIndex];


}

setInterval(myTimer, 5000);