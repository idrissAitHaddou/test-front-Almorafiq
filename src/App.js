import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;