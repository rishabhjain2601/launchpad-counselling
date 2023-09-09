import React from 'react'

const QuesType1 = () => {
  return (
    <div className='rounded-3xl text-xl mx-auto my-auto bg-stone-800 w-[50vw] h-[390px] pt-5 pl-4'>
      <div className='ml-[4%]'>
        Q. I want to pursue career related to ______
      </div>
      <form action="" className='mx-auto'>
        <input type="text" name='' className='text-black w-[90%] ml-[3.5%] h-[260px] my-4 rounded-2xl ' />
        <button className='bg-stone-700 rounded ml-[3.5%] py-1 px-2'>Previous</button>
        <button className='float-right bg-stone-700 rounded py-1 px-4 mr-[6.5%]'>Next</button>
      </form>
    </div>
  )
}

export default QuesType1
