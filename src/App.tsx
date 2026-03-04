import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ScreenerPage from './pages/ScreenerPage'
import ProviderPage from './pages/ProviderPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/screener" element={<ScreenerPage />} />
        <Route path="/provider/psyched" element={<ProviderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
