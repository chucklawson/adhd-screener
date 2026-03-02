export type FrequencyScore = 0 | 1 | 2 | 3 | 4
export type SymptomDomain = 'inattentive' | 'hyperactive-impulsive'

export interface ASRSQuestion {
  id: number
  part: 'A' | 'B'
  text: string
  positiveThreshold: FrequencyScore
  domain: SymptomDomain
}

export const FREQUENCY_LABELS: Record<FrequencyScore, string> = {
  0: 'Never',
  1: 'Rarely',
  2: 'Sometimes',
  3: 'Often',
  4: 'Very Often',
}

export const FREQUENCY_SCORES: readonly FrequencyScore[] = [0, 1, 2, 3, 4]

export const PART_A_POSITIVE_THRESHOLD = 4

export const QUESTIONS: ASRSQuestion[] = [
  // Part A — Q1–Q3: inattentive, threshold 2 (Sometimes)
  {
    id: 1,
    part: 'A',
    text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
    positiveThreshold: 2,
    domain: 'inattentive',
  },
  {
    id: 2,
    part: 'A',
    text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    positiveThreshold: 2,
    domain: 'inattentive',
  },
  {
    id: 3,
    part: 'A',
    text: 'How often do you have problems remembering appointments or obligations?',
    positiveThreshold: 2,
    domain: 'inattentive',
  },
  // Part A — Q4: inattentive, threshold 3 (Often)
  {
    id: 4,
    part: 'A',
    text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
    positiveThreshold: 3,
    domain: 'inattentive',
  },
  // Part A — Q5–Q6: hyperactive-impulsive, threshold 3 (Often)
  {
    id: 5,
    part: 'A',
    text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
    positiveThreshold: 3,
    domain: 'hyperactive-impulsive',
  },
  {
    id: 6,
    part: 'A',
    text: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
    positiveThreshold: 3,
    domain: 'hyperactive-impulsive',
  },
  // Part B — Q7–Q11: inattentive, threshold 3 (Often)
  {
    id: 7,
    part: 'B',
    text: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
    positiveThreshold: 3,
    domain: 'inattentive',
  },
  {
    id: 8,
    part: 'B',
    text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
    positiveThreshold: 3,
    domain: 'inattentive',
  },
  {
    id: 9,
    part: 'B',
    text: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
    positiveThreshold: 3,
    domain: 'inattentive',
  },
  {
    id: 10,
    part: 'B',
    text: 'How often do you misplace or have difficulty finding things at home or at work?',
    positiveThreshold: 3,
    domain: 'inattentive',
  },
  {
    id: 11,
    part: 'B',
    text: 'How often are you distracted by activity or noise around you?',
    positiveThreshold: 3,
    domain: 'inattentive',
  },
  // Part B — Q12–Q18: hyperactive-impulsive, threshold 2 (Sometimes)
  {
    id: 12,
    part: 'B',
    text: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    positiveThreshold: 2,
    domain: 'hyperactive-impulsive',
  },
  {
    id: 13,
    part: 'B',
    text: 'How often do you feel restless or fidgety?',
    positiveThreshold: 2,
    domain: 'hyperactive-impulsive',
  },
  {
    id: 14,
    part: 'B',
    text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
    positiveThreshold: 2,
    domain: 'hyperactive-impulsive',
  },
  {
    id: 15,
    part: 'B',
    text: 'How often do you find yourself talking too much when you are in social situations?',
    positiveThreshold: 2,
    domain: 'hyperactive-impulsive',
  },
  {
    id: 16,
    part: 'B',
    text: "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
    positiveThreshold: 2,
    domain: 'hyperactive-impulsive',
  },
  {
    id: 17,
    part: 'B',
    text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
    positiveThreshold: 2,
    domain: 'hyperactive-impulsive',
  },
  {
    id: 18,
    part: 'B',
    text: 'How often do you interrupt others when they are busy?',
    positiveThreshold: 2,
    domain: 'hyperactive-impulsive',
  },
]
