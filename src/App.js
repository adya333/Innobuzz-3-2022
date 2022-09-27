
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.js';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Home/>
        }/>
       <Route path='ContactUs' element={
           <Contact/>
       }/>
        
      </Routes>
    </Router>
  );
}

export default App;
