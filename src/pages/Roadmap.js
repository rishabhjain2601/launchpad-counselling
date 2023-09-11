import React, { useState } from "react";
import Button from "../utils/Button";
import Card from "../utils/Card";

const Roadmap = () => {
  const [step, setStep] = useState(0);

  const courses = [
    {
      title: "The Complete 2023 Web Development Bootcamp",
      image: "https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    },
    {
      title: "The Web Developer Bootcamp 2023",
      image: "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
      link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    },
    {
      title: "The Web Development Bootcamp",
      image: "https://img-b.udemycdn.com/course/240x135/4505104_8592_8.jpg",
      link: "https://www.udemy.com/course/fullstack-web-development-course-projects-base/",
    },
  ];

  const skills = [
    "HTML, CSS",
    "Javascript",
    "React JS",
    "Node JS",
    "Express JS",
    "Mongo DB",
    "NEXT JS",
  ];

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (step < skills.length) {
      setStep((prev) => prev + 1);
    }
  };

  // apply "is-done" className on divs having classNames "cd-timeline-img" and "cd-timeline-content"
  // to mark that SKILL as completed...

  return (
    
    <div className="bg-[#111C25] w-11/12 md:w-10/12 mx-auto my-10 py-14 px-8 md:px-16 rounded-3xl">
      {/* Button */}
      <div className="flex justify-between">
        <Button onClick={handlePrev}>Prev Step</Button>
        <Button onClick={handleNext}>Next Step</Button>
      </div>
      {/* Timeline */}
      <div className="w-[10%] hidden xl:block h-[4px] bg-black opacity-80 m-auto" />
      <section id="cd-timeline" className="cd-container font-bold">
        {skills.map((ele, index) => {
          return (
            <div className="cd-timeline-block">
              <div
                className={`cd-timeline-img ${
                  step > index ? "is-done" : ""
                } cd-picture`}
              ></div>
              <div
                className={`cd-timeline-content ${
                  step > index ? "is-done" : ""
                }`}
              >
                <h2>{ele}</h2>
              </div>
            </div>
          );
        })}
      </section>
      <div className="w-[10%] hidden xl:block h-[4px] bg-black opacity-80 m-auto" />

      {/* Suggested courses */}
      <div className="my-10">
        <h2 className="text-3xl font-semibold">
          Recommended Courses for ReactJS-
        </h2>
        <div className="flex items-center gap-4 justify-center md:justify-evenly flex-wrap my-10">
          {courses.map((ele, index) => {
            return <Card link={ele.link} image={ele.image} name={ele.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
