import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path='/products' default />
      </Routes>
    </div>
  );
}

export default App;
