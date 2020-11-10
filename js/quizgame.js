//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questões funcionam para que nossa função getQuestion mais tarde possa obter o valor correto do array

let questions = [{
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/bellbird.jpg",
    choiceA: "Falcão da Nova Zelândia",
    choiceB: "Korimako",
    choiceC: "Arára azul",
    choiceD: "Mātātā",
    correctAnswer: "B"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/fantail.jpg",
    choiceA: "Papacapim",
    choiceB: "Canário da terra",
    choiceC: "Fantail",
    choiceD: "Ave negra inglêsa",
    correctAnswer: "C"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/morepork.jpg",
    choiceA: "Ruru",
    choiceB: "Araponga",
    choiceC: "micy da arábia",
    choiceD: "Parakeet Africano",
    correctAnswer: "A"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/tui.jpg",
    choiceA: "Tūī",
    choiceB: "Trinca-ferro",
    choiceC: "Araponga",
    choiceD: "Fantail",
    correctAnswer: "A"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/dotterel.jpg",
    choiceA: "Tāiko",
    choiceB: "Ave negra inglêsa",
    choiceC: "Nibiru",
    choiceD: "Dotterel da Nova Zelândia",
    correctAnswer: "D"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/kakapo.jpg",
    choiceA: "Kākā",
    choiceB: "Araponga",
    choiceC: "Kākāpō",
    choiceD: "Pica-Pau",
    correctAnswer: "C"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/kotuku.jpg",
    choiceA: "Iti da Nova Zelândia",
    choiceB: "Heron Branco",
    choiceC: "Araponga",
    choiceD: "Trinca ferro",
    correctAnswer: "B"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/kea.jpg",
    choiceA: "Falcão negro",
    choiceB: "Currupião",
    choiceC: "Araponga",
    choiceD: "Kea",
    correctAnswer: "D"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/kaka.jpg",
    choiceA: "Kākā",
    choiceB: "Pardal",
    choiceC: "Kalhavim da pensilvania",
    choiceD: "Gavião africano",
    correctAnswer: "A"
}, {
    question: "Qual passaro é esse?",
    imgSrc: "assets/birds/kereru.jpg",
    choiceA: "Kiwi",
    choiceB: "Pigeon da Nova Zelândia",
    choiceC: "Karkará",
    choiceD: "Falcão",
    correctAnswer: "B"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// Visualizar score

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> Você marcou " + score + " de 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Não tão bom! É hora de alguma revisão.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Muito bom! Mas ainda há espaço para melhorias.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Ótimo trabalho! Você realmente conhece seus pássaros!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function que checa se a resposta está correta

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
