import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import RidesForm from './components/RidesForm'
function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RidesForm" element={<RidesForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
