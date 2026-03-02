import { QUESTIONS, PART_A_POSITIVE_THRESHOLD } from '../data/asrsQuestions'
import type { FrequencyScore } from '../data/asrsQuestions'

export interface ScoringResult {
  totalScore: number
  partAPositives: number
  partATotal: 6
  partBPositives: number
  partBTotal: 12
  inattentivePositives: number
  inattentiveTotal: 9
  hyperactivePositives: number
  hyperactiveTotal: 9
  isHighlyConsistent: boolean
}

export function calculateScore(answers: FrequencyScore[]): ScoringResult {
  let totalScore = 0
  let partAPositives = 0
  let partBPositives = 0
  let inattentivePositives = 0
  let hyperactivePositives = 0

  for (let i = 0; i < QUESTIONS.length; i++) {
    const question = QUESTIONS[i]
    const answer = answers[i]

    totalScore += answer

    const isPositive = answer >= question.positiveThreshold

    if (question.part === 'A') {
      if (isPositive) partAPositives++
    } else {
      if (isPositive) partBPositives++
    }

    if (question.domain === 'inattentive') {
      if (isPositive) inattentivePositives++
    } else {
      if (isPositive) hyperactivePositives++
    }
  }

  return {
    totalScore,
    partAPositives,
    partATotal: 6,
    partBPositives,
    partBTotal: 12,
    inattentivePositives,
    inattentiveTotal: 9,
    hyperactivePositives,
    hyperactiveTotal: 9,
    isHighlyConsistent: partAPositives >= PART_A_POSITIVE_THRESHOLD,
  }
}

export function getInterpretation(result: ScoringResult): string {
  if (result.isHighlyConsistent) {
    return 'Your responses are highly consistent with symptoms of ADHD in adults. Your Part A score suggests that ADHD symptoms may be significantly impacting your daily life. We strongly encourage you to discuss these results with a qualified healthcare professional.'
  }
  return 'Your responses do not meet the Part A threshold for ADHD symptom consistency. However, if you have concerns about attention or hyperactivity, it may still be worth discussing your experiences with a healthcare professional.'
}
