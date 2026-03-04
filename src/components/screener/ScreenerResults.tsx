import { Link } from 'react-router-dom'
import type { ScoringResult } from '../../utils/scoring'
import { getInterpretation } from '../../utils/scoring'

interface ScreenerResultsProps {
  result: ScoringResult
  onRetake: () => void
}

export default function ScreenerResults({ result, onRetake }: ScreenerResultsProps) {
  const interpretation = getInterpretation(result)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-5">
        {/* Wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-semibold text-blue-700 tracking-wide">ADHD Screener</span>
        </div>

        {/* Card 1: Part A Result */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">Part A Screening Result</h2>
            {result.isHighlyConsistent ? (
              <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                Highly Consistent
              </span>
            ) : (
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Threshold Not Met
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-3">
            Part A positives:{' '}
            <span className="font-semibold text-gray-700">
              {result.partAPositives} / {result.partATotal}
            </span>
            {' '}(threshold: 4 or more)
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">{interpretation}</p>
        </div>

        {/* Card 2: Symptom Domain Breakdown */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Symptom Domain Breakdown</h2>

          <div className="space-y-4">
            <DomainBar
              label="Inattention"
              positives={result.inattentivePositives}
              total={result.inattentiveTotal}
              color="purple"
            />
            <DomainBar
              label="Hyperactivity / Impulsivity"
              positives={result.hyperactivePositives}
              total={result.hyperactiveTotal}
              color="orange"
            />
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
            <span>Total score</span>
            <span className="font-semibold text-gray-700">{result.totalScore} / 72</span>
          </div>
        </div>

        {/* Card 3: Next Steps */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Next Steps</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">•</span>
              Share these results with your primary care physician or a mental health professional.
            </li>
            <li className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">•</span>
              Request a comprehensive evaluation — a screener alone does not constitute a diagnosis.
            </li>
            <li className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">•</span>
              Keep a symptom diary noting situations where attention or hyperactivity affects daily life.
            </li>
            <li className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">•</span>
              Explore trusted resources such as{' '}
              <span className="text-blue-600 font-medium">CHADD.org</span> or{' '}
              <span className="text-blue-600 font-medium">ADDitude Magazine</span> for education and support.
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-yellow-800 text-sm leading-relaxed">
            <span className="font-semibold">Important:</span> This screener is not a diagnostic
            tool and does not replace a professional evaluation. Results are for informational
            purposes only. Consult a qualified healthcare provider with any concerns.
          </p>
        </div>

        {/* Provider CTA */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <p className="text-sm text-gray-500 mb-1">Looking for a provider?</p>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Connect with Psyched</h2>
          <p className="text-sm text-gray-600 mb-4">
            Psyched specializes in functional medicine &amp; psychiatry for ADHD, anxiety, depression,
            and hormonal concerns — from perinatal to postmenopause.
          </p>
          <Link
            to="/provider/psyched"
            className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition text-sm"
            style={{ backgroundColor: '#1895A9' }}
          >
            View Provider Profile →
          </Link>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onRetake}
            className="flex-1 border-2 border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition text-sm text-center"
          >
            Retake Screener
          </button>
          <Link
            to="/"
            className="flex-1 bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition text-sm text-center"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function DomainBar({
  label,
  positives,
  total,
  color,
}: {
  label: string
  positives: number
  total: number
  color: 'purple' | 'orange'
}) {
  const percent = Math.round((positives / total) * 100)
  const barColor = color === 'purple' ? 'bg-purple-500' : 'bg-orange-400'
  const textColor = color === 'purple' ? 'text-purple-700' : 'text-orange-600'

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className={`font-medium ${textColor}`}>{label}</span>
        <span className="text-gray-500">
          {positives} / {total} positive
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className={`${barColor} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
