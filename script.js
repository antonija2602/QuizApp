const questions = [
    {
        question: "How many time zones are there in Russia?",
        answers:[
            {text: "10", correct: false},
            {text: "11", correct: true},
            {text: "12", correct: false},
            {text: "13", correct: false},
        ]

    },
    {
        question: "What’s the national flower of Japan?",
        answers:[
            {text: "Cherry blossom", correct: true},
            {text: "Sunflower", correct: false},
            {text: "Wisteria", correct: false},
            {text: "Plum blossom", correct: false},
        ]

    },  
    {
        question: "How many days does it take for the Earth to orbit the Sun?",
        answers:[
            {text: "512", correct: false},
            {text: "399", correct: false},
            {text: "365", correct: true},
            {text: "52", correct: false},
        ]

    },  
    {
        question: "What country has the most islands in the world?",
        answers:[
            {text: "Island", correct: false},
            {text: "Sweden", correct: true},
            {text: "Japan", correct: false},
            {text: "Turkey", correct: false},
        ]

    },  
    {
        question: "What’s the smallest country in the world?",
        answers:[
            {text: "Lichtenstein", correct: false},
            {text: "Georgia", correct: false},
            {text: "Belgium", correct: false},
            {text: "The Vatican", correct: true},
        ]

    },  
    {
        question: "When was Netflix founded?",
        answers:[
            {text: "2001", correct: false},
            {text: "2009", correct: false},
            {text: "1997", correct: true},
            {text: "2015", correct: false},
        ]

    }, 
    {
        question: "What year was the very first model of the iPhone released?",
        answers:[
            {text: "2009", correct: false},
            {text: "2007", correct: true},
            {text: "2008", correct: false},
            {text: "2006", correct: false},
        ]

    }
    
]


const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
 
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
     })
    
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"

    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"

}

function handleNextButton(){
    currentQuestionIndex++
    
    if(currentQuestionIndex < questions.length){
        showQuestion()
        
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
   

    if(currentQuestionIndex < questions.length){
        handleNextButton()
        
    }else{
      startQuiz() 
    }
})

startQuiz()







