import React from 'react';
import Clock from './components/clock';

function App() {
  return (
    <div className="text-center p-2">
      <h1 className="font-bold text-3xl text-gray-800 my-10">
        Shot 
        <span role="img" aria-label="Basketball" className='inline-block mx-2'>
          🏀
        </span>
        Clock
        
      </h1>

      <div className='flex max-w-xl mx-auto rounded-xl bg-gray-200'>
        <div className='flex-grow'>
          <Clock/>
        </div>
        <div className='flex-grow'>
          <Clock/>
        </div>
      </div>
    </div>
  );
}

export default App;
