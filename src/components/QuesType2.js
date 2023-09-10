import { toBeDisabled } from '@testing-library/jest-dom/matchers'
import React, { useState } from 'react'

const QuesType2 = () => {
    const [option, setOption] = useState("Medium")

    const onOptionChange = e => {
        setOption(e.target.value)
    }
    return (
        <div className='rounded-3xl mx-auto my-auto text-xl bg-gray-800 opacity-80 w-[50vw] h-[355px] pt-5 pl-4'>
            <div className='ml-[2%] mb-6'>
                Q. Which of the following activities do you enjoy the most in your free time?
            </div>
            <form action="" className='mx-auto'>
                <div className='w-[90%] ml-[3.5%] h-[200px] my-4 rounded-2xl '>
                    <input type="radio" id='option1' className='mb-3 mr-2' value={"ans1"} checked={option==="ans1"} name='ans' onChange={onOptionChange}/>
                    <label htmlFor="option1" >Playing musical instruments or singing</label><br />
                    <input type="radio" id='option2' className='mb-3 mr-2' value={"ans2"} checked={option==="ans2"} name='ans' onChange={onOptionChange}/>
                    <label htmlFor="option2">Solving puzzles, riddles, or brain teasers</label><br />
                    <input type="radio" id='option3' className='mb-3 mr-2' value={"ans3"} checked={option==="ans3"} name='ans' onChange={onOptionChange}/>
                    <label htmlFor="option3">Engaging in physical activities like sports or fitness</label><br />
                    <input type="radio" id='option4' className='mb-4 mr-2' value={"ans4"} checked={option==="ans4"} name='ans' onChange={onOptionChange}/>
                    <label htmlFor="option4">Reading and exploring different books and literature</label><br />
                    <input type="radio" id='option5' className='mr-2' value={"ans5"} checked={option==="ans5"} name='ans' onChange={onOptionChange}/>
                    <label htmlFor="option5">Other : <input type="text" className='text-black outline-white px-2 rounded-full w-[70%]' disabled={option!=="ans5"} /></label>
                </div>
                <button className='bg-gray-600 rounded ml-[3.5%] py-1 px-2'>Previous</button>
                <button className='float-right bg-gray-600 rounded py-1 px-4 mr-[6.5%]'>Next</button>
            </form>
        </div>
    )
}

export default QuesType2
