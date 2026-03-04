import { useNavigate } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const TEAL = '#1895A9'
const PINK = '#FFC0CB'

// All logos from Wikimedia Commons (public domain / free license)
const NETWORK_LOGOS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/54/American_Broadcasting_Company_Logo.svg', alt: 'ABC', h: 40 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/CBS_logo.svg', alt: 'CBS', h: 30 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/ESPN2_logo.svg', alt: 'ESPN2', h: 28 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Fox_Broadcasting_Company_logo_(2019).svg', alt: 'FOX', h: 38 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/NBC_logo.svg', alt: 'NBC', h: 48 },
]

export default function ProviderPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'system-ui, sans-serif' }}>

      {/* Small ADHD Screener back bar */}
      <div className="bg-blue-700 text-white text-xs px-4 py-2 flex justify-between items-center">
        <span>ADHD Screener — Provider Directory</span>
        <button onClick={() => navigate('/')} className="underline hover:text-blue-200 transition">
          &larr; Back to Screener
        </button>
      </div>

      {/* Psyched Nav */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 400, letterSpacing: '0.15em' }}>
          PSYCHED
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {['Get Started Here', 'Insurances Accepted', 'Meet the Team'].map((label) => (
            <span
              key={label}
              className="text-gray-800"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', letterSpacing: '0.05em' }}
            >
              {label}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero — CSS psychedelic animated gradient */}
      <section
        className="relative text-white py-28 px-6 text-center overflow-hidden"
        style={{ minHeight: '420px' }}
      >
        <div className="absolute inset-0 psychedelic-bg" style={{ zIndex: 0 }} />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.35)', zIndex: 1 }} />
        <div className="relative" style={{ zIndex: 2 }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(64px, 10vw, 100px)',
              lineHeight: 1.1,
              letterSpacing: '0.08em',
              fontWeight: 300,
            }}
          >
            PSYCHED
          </h1>
          <p className="mt-4 text-white/80" style={{ fontSize: '20px', lineHeight: '1.67' }}>
            Feel Good = Live Good
          </p>
        </div>
      </section>

      {/* Featured On */}
      <section className="bg-white py-12 px-6 text-center border-b border-gray-100">
        <p
          className="text-gray-800 font-semibold mb-1"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', letterSpacing: '0.05em' }}
        >
          Our Psyched CEO has been featured on
        </p>
        <hr className="border-gray-300 max-w-xs mx-auto my-4" />
        <div className="flex flex-wrap justify-center items-center gap-10 mt-4">
          {NETWORK_LOGOS.map(({ src, alt, h }) => (
            <img key={alt} src={src} alt={alt} style={{ height: h, objectFit: 'contain' }} />
          ))}
        </div>
      </section>

      {/* Why Psyched */}
      <section className="bg-white py-20 px-6 text-center">
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '56px', fontWeight: 400 }}
        >
          Why Psyched
        </h2>
        <p className="mt-4 text-center" style={{ color: TEAL, fontSize: '18px' }}>
          <span className="font-semibold">psyched</span>
        </p>
        <p className="text-gray-600 text-sm mt-1 mb-12">
          /sīkt/ adjective — meaning excited, especially about something that is going to happen
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-0 border border-gray-200">
          <ServiceTile
            title="Pharmacotherapy Management"
            body="Since becoming a state licensed Mental Health Professional in 2005, our Psyched Practitioner has provided patients a wide range of psychological therapy and counseling services to suit their needs. In 2014, our Psyched Provider has also been delivering high-quality, personalized medical care to Ohio residents, offering a wide array of prescriptive services."
            sub="If you are an individual looking for services that are designed to strengthen your confidence, and reignite your motivation. Take a look at the services offered, and schedule your initial consultation."
          />
          <ServiceTile
            title="Functional Medicine"
            body="Your well-being is Psyched's ultimate concern. Using a systems biology–based approach (directly addressing modulators of gene expression, your environment, and other underlying causes of disease through a systems-oriented approach), our Psyched Provider focuses on identifying and addressing the root cause of disease. Meet with Psyched today and dive deep into your symptoms or differential diagnoses to identify what is contributing to your individual illness."
          />
          <ServiceTile
            title="Other"
            body="As a recognized and seasoned Speaker, Psyched is available for many different types of engagements including education, personal and executive consultation and or coaching, leadership development, motivational speaking, and more."
          />
        </div>
      </section>

      {/* Supplement Shop */}
      <section className="bg-white py-20 px-6 text-center border-t border-gray-100">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '63px', fontWeight: 400, color: TEAL }}>
          Supplement Shop
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-700" style={{ fontSize: '16px', lineHeight: '1.8' }}>
          Industry-leading clinically effective supplements and wellness products shipped right to your door.
        </p>
        <div className="mt-8">
          <TealButton href="https://us.fullscript.com/welcome/psyched" label="Nutriceutical Pharmacy" />
        </div>
      </section>

      {/* Testing and Comprehensive Lab */}
      <section className="bg-white py-20 px-6 text-center border-t border-gray-100">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '63px', fontWeight: 400, color: TEAL }}>
          Testing and Comprehensive Lab
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-700" style={{ fontSize: '16px', lineHeight: '1.8' }}>
          Healthcare's best Lab Tests that can be shipped right to your door.
        </p>
        <div className="mt-8">
          <TealButton href="https://labs.rupahealth.com/store/storefront_Vn91Egn" label="Direct Lab Access" />
        </div>
      </section>

      {/* The Psyched Approach */}
      <section className="grid md:grid-cols-2">
        {/* Left: pure CSS dark gradient panel */}
        <div className="min-h-96 psychedelic-dark-bg" />
        {/* Right: pink text on black */}
        <div className="bg-black px-10 py-16 flex flex-col justify-center">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '40px',
              fontWeight: 400,
              lineHeight: 1.35,
              color: PINK,
              textAlign: 'center',
              letterSpacing: '0.05em',
            }}
          >
            THE PSYCHED APPROACH
          </h2>
          <div className="mt-6 space-y-5 text-justify" style={{ color: PINK, fontSize: '15px', lineHeight: '1.875' }}>
            <p>
              Let Psyched assist you in feeling like the best version of yourself. What sets us apart is how we
              focus on conscious (inner) beauty, strength, self-care, and overall wellness.
            </p>
            <p>
              Meeting Psyched is knowing that you're in good hands. Using skill and knowledge, we offer some of
              the most comprehensive and clear-cut treatments modalities in the midwest. Our Board-Certified Psyched
              Provider has over 20 years of combined experience in areas from the Emergency Department and Inpatient
              Units, to Outpatient not-for-profit and Private Practice settings, along with general social setting
              such as working with academic and legal institutions.
            </p>
            <p>
              Reach out to the office today to discuss your specific situation in full confidence or to plan your
              next visit.
            </p>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '56px', fontWeight: 400 }}
          >
            Directions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 500 }}>
                Business Address
              </h3>
              <div className="mt-2 text-gray-700 space-y-1" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <p>5202 Bethel-Reed Pk #100, Columbus, OH 43220-1818, USA</p>
                <p className="text-xs text-gray-500 mt-2">Billing/Remittance Purposes only:</p>
                <p className="text-xs text-gray-600">1391 W 5th Ave, Ste 307<br />Columbus, OH 43212-2902</p>
              </div>

              <h3 className="mt-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 500 }}>
                Contact
              </h3>
              <div className="mt-2 text-gray-700 space-y-1" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <p>Non-Emergency Only</p>
                <p>Phone: 614-859-5010</p>
                <p>Fax: 614-587-8882</p>
                <p>
                  Email:{' '}
                  <a href="mailto:sciotobussys@gmail.com" className="underline hover:text-black">
                    sciotobussys@gmail.com
                  </a>
                </p>
              </div>

              <h3 className="mt-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 500 }}>
                Hours of Operation
              </h3>
              <table className="mt-2 text-gray-700 w-full" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <tbody>
                  <tr>
                    <td className="pr-4 align-top font-medium whitespace-nowrap">Weekdays</td>
                    <td>Alternate depending on the time of the year during typical business hours. Closed all major holidays.</td>
                  </tr>
                  <tr>
                    <td className="pr-4 font-medium whitespace-nowrap">Saturday</td>
                    <td>Concierge appointments only</td>
                  </tr>
                  <tr>
                    <td className="pr-4 font-medium whitespace-nowrap">Sunday</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 500 }}>
                Getting Here
              </h3>
              <div className="mt-4 text-gray-700 space-y-4" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <p>The practice is located in Northwest Columbus.</p>
                <p>
                  <span className="font-semibold">Public Transit:</span> Roughly a 20-minute COTA ride from OSU's
                  main campus (students ride free with BUCKID; take bus #1, exit at Bethel &amp; Reed).
                </p>
                <p>
                  <span className="font-semibold">Driving:</span> From OH-315, take exit 8 and go west on Bethel
                  Reed for 2.2 miles. Turn left onto Bethel Reed Park.
                </p>
                <p>There is a plentiful parking lot around the building.</p>
                <p>Suite 100 is on the first floor — first door on your left.</p>
                <p>
                  Come on in and have a seat in our designated waiting room. Take advantage of our complimentary
                  beverage station. No need to check in — your provider will escort you to their suite at your
                  appointment time.
                </p>
              </div>

              <div className="mt-8 rounded overflow-hidden border border-gray-200">
                <iframe
                  title="Psyched location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.7!2d-83.0806!3d40.0612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388d9a1e2d1b0f%3A0x1234!2s5202+Bethel-Reed+Pk+%23100%2C+Columbus%2C+OH+43220!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 px-6 text-center">
        <a
          href="mailto:sciotobussys@gmail.com"
          className="inline-block text-white font-semibold px-10 py-3 text-lg"
          style={{ backgroundColor: TEAL, borderRadius: '2px', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}
        >
          Let's Connect Now ›
        </a>

        <div className="flex justify-center gap-6 mt-8 text-gray-400">
          <Instagram size={22} />
          <Facebook size={22} />
          <Youtube size={22} />
        </div>

        <p className="mt-6 text-gray-400 text-xs">
          &copy; 2020 by Psyched. All Rights Reserved 2021&copy;
        </p>
      </footer>
    </div>
  )
}

function ServiceTile({ title, body, sub }: { title: string; body: string; sub?: string }) {
  return (
    <div className="border border-gray-200 p-8 text-center flex flex-col items-center">
      <h3 style={{ color: TEAL, fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 500, marginBottom: '12px' }}>
        {title}
      </h3>
      <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.5' }}>{body}</p>
      {sub && <p className="text-gray-500 mt-3" style={{ fontSize: '14px', lineHeight: '1.5' }}>{sub}</p>}
    </div>
  )
}

function TealButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-white px-8 py-3"
      style={{ backgroundColor: TEAL, fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', letterSpacing: '0.05em', borderRadius: '2px' }}
    >
      {label} ›
    </a>
  )
}
