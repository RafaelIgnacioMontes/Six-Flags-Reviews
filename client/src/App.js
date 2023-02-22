import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Rides from "./components/Rides";
import Reviews from "./components/Reviews";
import ReviewForm from "./components/ReviewForm";
function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rides" element={<Rides />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
