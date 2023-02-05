import React, {useState} from 'react';
import './Game.css'
const Game = () => {
  const [num, setNum] = useState(0)
  const [ans, setAns] = useState(0)
  const questions = [
    {
      title:'React - это?',
      variants: ['библиотека', 'фреймворк', 'приложение', 'Язык не праграммистов'],
      answ: 2
    },
    {
      title:'JS - это?',
      variants: ['Строготипезированый язык', 'Язык не праграммистов', 'Язык скриптов', 'игра'],
      answ: 3
    },
    {
      title:'CSS - это?',
      variants: ['Блочный язык', 'фреймворк', 'Язык стилей', 'Язык разметки'],
      answ: 3
    },
    {
      title:'HTML - это?',
      variants: ['Язык разметки', 'Строготипезированый язык', 'Блочный язык', 'Язык не праграммистов'],
      answ: 1
    },
    {
      title:'Result?',
      variants: [1],
      answ: 1
    }
  ]
  //questions[num].variants.map((text)=>console.log(text))
  let pros = ((num) * 25) + "%"
  return (
    <div>
      <div className="line" style = {{width: pros}}>.</div>
      <div className="title">{questions[num].title}</div>
      <div className="answ">
        {num+1 !== questions.length ?(
          console.log(num +1, questions.length),
          <Game num = {num} questions={questions}/>
        ):(
          console.log('Успех'),
          <Result />
        )
        }
      </div>
    </div>
  );
  function Result(){
    return(
      <>
        <div>Результат: {ans} из {questions.length -1}</div>
        <button className='asnw_btn' onClick={()=>setNum(0)}>Занова</button>
      </>
    )
  }
  function Game(){
    return(
      questions[num].variants.map((text,index) =>(
        <button
          onClick={()=>{
            console.log('num + 1')
            setNum(num+1)
            console.log(num, questions.length)
            if(index+1 === questions[num].answ){
              setAns(ans + 1)
            }
          }}
          className='asnw_btn'>{text}</button>
      ))
    )
  }
};

export default Game;