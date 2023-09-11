import React from "react";
import Button from "../utils/Button";

const QuesType1 = () => {
  return (
    <div className="rounded-3xl mx-auto p-10 text-xl bg-[#111C25] opacity-80 w-[90%] lg:w-[60%]">
      <div>
        Q. I want to pursue career related to ______
      </div>
      <form action="" className="mx-auto">
        <textarea
          name=""
          id=""
          className="text-black outline-white pl-2 w-full h-[260px] my-4 rounded-2xl resize-none overflow-y-scroll "
        />
        <div className="flex justify-between mt-5">
          <Button>Previous</Button>
          <Button>Next</Button>
        </div>
      </form>
    </div>
  );
};

export default QuesType1;
