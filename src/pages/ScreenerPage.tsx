import { useNavigate } from 'react-router-dom'

export default function ScreenerPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-md p-10 max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold text-blue-700 mb-3">ADHD Screener</h1>
        <p className="text-gray-500 mb-6">The screener questions will appear here.</p>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline text-sm"
        >
          &larr; Back to Home
        </button>
      </div>
    </div>
  )
}
