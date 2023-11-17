import React, { useState } from 'react';
import Clock from './components/clock';

function App() {
  const [seconds, setSeconds] = useState<number>(24);
  return (
    <div className="text-center p-2">
      <h1 className="font-bold text-3xl text-gray-800 my-10">
        Shot 
        <span role="img" aria-label="Basketball" className='inline-block mx-2'>
          🏀
        </span>
        Clock
        
      </h1>

      <div className="flex max-w-xl mx-auto rounded-xl bg-gray-200">
        <div className="flex-grow">
          <Clock initialTime={seconds} />
        </div>
        <div className="flex-grow">
          <Clock initialTime={seconds} />
        </div>
      </div>

      <div className="my-2 p-2 max-w-xl mx-auto bg-gray-200">
        <label htmlFor="initial">Initial time in seconds:</label>
        <input type="number" id="initial" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))} aria-label="Enter initial time" aria-required="true" className="mx-10 p-2 rounded bg-gray-100 w-20" />
      </div>
    </div>
  );
}

export default App;
