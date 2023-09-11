import React, { useState } from 'react'


const QuesType1 = () => {
  const [ans1, setAns1] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setAns1(e.target.value);
  }

  return (
    <div className='rounded-3xl text-xl mx-auto my-auto bg-gray-800 opacity-80 w-[50vw] h-[400px] pt-5 pl-4'>
      <div className='ml-[4%]'>
        Q. I want to pursue career related to ______
      </div>
      <form action="" className='mx-auto'>
        <textarea name="" id="" className='text-black outline-white sbar pl-2 w-[90%]  ml-[3.5%] h-[260px] my-4 rounded-2xl resize-none overflow-y-scroll ' onChange={handleChange} />
        <button className='bg-gray-600 rounded ml-[3.5%] py-1 px-2' onClick={setAns1(['', -1])}>Previous</button>
        <button className='float-right bg-gray-600 rounded py-1 px-4 mr-[6.5%]' disabled={!ans1} onClick={setAns1([`${ans1}`, 1])}>Next</button>
      </form>
    </div>
  )
}

export default QuesType1
