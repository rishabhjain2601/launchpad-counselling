import React from "react";

const Card = ({ image, name }) => {
  return (
    <div>
      <div className="card drop-shadow overflow-hidden mt-10">
        <img src={image} alt="" className="card-img" />
      </div>
      <span className="font-bold flex justify-center m-3 text-xl text-center">
        {name}
      </span>
    </div>
  );
};

export default Card;
