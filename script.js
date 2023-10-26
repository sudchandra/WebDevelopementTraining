  const questions=[

    {
        question:"who is the prime minister of india?",
    answers:[
            
                {text:"narendra modi",correct:true},
                {text:"sachin tendulkar",correct:false},
                {text:"rahul gandhi",correct:false},
                {text:"salman khan",correct:false}, 
            
        ]
    },

    {
        question:"who is Rambuthan",
        answers:[
            
                {text:"fruit",correct:true},
                {text:"country",correct:false},
                {text:"bird",correct:false},
                {text:"animal",correct:false},


            
        ]

    },
    {
        question:"In javascrpit === refers as",
        answers:[
            
                {text:"operator",correct:true},
                {text:"function",correct:false},
                {text:"variable",correct:false},
                {text:"String",correct:false}, 
            
        ]

    }
  ] 

  const questionElement=document.getElementById("question");
const answerElement=document.getElementById("answerButtons");
  const nextButton=document.getElementById("nextbtn");


  let currentIndexOfTheQuestion=0;
let   score=0;
  function startQuiz()
  {
     currentIndexOfTheQuestion=0;
     score=0;
     nextButton.innerHTML="NEXT";
     showQuestions(); 
    
  }

  function showQuestions()
  {
    resetState();
      let currentQuestion=questions[currentIndexOfTheQuestion];
      let questionNumber=currentIndexOfTheQuestion + 1;
      questionElement.innerHTML=questionNumber + "." + currentQuestion.question; 

      questions[currentIndexOfTheQuestion].answers.forEach(answer=>{

        const button=document.createElement("button");//creates a button
        button.innerHTML=answer.text;   //add the text
        button.classList.add("btn"); //class name in html
        answerElement.appendChild(button)
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",showAnswers)//show answer is a function;
        
      });
    
  }

  function resetState()
  {
    nextButton.style.display ="none";
    while(answerElement.firstChild)
    {
          answerElement.removeChild(answerElement.firstChild);
    }
       
  }


  function showAnswers(e)
  { 
     const selectedAnswer=e.target;
     const isCorrect=selectedAnswer.dataset.correct==="true"
     if(isCorrect)
     {
         selectedAnswer.classList.add("Correct")
         score++;
     }
     else
     { 
        selectedAnswer.classList.add("InCorrect")
     }
     Array.from(answerElement.children).forEach(button=>{
         if(button.dataset.correct==="true")
         {

            button.classList.add("Correct");
         }
         button.disabled= true;
     });  
     nextButton.style.display="block"; 
  }

  function showScore()
  {
 resetState();
 questionElement.innerHTML= `your total score is${ score}` ;
 nextButton.innerHTML="Play Again"
 nextButton.style.display="block";
  }
  function handleNextButton()
  {
    currentIndexOfTheQuestion++;
    if(currentIndexOfTheQuestion<questions.length)
    {
      showQuestions();
    }
    else{
      showScore();
      
    }
  }
   nextButton.addEventListener("click",()=>{
    if(currentIndexOfTheQuestion<questions.length)
    {
      handleNextButton();
    }
    else{
      startQuiz();
    }
   })



  
  startQuiz();





    
