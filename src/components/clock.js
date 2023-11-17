import React, { useState, useEffect } from 'react';

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
    <div className="bg-gray-100 py-10">
      <div className="text-6xl my-4 text-red-700">{seconds}</div>
      <div className="">
        <button onClick={Pause} className='mx-1 bg-black text-white p-2 rounded-md'>Pause</button>
        <button onClick={Reset} className='mx-1 bg-black text-white p-2 rounded-md'>Reset</button>
      </div>
    </div>
  );
};

export default Clock;