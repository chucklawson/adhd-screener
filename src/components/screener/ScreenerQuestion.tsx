import type { ASRSQuestion, FrequencyScore } from '../../data/asrsQuestions'
import { FREQUENCY_LABELS, FREQUENCY_SCORES } from '../../data/asrsQuestions'
import ProgressBar from './ProgressBar'
import AnswerButton from './AnswerButton'

interface ScreenerQuestionProps {
  question: ASRSQuestion
  questionIndex: number
  totalQuestions: number
  currentAnswer: FrequencyScore | null
  onAnswer: (score: FrequencyScore) => void
  onNext: () => void
  onBack: () => void
  isFirstQuestion: boolean
  isLastQuestion: boolean
}

export default function ScreenerQuestion({
  question,
  questionIndex,
  totalQuestions,
  currentAnswer,
  onAnswer,
  onNext,
  onBack,
  isFirstQuestion,
  isLastQuestion,
}: ScreenerQuestionProps) {
  const domainLabel = question.domain === 'inattentive' ? 'Inattention' : 'Hyperactivity/Impulsivity'
  const domainColor =
    question.domain === 'inattentive'
      ? 'bg-purple-100 text-purple-700'
      : 'bg-orange-100 text-orange-700'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl w-full">
        {/* Wordmark */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-base">A</span>
          </div>
          <span className="text-lg font-semibold text-blue-700 tracking-wide">ADHD Screener</span>
          <span className="ml-auto text-xs font-medium bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
            Part {question.part}
          </span>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <ProgressBar current={questionIndex + 1} total={totalQuestions} />
        </div>

        {/* Domain badge */}
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${domainColor}`}>
          {domainLabel}
        </span>

        {/* Question text */}
        <p className="text-gray-800 text-lg font-medium leading-snug mb-1">
          {question.text}
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Think about the past 6 months.
        </p>

        {/* Answer options */}
        <div className="flex flex-col gap-2 mb-8">
          {FREQUENCY_SCORES.map((score) => (
            <AnswerButton
              key={score}
              score={score}
              label={FREQUENCY_LABELS[score]}
              isSelected={currentAnswer === score}
              onClick={onAnswer}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onBack}
            className="text-sm text-gray-500 hover:text-blue-700 transition px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300"
          >
            &larr; {isFirstQuestion ? 'Back to Intro' : 'Back'}
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={currentAnswer === null}
            className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-full text-sm hover:bg-blue-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLastQuestion ? 'View Results →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  )
}
