import React from 'react'
import QuesType1 from '../components/QuesType1'
import QuesType2 from '../components/QuesType2'
import QuesType3 from '../components/QuesType3'
import questions from '../data/questions.json'
import {ans1} from '../components/QuesType1'
import {ans2} from '../components/QuesType2'
import {ans3} from '../components/QuesType3'

const CareerQuiz = () => {
    return (
        <div>
            <div className='text-5xl mx-auto mt-24 w-fit'>Career Quiz</div>
            <div className='mx-auto w-fit text-2xl mt-10'>Question 4/10</div>
            <div class="w-[60%] mx-auto mt-4 bg-gray-950  rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-yellow-400 h-2.5 rounded-full  w-[40%]" ></div>
            </div>
            <div className='mt-8'>
                <QuesType1/>
            </div>
            <div className='mx-auto w-fit text-xl mt-6'>Note : Try to fill it with detailed explanation for better results.</div>
        </div>
    )
}

export default CareerQuiz
