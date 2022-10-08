import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="contacts" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
