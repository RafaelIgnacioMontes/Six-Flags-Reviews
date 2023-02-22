import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
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
  )
}

export default App
