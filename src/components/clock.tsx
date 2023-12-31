import React, { useState, useEffect } from 'react';
import { PiPauseFill, PiPlayFill } from "react-icons/pi";
import { FaSyncAlt } from "react-icons/fa";

interface ClockProps {
  initialTime: number;
}

const Clock: React.FC<ClockProps> = ({ initialTime }) => {
  const [seconds, setSeconds] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let timer: number | undefined;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const Reset = () => {
    setSeconds(initialTime);
    setIsRunning(true);
  };

  return (
    <div className="bg-gray-200 py-10" role="timer" aria-live="polite" aria-atomic="true">
      <div className={`text-6xl my-4 ${seconds < 6 ? 'text-red-700' : 'text-red-900'} ${seconds === 0 && 'animate-ping'} font-mono cursor-default`}>{seconds}</div>
      <div className="">
        <button onClick={() => setIsRunning(!isRunning)} className='bg-black text-white p-3 rounded-l-lg hover:bg-gray-800 text-3xl border-2 border-white'  aria-label={isRunning ? 'Pause' : 'Play'}>
          {isRunning ? <PiPauseFill /> : <PiPlayFill />}
        </button>
        <button onClick={Reset} className='bg-black text-white p-3 rounded-r-lg hover:bg-gray-700 text-3xl border-2 border-white' aria-label='Reset'>
          <FaSyncAlt />
        </button>
      </div>
    </div>
  );
};

export default Clock;