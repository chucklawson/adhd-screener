import { useState } from 'react'
import { QUESTIONS } from '../data/asrsQuestions'
import type { FrequencyScore } from '../data/asrsQuestions'
import { calculateScore } from '../utils/scoring'
import ScreenerIntro from '../components/screener/ScreenerIntro'
import ScreenerQuestion from '../components/screener/ScreenerQuestion'
import ScreenerResults from '../components/screener/ScreenerResults'

type ScreenerStep = 'intro' | 'questions' | 'results'

export default function ScreenerPage() {
  const [step, setStep] = useState<ScreenerStep>('intro')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<(FrequencyScore | null)[]>(
    Array(QUESTIONS.length).fill(null)
  )

  function handleBegin() {
    setStep('questions')
  }

  function handleAnswer(score: FrequencyScore) {
    setAnswers((prev) => {
      const next = [...prev]
      next[currentQuestionIndex] = score
      return next
    })
  }

  function handleNext() {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((i) => i + 1)
    } else {
      setStep('results')
    }
  }

  function handleBack() {
    if (currentQuestionIndex === 0) {
      setStep('intro')
    } else {
      setCurrentQuestionIndex((i) => i - 1)
    }
  }

  function handleRetake() {
    setStep('intro')
    setCurrentQuestionIndex(0)
    setAnswers(Array(QUESTIONS.length).fill(null))
  }

  if (step === 'intro') {
    return <ScreenerIntro onBegin={handleBegin} />
  }

  if (step === 'questions') {
    return (
      <ScreenerQuestion
        question={QUESTIONS[currentQuestionIndex]}
        questionIndex={currentQuestionIndex}
        totalQuestions={QUESTIONS.length}
        currentAnswer={answers[currentQuestionIndex]}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
        isFirstQuestion={currentQuestionIndex === 0}
        isLastQuestion={currentQuestionIndex === QUESTIONS.length - 1}
      />
    )
  }

  const allAnswered = answers.every((a) => a !== null)
  const result = allAnswered
    ? calculateScore(answers as FrequencyScore[])
    : calculateScore(answers.map((a) => a ?? 0) as FrequencyScore[])

  return <ScreenerResults result={result} onRetake={handleRetake} />
}
