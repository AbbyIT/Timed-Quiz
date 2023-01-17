let choicesEl= document.querySelector("#choices");
let endScreenEl = document.querySelector("#end-screen");
let startEl= document.querySelector("#start");
let timer = 60;
let timerEl = document.querySelector ("#time");
let questionLocation= document.querySelector("#questions");
let questions = [{question: "Where is Eiffel Tower located", answers:["Paris", "London", "America", "Portugal"], correctAnswer: ("Paris")},
                 {question: "Who is prince Harry's Mother", answers:["The Queen", "Camilla", "Diana", "St Theresa"], correctAnswer: ("Diana")},
                 {question: "What is the highest mountain in the world", answers:["Everest", "Peak", "Killimanjaro", "The Chad"], correctAnswer: ("Everest")},
                 {question: "Which of these are Galaxies", answers:["Milky way", "Sun", "Pluto", "Venus"], correctAnswer: ("Milky way")}
]

// stores questions and answers to be retrieved and used in comparing user's input 

// let question = JSON.parse(localStorage.getItem("question")) || ["Questions", "Answers"];
// let button= document.createElement("button")
// button.content= correctAnswer

// let currentQuestion = 1;

// document.querySelector= ("question-title").textContent= questions[0].question
// console.log (questions[0].answers[0])

// choicesEl.addEventListener("click", function(event) {

    
    
    startEl.addEventListener("click", function(){
        
        startEl.className= "hide"
        let IntervalId = setInterval(function(){
            timer --
            
            timerEl.textContent=timer
            
            // console.log (timer);
        }, 1000)
        
        askQuestions()
    })
    
    //function ask the user questions and give 4 possible answers to choose from
    
    // // if what user chooses an answer compare it with correct answer, then move on. If incorect substract from timer. 
    // if (event.target.matches ("button")){
    // event.target.getAttribute ("data-index")
    
function askQuestions(){
        
let questionText= document.createElement ("p") 
let Answer1 = document.createElement("button")
let Answer2 = document.createElement("button")
let Answer3 = document.createElement("button")
let Answer4 = document.createElement("button")

questionText.textContent = questions[0].question
Answer1.textContent = questions[0].answers[0]
Answer2.textContent = questions[0].answers[1]
Answer3.textContent = questions[0].answers[2]
Answer4.textContent = questions[0].answers[3]

questionLocation.appendChild(questionText)
questionLocation.appendChild(Answer1)
questionLocation.appendChild(Answer2)
questionLocation.appendChild(Answer3)
questionLocation.appendChild(Answer4)

}
    // displaying a question

// for (let i = 0; i < questions[0].answers.length; i++) {
    
//     console.log(currentQuestion)
// }
// });



// if incorrect answer is chosen Subract from timer

// if (correctAnswer) === (false);


//once player selects the last queation, clear interval,timer will be the usesr's score
// clearInterval(IntervalId);
// 
