import logo from './logo.svg';
import './App.css';
import Firstpage from './Firstpage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Secondpage from './Secondpage';
import { First } from 'react-bootstrap/esm/PageItem';
import Thirdpage from './Thirdpage';

function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="Secondpage" element={<Secondpage />} />
        <Route path="Thirdpage" element={<Thirdpage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
