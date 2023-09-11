import React from "react";
import DownArrow from "../assets/down-arrow-home.png";
import QuickLink from "../assets/quick-link.png";
import HomeStar from "../assets/home-star.png";
import HomeLights from "../assets/home-lights.png";

const Home = () => {
  return (
    <>
      <div className="flex justify-center text-gray-50">
        <div className="w-11/12">
          <div className="mt-14 text-center relative">
            <h1 className="select-none text-6xl font-bold">
              One Stop Solution
              <br />
              for Your Career
            </h1>
            <h4 className="mt-6 text-xl font-semibold">
              Unlock Your Potential, Shape Your Future.
            </h4>
          </div>
          <div className="m-6 flex flex-col items-center">
            <button
              className="rounded-md bg-yellow-500 px-12 py-3 text-lg font-bold text-gray-900 hover:bg-yellow-400 active:scale-95 shadow-md shadow-yellow-300/50"
            >
              Get Started
            </button>
            <img src={DownArrow} alt="down-arrow-home icon" className="mt-4" />
            <img src={DownArrow} alt="down-arrow-home icon" />
          </div>
          <div className="flex flex-col items-center mt-16">
            <div className="flex gap-2 items-start relative">
              <h2 className="text-4xl font-bold">Quick Links !</h2>
              <img
                src={HomeStar}
                alt="star icon image"
                className="absolute -right-10"
              />
            </div>
            <div className="flex mt-8 gap-8">
              <div>
                <a href="#"
                ><img
                    src={QuickLink}
                    alt="link image"
                    className="hover:opacity-80"
                  /></a>
                <h4 className="text-xl text-center font-semibold">Career Quiz</h4>
              </div>
              <div>
                <a href="#"
                ><img
                    src={QuickLink}
                    alt="link image"
                    className="hover:opacity-80"
                  /></a>
                <h4 className="text-xl text-center font-semibold">Roadmap</h4>
              </div>
              <div>
                <a href="#"
                ><img
                    src={QuickLink}
                    alt="link image"
                    className="hover:opacity-80"
                  /></a>
                <h4 className="text-xl text-center font-semibold">DashBoard</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-20 gap-8">
            <h3 className="text-3xl font-bold">
              Help at every step to make you -
            </h3>
            <div className="flex w-1/2 flex-wrap justify-center gap-4">
              <img
                src="https://placehold.co/100x100"
                alt="success image"
                className="rounded-xl"
              />
              <img
                src="https://placehold.co/100x100"
                alt="success image"
                className="rounded-xl"
              />
              <img
                src="https://placehold.co/100x100"
                alt="success image"
                className="rounded-xl"
              />
              <img
                src="https://placehold.co/100x100"
                alt="success image"
                className="rounded-xl"
              />
              <img
                src="https://placehold.co/100x100"
                alt="success image"
                className="rounded-xl"
              />
            </div>
            <div className="flex w-1/3 flex-wrap justify-center">
              <p className="text-lg font-semibold">
                Software Devoloper <span className="text-sm">✨</span>
              </p>
              <p className="text-lg font-semibold">
                Cricketer <span className="text-sm">✨</span>
              </p>
              <p className="text-lg font-semibold">
                Business Analyst <span className="text-sm">✨</span>
              </p>
              <p className="text-lg font-semibold">
                HR <span className="text-sm">✨</span>
              </p>
              <p className="text-lg font-semibold">
                Manager <span className="text-sm">✨</span>
              </p>
              <p className="text-lg font-semibold">
                Smart Contract Development <span className="text-sm">✨</span>
              </p>
              <p className="text-lg font-semibold">
                Data Analyst <span className="text-sm">✨</span>
              </p>
              <p className="text-lg font-semibold">
                Doctor <span className="text-sm">✨</span>
              </p>
            </div>
          </div>
          <div
            className="w-9/12 h-64 bg-[#111C25] mt-16 mx-auto rounded-3xl bg-cover p-8 border border-gray-700"
            style={{ backgroundImage: `url(${HomeLights})` }}
          >
            <h2 className="text-4xl font-semibold text-center">Weekly Digest</h2>
            <h3
              className="text-2xl text-center font-semibold text-[#9AAFC3] mt-4 tracking-wider"
            >
              Latest news in DAOs and Web3
            </h3>
            <div className="text-center mt-8">
              <input
                type="email"
                name="user-email"
                id="user-email"
                className="w-80 py-3 px-3 text-lg bg-[#0a1117] border border-gray-700 rounded-lg outline-none placeholder:font-semibold placeholder:text-gray-600"
                placeholder="Your Email"
              />
              <button
                className="rounded-md bg-purple-400 px-12 py-3 text-lg font-bold text-gray-900 hover:bg-purple-300 active:scale-95 shadow-sm shadow-purple-300/50 ml-4"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="my-16 flex flex-col items-center">
            <h2 className="text-4xl font-semibold">What's your DAO idea?</h2>
            <h3
              className="text-2xl font-semibold text-[#9AAFC3] mt-4 tracking-wider"
            >
              Let’s chat and see how we can help
            </h3>
            <div className="mt-8 flex w-1/3">
              <button
                className="w-1/2 rounded-md bg-yellow-400 px-12 py-3 text-lg font-bold text-gray-900 hover:bg-yellow-300 active:scale-95 shadow-sm shadow-yellow-300/50"
              >
                Telegram
              </button>
              <button
                className="w-1/2 rounded-md bg-purple-400 px-12 py-3 text-lg font-bold text-gray-900 hover:bg-purple-300 active:scale-95 shadow-sm shadow-purple-300/50 ml-4"
              >
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
