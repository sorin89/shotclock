import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [seconds, setSeconds] = useState(24);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
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
      <div className="text-5xl my-4">{seconds}</div>
      <div className="">
        <button onClick={Pause} className='mx-2 bg-black text-white p-2 rounded-xl'>Pause</button>
        <button onClick={Reset} className='mx-2 bg-black text-white p-2 rounded-xl'>Reset</button>
      </div>
    </div>
  );
};

export default Clock;