import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ScreenerPage from './pages/ScreenerPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/screener" element={<ScreenerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
