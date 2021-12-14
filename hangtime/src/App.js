import logo from './logo.svg';
import './App.css';

import Game from './components/Game.js';
import AuthProvider from './utils/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Game/>
      </div>
    </AuthProvider>
  );
}

export default App;
