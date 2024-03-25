const categories = {
    science: [
        { question: "Combien de câbles trouve-t-on dans le triphasé?", options: ["3", "5", "4"], correct: "5" },
        { question: "Quelle est la formule des ions sulfate", options: ["Fe", "Zn","SO42-" ], correct: "SO42-" }
    ],

    history: [
        { question: "Quelles sont les deux grandes puissance qui s'affronter durant la guerre froide?", options: ["USA/URSS", "USA/CHINE", "EU/CHINE"], correct: "USA/URSS" },
        { question: "Quelle guerre a été combattue pendant la majeure partie du 20e siècle?", options: ["Première Guerre mondiale", "Deuxième Guerre mondiale", "Guerre froide"], correct: "Guerre froide" }
    ],
    
    professionnel: [
        { question: "Combien de bit possède une adresse IPv4", options: ["32", "8", "16"], correct:"32" },
        { question: "Quel est le premier champ d'une trame Ethernet V2 ou 802.3", options: ["Préambule", "Le début", "01"], correct:"Préambule" }
    ],

    geographie: [
        { question: "Quelle est la capitale de l'Ouzbékistan ?", options: ["Bucarest", "Taipei", "Tachkent"], correct:"Tachkent" },
        { question: " ?", options: ["Bucarest", "Taipei", "Tachkent"], correct:"Tachkent" }
    ],
     
    math: [
        { question: "Que représente r dans une suite arithmétique?", options: ["la Raison", "le 1er terme", "le Résultat"], correct:"la Raison" },
        { question: "Quelle est la probabilité de tomber sur un 6 sur un dé non pipé?", options: ["3/12", "3/6", "1/6"], correct:"1/6" }
    ],

    francais: [
        { question: "Que signifie l'anatidaephobie ?", options: ["ce mot n'existe pas", "la peur des ânes", "la peur qu'un canard vous observe"], correct:"la peur qu'un canard vous observe" },
        { question: "Qui a écrit les misérables ?", options: ["Victor Hugo", "Emile Zola", "Jean de la Fontaine"], correct:"Victor Hugo" }
    ],

};

let currentCategory = "";
let currentQuestionIndex = 0;

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;

    const categoryList = document.getElementById("categoryList");
    const quizContainer = document.getElementById("quizContainer");

    categoryList.style.display = "none";
    quizContainer.style.display = "block";

    displayNextQuestion();
}

function displayNextQuestion() {
    const quizCategory = document.getElementById("quizCategory");
    const questionContainer = document.getElementById("questionContainer");
    const currentQuestion = categories[currentCategory][currentQuestionIndex];

    quizCategory.textContent = `Catégorie: ${currentCategory}`;
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map(option => `<label><input type="radio" name="answer" value="${option}">${option}</label>`).join("")}
    `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (!selectedAnswer) {
        alert("Veuillez sélectionner une réponse.");
        return;
    }

    const currentQuestion = categories[currentCategory][currentQuestionIndex];
    if (selectedAnswer.value === currentQuestion.correct) {
        alert("Bonne réponse!");
    } else {
        alert(`Mauvaise réponse. La réponse correcte est: ${currentQuestion.correct}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < categories[currentCategory].length) {
        displayNextQuestion();
    } else {
        alert("Quiz terminé!");
        resetQuiz();
    }
}

function resetQuiz() {
    const categoryList = document.getElementById("categoryList");
    const quizContainer = document.getElementById("quizContainer");

    categoryList.style.display = "block";
    quizContainer.style.display = "none";
}
