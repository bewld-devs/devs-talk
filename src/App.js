import './App.css';
import { Routes, Route } from "react-router-dom";
import Feeds from './components/home/Feeds';
import Navbar from './components/registration/Navbar';
import Welcome from './components/registration/Welcome'
import Settings from './components/settings/Settings';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Feeds />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </>
    
  );
}

export default App;
