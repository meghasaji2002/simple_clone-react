

import { Nav } from 'react-bootstrap';
import './App.css';
import Banner from './components/Banner';
import MovieCategory from './components/MovieCategory';
import Navbar from './components/Navbar';



function App() {
  return (
    <div >
        <Nav/>
        <Navbar/>
        <Banner/>
        <MovieCategory/>
        
    </div>
  );
}

export default App;
