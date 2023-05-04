import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <NoteState>
        <Router>

          <Navbar />
          <Alert message={"This is an Alert :)"} />

          <div className="container my-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
