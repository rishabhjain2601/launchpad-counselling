import React from "react";

const Card = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="card drop-shadow overflow-hidden">
        <img src={image} alt="" className="card-img" />
      </div>
      <span className="font-bold m-3 text-xl text-center">{name}</span>
    </div>
  );
};

export default Card;
