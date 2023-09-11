import React,{ useState }  from 'react'
import Button from "../utils/Button";

const QuesType1 = () => {
  const [ans1, setAns1] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setAns1(e.target.value);
  }

  return (
    <div className="rounded-3xl mx-auto p-10 text-xl bg-[#111C25] opacity-80 w-[90%] lg:w-[60%]">
      <div>
        Q. I want to pursue career related to ______
      </div>
      <form action="" className='mx-auto'>
        <textarea name="" id="" className='text-black outline-white sbar pl-2 w-[90%]  ml-[3.5%] h-[260px] my-4 rounded-2xl resize-none overflow-y-scroll '/>
        <button className='bg-gray-600 rounded ml-[3.5%] py-1 px-2'>Previous</button>
        <button className='float-right bg-gray-600 rounded py-1 px-4 mr-[6.5%]'>Next</button>
      </form>
    </div>
  );
};

export default QuesType1;
