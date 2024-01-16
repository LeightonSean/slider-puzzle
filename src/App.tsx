import * as React from 'react'
import './styles/App.css';
import { Puzzle } from './components/Puzzle';

export const App:React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        Select Board Size      
      </header>
      <Puzzle>
        
      </Puzzle>
    </div>
  );
}

