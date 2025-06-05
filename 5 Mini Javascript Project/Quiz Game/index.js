let questions = {
    1: {
        question: "When is Michelle's Birthday?",
        answer: "3/14",
        tricks: ['4/14', "3/15", "2/14", "1/14", "1/18", "8/23"],
        answered: false
    },
    2: {
        question: "What is Michelle's Zodiac Sign",
        answer: "Pisces",
        tricks: ['Virgo', 'Pieces', 'Aries', 'Taurus', 'Gemini', 'Libra', 'Leo', 'Scorpio'],
        answered: false
    },
    3: {
        question: "What is Michelle's Ethnicity?",
        answer: "Ching Chong",
        tricks: ['African', 'Indian', 'Native American', 'White', 'Arab'],
        answered: false
    }
}

let keys = Object.keys(questions);

const container = document.querySelector('.quiz-container');
const nextButton = document.querySelector('.next-button');
let answer = null;

document.addEventListener("DOMContentLoaded", onLoad);
nextButton.addEventListener('click', function() {
    next();
})

function onLoad() {
    randomQ();
}

const randomQ = () => {
    const random = Math.floor(Math.random() * keys.length);
    getQuestion(random);
}

function getQuestion(random) {
    const key = keys[random];
    const header = document.createElement('header');
    header.textContent = questions[key].question;
    container.appendChild(header);

    renderChoices(key);
    delete questions[key];
}

function renderChoices(key) {
    answer = questions[key].answer;
    const allChoices = [...questions[key].tricks, questions[key].answer];
    const shuffed = shuffleArray(allChoices);
    

    shuffed.forEach((choice, index) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'choice';
        radio.value = choice;
        label.style.display = 'block';
        label.style.marginBottom = '20px';
        label.style.marginTop = '20px';
        label.appendChild(radio);
        label.appendChild(document.createTextNode(choice));
        container.appendChild(label);
    });


}

function shuffleArray(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function next() {
    keys = Object.keys(questions);

    const selected = document.querySelector('input[name="choice"]:checked');
    const userAnswer = selected.value;
    if(userAnswer == answer) {
        console.log("Correct");

    } else {
        console.log("Wrong");
        return;
    }
    container.innerHTML = '';
    if(keys.length > 0) {
        randomQ();
    } else {
        endGame();
    }
}

function endGame() {
    const endMessage = document.createElement('p');
    endMessage.textContent = 'Thank you for playing, hope you learned something new about Michelle :D';
    container.appendChild(endMessage);
}

// localStorage.clear();

// ADD NEW QUESTION :D
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', addQuestion);

function addQuestion() {
    let userQuestion = prompt("What is your question?");
    let userAnswer = prompt("What is the answer?");
    let userTricks = prompt("What are your tricks? Separate tricks with a comma (,)");

    const questionData = {
        answer: userAnswer,
        tricks: userTricks.split(',').map(trick => trick.trim())
    }
    const saveQuestion = localStorage.setItem(userQuestion, JSON.stringify(questionData));

}



function loadQuestions() {
    saveQuestion.push(questions);
}

function deleteQuestions() {

}

