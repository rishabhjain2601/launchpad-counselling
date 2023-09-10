import React from 'react'

const QuesType1 = () => {
  return (
    <div className='rounded-3xl text-xl mx-auto my-auto bg-gray-800 opacity-80 w-[50vw] h-[400px] pt-5 pl-4'>
      <div className='ml-[4%]'>
        Q. I want to pursue career related to ______
      </div>
      <form action="" className='mx-auto'>
        <textarea name="" id="" className='text-black outline-white sbar pl-2 w-[90%]  ml-[3.5%] h-[260px] my-4 rounded-2xl resize-none overflow-y-scroll '/>
        <button className='bg-gray-600 rounded ml-[3.5%] py-1 px-2'>Previous</button>
        <button className='float-right bg-gray-600 rounded py-1 px-4 mr-[6.5%]'>Next</button>
      </form>
    </div>
  )
}

export default QuesType1
