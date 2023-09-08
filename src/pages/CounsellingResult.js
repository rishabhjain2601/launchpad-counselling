import React from 'react'

const CounsellingResult = () => {

    // format of API responset
    // inme se koi bhi value empty ho sakti hai. so use Nullish Coalescing ('??') and conditional chaining (streams?.name)
    const CounsellingResult = {
        streams: [
            {name: "Physics, Chem, Maths", reason: "Because you like maths and problem solving"},
            {name: "Commerce, Maths", reason: "Since you like maths and want to do business"}
        ],
        degrees: [
            {name: "B.Sc. Maths", reason: "you can use your math skills to become a mathematician"},
            {name: "BBA", reason: "Since you want to do business"}
        ],
        careers: ["mathematician", "business"],
        competitiveExams: ["CUET", "GATE"]
    }

  return (
    <div>CounsellingResult</div>
  )
}

export default CounsellingResult