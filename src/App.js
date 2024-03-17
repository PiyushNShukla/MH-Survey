import React from 'react';
import './styles/style.css';
import './App.css';
import PHQ9Survey from './components/PHQ9Survey';
function App() {
  return (
    <div className="App">
         <main>
        <PHQ9Survey />
      </main>
      <footer>
        <p>&copy; 2024 My PHQ-9 Survey App</p>
      </footer>
    </div>
  );
}

export default App;

