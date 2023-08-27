let playBtn = document.querySelector('.play-btn');
let flag = document.querySelector('.flag');
let form = document.querySelector('.input-form');
let answer = document.getElementById('input-bar');
let result = document.querySelector('.result');
let score = document.querySelector('.score');

let point = 0;
score.innerHTML = `<h3>Score: ${point}</h3>`;

playBtn.addEventListener('click', () => {
    
    answer.value = "";

    answer.focus();

    let URL = `https://restcountries.com/v3.1/all?fields=name,flags`;

    fetch(URL).then((response) => response.json())
    .then((data) => {

        let random = Math.floor(Math.random() * 250);
        let country = data[random].name.common;
        console.log(country);

        flag.innerHTML = `
            <img src="${data[random].flags.svg}" alt="" class="img">
       `;
       
        form.addEventListener('submit', e => {
            e.preventDefault();
            const userAnswer = answer.value.trim().toLowerCase().split(' ').map(word => {return word.charAt(0).toUpperCase() + word.slice(1);})
            .join(' ');

            console.log(answer.value);

            if(userAnswer === country){
                console.log("Correct answer!");
                playBtn.textContent = 'Continue';
                result.innerHTML = `
                <img src="icon/correct.png" onerror="this.style.display='none'">
                <p>Correct answer! Continue</p>
                `;
                point += 10;
                score.innerHTML = `<h3>Score: ${point}</h3>`;
            }
            else{
                console.log("Wrong answer!");
                playBtn.textContent = 'Pass';
                result.innerHTML = `
                <img src="icon/wrong.png" onerror="this.style.display='none'">
                <p>Wrong answer! Try again or pass</p>
                `;
            }

        });


    });

//    score.innerHTML = `<h3>Score: ${point}</h3>`;

    result.innerHTML = `<img src="" onerror="this.style.display='none'">
    <p></p>`;

});
