import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">

      {/* Header */}
      <header className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-700 font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-semibold tracking-wide">ADHD Screener</span>
        </div>
        <button
          onClick={() => navigate('/screener')}
          className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition"
        >
          Start Screening
        </button>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Understand Your Attention Health
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          A quick, confidential screening tool to help identify potential signs of
          Attention-Deficit/Hyperactivity Disorder (ADHD) in adults and adolescents.
        </p>
        <button
          onClick={() => navigate('/screener')}
          className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-50 transition"
        >
          Begin Screener &rarr;
        </button>
        <p className="mt-4 text-blue-200 text-sm">Takes approximately 5&ndash;10 minutes &bull; Free &bull; Anonymous</p>
      </section>

      {/* What is ADHD */}
      <section className="px-6 py-16 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">What is ADHD?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Attention-Deficit/Hyperactivity Disorder (ADHD) is one of the most common
          neurodevelopmental conditions, affecting both children and adults. It is
          characterized by patterns of inattention, hyperactivity, and impulsivity
          that interfere with daily functioning and development.
        </p>
        <p className="text-gray-600 leading-relaxed">
          ADHD often goes undiagnosed, especially in adults. Early identification can
          lead to effective strategies, support, and treatment that significantly
          improve quality of life.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100 max-w-4xl mx-auto w-full px-6" />

      {/* How It Works */}
      <section className="px-6 py-16 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Step number={1} title="Answer Questions" description="Respond to a series of short questions about your attention, behavior, and daily experiences." />
          <Step number={2} title="Review Your Results" description="Receive an instant summary of your responses along with a preliminary screening score." />
          <Step number={3} title="Take Next Steps" description="Understand what your results may mean and how to discuss them with a healthcare professional." />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-yellow-50 border-t border-yellow-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-800 text-sm leading-relaxed">
            <span className="font-semibold">Important Disclaimer:</span> This screener
            is not a diagnostic tool and is not a substitute for a professional
            evaluation. Results are for informational purposes only. If you have
            concerns about ADHD, please consult a qualified healthcare provider.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 px-6 py-6 text-center text-sm mt-auto">
        <p>&copy; {new Date().getFullYear()} ADHD Screener &mdash; For informational use only.</p>
        {/* TODO: remove before launch */}
        <button
          onClick={() => navigate('/provider/psyched')}
          className="mt-3 text-xs text-gray-500 underline hover:text-gray-300 transition"
        >
          [dev] Provider Page
        </button>
      </footer>
    </div>
  )
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center shrink-0">
        {number}
      </div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
