import logo from './logo.svg';
import { NavBar } from './components/navBar';
import './App.css';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Work } from './pages/work';

function App() {
  return (
    <Container>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/test-app/" element={<Home/>} />
          <Route path="/test-app/about" element={<About/>}/>
          <Route path="/test-app/work" element={<Work/>} />
        </Routes>
      </BrowserRouter>
    </Container>
    
      
    
  );
}

export default App;
