import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SearchPage from './components/SearchPage';
import Display from './components/Display';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstPage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/display" element={<Display/>}/>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
