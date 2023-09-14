import React, { useState, useContext, createContext } from 'react'
import QuesType1 from '../components/QuesType1'
import QuesType2 from '../components/QuesType2'
import QuesType3 from '../components/QuesType3'
import questions from '../data/questions.json'
import { useNavigate } from 'react-router-dom'
import userData from '../data/userData.json';

const CareerQuiz = () => {
    const navigate = useNavigate();

    const userData1 = {
        "personality": ['r', 'e'],
        "answers": [
            { "question": "answer" }
        ]
    }
    // Replace this condition with the actual condition you want to check
    const [ansArray, setAnsArray] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const quesType = questions[currentQuestionIndex].isMCQ;
    const quest = `${questions[currentQuestionIndex].question}`

    const updateValue = (input) => {
        // setAnsArray([...ansArray, `${ans}`])
        ansArray.push({ quest, input })
        console.log(ansArray)
    }
    const passValue = (input) => {
        // setAnsArray([...ansArray, `${ans}`])
        ansArray.push({ quest, input })
        console.log(ansArray)
        navigate('/counselling-result')
        userData.push(ansArray)
        console.log(userData)
    }
    const quizQues = () => {
        if (!quesType) {
            if (currentQuestionIndex < 9) {
                return (
                    <QuesType1
                        onSubmit={updateValue}
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />
                );
            }
            else {
                return (
                    <QuesType1
                        onSubmit={passValue}
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />

                );
            }
        }
        else {
            return (
                <QuesType2
                    onSubmit={updateValue}
                    questions={questions}
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                />
            )
        }
    };

    const wPercent = `${((currentQuestionIndex + 1) * 100) / (questions.length)}%`

    return (
        <div>
            <div className='text-5xl mx-auto mt-24 w-fit'>Career Quiz</div>
            <div className='mx-auto w-fit text-2xl mt-10'>Question {currentQuestionIndex + 1}/10</div>
            <div className="w-[60%] mx-auto mt-4 bg-gray-950 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-yellow-400 h-2.5 rounded-full w-[${wPercent}]`} ></div>
            </div>
            <div className='mt-8'>
                {quizQues()}
            </div>
            <div className='mx-auto w-fit text-xl mt-6'>Note : Try to fill it with detailed explanation for better results.</div>
        </div>
    )
}

export default CareerQuiz
