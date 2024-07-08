import React, { useEffect, useState } from 'react'
import questions from './Data';
import { useNavigate } from 'react-router-dom';
function Test() {   
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPrevious, setShowPrevious] = useState(false);
    let totalQuestion = questions.length - 1;
    const navigate = useNavigate();
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const setCurrentOption = (data) => {
        let selectQues = { id: currentQuestion.id, ans: data }
        let totalSelectedQuestion = selectedQuestions.length;
        if (totalSelectedQuestion === 0) {
            setSelectedQuestions([...selectedQuestions, selectQues]);
        } else {
            selectedQuestions.find((o, i) => {
                if (o.id === currentQuestion.id) {
                    selectedQuestions.splice(i);
                    setSelectedQuestions([...selectedQuestions, selectQues]);
                } else {
                    setSelectedQuestions([...selectedQuestions, selectQues]);
                }
            });
        }
    }
    const handaleSubmit = () => {
        console.log(selectedQuestions);
        navigate('/thanks')
    }
    const setQuestion = (ch) => {
        let fetchQuestionIndex;
        if (ch === 1) {
            
            if (currentIndex > 0) {
                fetchQuestionIndex = currentIndex - 1;
                if (fetchQuestionIndex === 0) {
                    setShowPrevious(false)
                }
            }
        } else {
            if (currentIndex < totalQuestion) {           
                fetchQuestionIndex = currentIndex + 1;
                setShowPrevious(true);
            }
        }
        let res = questions[fetchQuestionIndex];
        setCurrentQuestion(res);
        setCurrentIndex(fetchQuestionIndex);
    }
   
    const [timer, setTimer] = useState(300)
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } 
    }, [timer]);  
    return (          
                <div className='container'>
                    <form id="quizForm">
                        <div className='card w1'>
                            <div className='card-body'>
                            <p className='timer'>Time Left :: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
                                <div className='d'>                                  
                                    <button className='btn btn-dark' type='button' onClick={() => handaleSubmit()}><b>Submit Test</b></button>
                                </div>
                                <div className='mt-4 p-5 bg-light rounded'>
                                    <tr>                              
                                        <h5 className='c'><b>{currentQuestion.id} . {currentQuestion.question}</b></h5><br></br>
                                        <div className='v '>
                                            <div><input type="radio" name="ans" value={currentQuestion.option1} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option1}</lable></div> <br></br>
                                            <div><input type="radio" name="ans" value={currentQuestion.option2} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option2}</lable></div> <br></br>
                                            <div><input type="radio" name="ans" value={currentQuestion.option3} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option3}</lable></div> <br></br>
                                            <div><input type="radio" name="ans" value={currentQuestion.option4} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option4}</lable></div> <br></br>
                                        </div>
                                    </tr>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='end'>
                            <div>
                                {showPrevious && <button type="button" className='btn btn-dark' readOnly={true} onClick={() => setQuestion(1)}><b>                            
                                &larr;Previous</b></button>}
                                <button type="button" className='btn btn-dark'disabled={currentIndex === totalQuestion ? true : false} onClick={() => setQuestion(2)}><b>
                                Next &rarr;
                                </b></button>
                            </div>
                        </div>
                    </form>
                </div>           
    )
}export default Test;