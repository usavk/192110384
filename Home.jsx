import React, { useState } from 'react';

function Home() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setNumbers(e.target.value);
  };

  const calculateAverage = () => {
    try {
      const numberArray = numbers.split(',').map(Number);

      if (numberArray.length === 0) {
        throw new Error('The list of numbers cannot be empty');
      }

      if (numberArray.some(isNaN)) {
        throw new Error('Invalid input. Please provide a list of numbers');
      }

      const sum = numberArray.reduce((acc, num) => acc + num, 0);
      const avg = sum / numberArray.length;

      setAverage(avg);
      setError(null);
    } catch (err) {
      setError(err.message);
      setAverage(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <div>
          <input
            type="text"
            value={numbers}
            onChange={handleInputChange}
            placeholder="Enter numbers separated by commas"
          />
          <button onClick={calculateAverage}>Calculate Average</button>
        </div>
        {average !== null && <h2>Average: {average}</h2>}
        {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}
      </header>
    </div>
  );
}

export default Home;
