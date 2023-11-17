import React, { useState, useEffect } from 'react';
import { PiPauseFill, PiPlayFill } from "react-icons/pi";
import { FaSyncAlt } from "react-icons/fa";

const Clock = () => {
  const [seconds, setSeconds] = useState(24);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const Pause = () => {
    setIsRunning(false);
  };

  const Reset = () => {
    setSeconds(24);
    setIsRunning(true);
  };

  return (
    <div className="bg-gray-200 py-10">
      <div className={`text-6xl my-4 ${seconds < 6 ? 'text-red-700' : 'text-red-900'} font-mono cursor-default`}>{seconds}</div>
      <div className="">
        <button onClick={() => setIsRunning(!isRunning)} className='bg-black text-white p-3 rounded-l-lg hover:bg-gray-800 text-3xl border-2 border-white'>
          {isRunning ? <PiPauseFill /> : <PiPlayFill />}
        </button>
        <button onClick={Reset} className='bg-black text-white p-3 rounded-r-lg hover:bg-gray-700 text-3xl border-2 border-white'>
          <FaSyncAlt />
        </button>
      </div>
    </div>
  );
};

export default Clock;