import type { FrequencyScore } from '../../data/asrsQuestions'

interface AnswerButtonProps {
  label: string
  score: FrequencyScore
  isSelected: boolean
  onClick: (score: FrequencyScore) => void
}

export default function AnswerButton({ label, score, isSelected, onClick }: AnswerButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(score)}
      className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150 text-left ${
        isSelected
          ? 'border-blue-700 bg-blue-700 text-white'
          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
      }`}
    >
      {label}
    </button>
  )
}
