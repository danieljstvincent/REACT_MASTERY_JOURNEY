import React, { useState } from 'react';

// Define the props interface
interface CounterProps {
  name?: string; // Optional name/label for the counter
}

const Counter: React.FC<CounterProps> = ({ name = 'Counter' }) => {
  // Step 2.1: Create state for the count
  const [count, setCount] = useState<number>(0);

  // Step 2.2: Create functions to handle count changes
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Step 2.3: Return the JSX
  return (
    <div style={{ 
      border: '4px solid #61dafb', 
      borderRadius: '8px', 
      padding: '15px', 
      margin: '10px',
      textAlign: 'center',
      backgroundColor: '#282c34',
      color: 'white',
      minWidth: '250px',
      maxWidth: '300px',
      flex: '1 1 auto'
    }}>
      <h2>{name}: {count}</h2>
      
      {/* Display different messages based on count */}
      <p>
        {count === 0 && 'Start counting!'}
        {count > 0 && `You've counted up to ${count}`}
        {count < 0 && `You're in negative territory: ${count}`}
      </p>

      {/* Button group */}
      <div style={{ marginTop: '15px' }}>
        <button 
          onClick={decrement}
          style={{
            margin: '0 5px',
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          -
        </button>
        
        <button 
          onClick={reset}
          style={{
            margin: '0 5px',
            padding: '8px 16px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
        
        <button 
          onClick={increment}
          style={{
            margin: '0 5px',
            padding: '8px 16px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          +
        </button>
      </div>

      {/* Bonus: Show count status */}
      <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
        {count > 10 ? '🎉 Great counting!' : ''}
        {count < -5 ? '😟 Going pretty low!' : ''}
      </div>
    </div>
  );
};

export default Counter;