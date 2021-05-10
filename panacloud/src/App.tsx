import {  QuizType } from './Types/quize_type';
import React, {useState, useEffect } from 'react';
import { getquize } from './services/quizecard';
import QuestionCard from './Componets/questionCard';
import './App.css';
function App() {
  let [quiz, setQuiz] = useState<QuizType[]>([])
  let [currentstep, setstep] = useState(0)
  let [score, setscore] = useState(0)
  let [showresult, setshowresult] = useState(false)
  useEffect(()=>{
   async function fetchdata(){
   const question=await getquize(1,'easy');
   console.log(question);
   setQuiz(question);
   }
   fetchdata();
    },[])
    const handelsubmit=(e:React.FormEvent<EventTarget>,userans:string)=>{
      e.preventDefault();
      const currentquestion:QuizType=quiz[currentstep]
      if(userans===currentquestion.correct_answer){
        setscore(++score);
      }
      if(currentstep!==quiz.length-1)
      setstep(++currentstep);
      else{
        setshowresult(true);
      }
    }
    if(!quiz.length){
     return <h3>loading .. </h3>
    }
    if (showresult) {
      return (<div className="ques">
              <div className="content">
        
        <h2>Result</h2>
  
        <p className="result-text">
          You final score is
            <b> {score}</b> out of <b>{quiz.length}</b>
        </p>
        </div>
        </div>
      )
    }
  return (
    <div className="App">
      <h4>Quize App</h4>
  <QuestionCard
  options={quiz[currentstep].option}
  question={quiz[currentstep].question}
  callback={handelsubmit}
  />
  </div>
  );
}

export default App;
