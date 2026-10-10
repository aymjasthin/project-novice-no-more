import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Journey from './components/Journey/Journey'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App