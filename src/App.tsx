import React from 'react';
import { Button } from './components/ui/Button';
import Counter from './components/features/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter name="Jobs Applcation Completed" />
        <Counter name="Pull Request done" />
        <Counter name="Weekly Linkedin Post" />
        <Counter name="Mock INterview" />
      </header>
    </div>
  );
}

export default App;
