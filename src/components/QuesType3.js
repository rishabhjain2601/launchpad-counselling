import React from 'react'

const QuesType3 = () => {
    return (
        <div className='rounded-3xl text-xl mx-auto my-auto bg-gray-800 opacity-80 w-[50vw] h-[180px] pt-5 pl-4'>
            <div className='ml-[4%]'>
                Q. What do you want to become ?
            </div>
            <form action="" className='mx-auto'>
                <input type="text" name='' className='text-black outline-white px-2 w-[90%] ml-[3.5%]  my-4 rounded-2xl ' />
                <button className='bg-gray-600 rounded-full ml-[3.5%] py-1 px-2'>Previous</button>
                <button className='float-right bg-gray-600 rounded py-1 px-4 mr-[6.5%]'>Next</button>
            </form>
        </div>
    )
}

export default QuesType3
