import React, { useState } from "react";

const Game = () => {
  const [computer, setComputer] = useState("Выберает...");
  const [player, setPlayer] = useState("Выберай!");
  const [scorePlayer, setscorePlayer] = useState(0);
  const [scoreCompuer, setscoreCompuer] = useState(0);

  const randomNum = () => {
    return Math.floor(Math.random() * 10);
  };

  const ButtonPaper = (e) => {
    const randomNumber = randomNum();
    console.log(randomNumber);

    if (randomNumber < 3) {
      console.log("rock");
      setComputer("rock");
    } else if (randomNumber < 6) {
      console.log("paper");
      setComputer("paper");
    } else {
      console.log("scissors");            
      setComputer("scissors");
    }

    setPlayer(e.target.value);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex-col gap-6">
      <div className="container max-w-6xl mx-auto flex justify-between">
        <div className="text-white text-4xl py-10 flex items-center gap-5">
          <h1>Player: </h1>
          <p>{scorePlayer}</p>
        </div>
        <div className="text-white text-4xl py-10 flex items-center gap-5">
          <h1>Computer: </h1>
          <p>{scoreCompuer}</p>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto ">
        <h1 className="text-center text-white text-4xl">Choose an option</h1>
        <div className="flex w-full justify-between my-20 text-white text-4xl h-[40vh] items-center">
          <p>{player}</p>
          <p>{computer}</p>
        </div>
        <div className="flex w-full justify-between">
          <button
            onClick={ButtonPaper}
            value="Paper"
            className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-gray-900 bg-gray-900 text-white hover:border-white hover:bg-transparent hover:transition-all rounded-lg hover:animate-bounce"
          >
            Paper
          </button>
          <button
            onClick={ButtonPaper}
            value="Scissors"
            className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-gray-900 bg-gray-900 text-white hover:border-white hover:bg-transparent hover:transition-all rounded-lg hover:animate-bounce"
          >
            Scissors
          </button>
          <button
            onClick={ButtonPaper}
            value="Rock"
            className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-gray-900 bg-gray-900 text-white hover:border-white hover:bg-transparent hover:transition-all rounded-lg hover:animate-bounce"
          >
            Rock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
