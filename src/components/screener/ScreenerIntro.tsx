import { Link } from 'react-router-dom'

interface ScreenerIntroProps {
  onBegin: () => void
}

export default function ScreenerIntro({ onBegin }: ScreenerIntroProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl w-full">
        {/* Wordmark */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-semibold text-blue-700 tracking-wide">ADHD Screener</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          WHO Adult ADHD Self-Report Scale (ASRS v1.1)
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          A validated 18-question screening tool developed by the World Health Organization.
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <InfoTile label="18 Questions" sub="Part A + Part B" />
          <InfoTile label="~5 Minutes" sub="At your own pace" />
          <InfoTile label="Confidential" sub="Nothing is stored" />
          <InfoTile label="WHO Validated" sub="ASRS v1.1" />
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-blue-800 text-sm font-semibold mb-1">How to answer</p>
          <p className="text-blue-700 text-sm leading-relaxed">
            For each question, think about how you have felt and conducted yourself over the{' '}
            <span className="font-semibold">past 6 months</span>. Choose the response that best
            describes how often you have experienced each symptom.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <p className="text-yellow-800 text-sm leading-relaxed">
            <span className="font-semibold">Disclaimer:</span> This screener is not a diagnostic
            tool and does not replace a professional evaluation. Results are for informational
            purposes only. Please consult a qualified healthcare provider with any concerns.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            type="button"
            onClick={onBegin}
            className="w-full sm:w-auto bg-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition"
          >
            Begin Screener &rarr;
          </button>
          <Link
            to="/"
            className="text-sm text-blue-600 hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function InfoTile({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
      <p className="font-bold text-gray-800 text-sm">{label}</p>
      <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
    </div>
  )
}
