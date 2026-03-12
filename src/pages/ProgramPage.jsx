import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const programs = [
  {
    title: "English Speaking for Beginners",
    description: "Perfect for those just starting their English journey. Learn basic vocabulary, pronunciation, and simple conversations.",
    features: ["Basic vocabulary", "Pronunciation practice", "Simple dialogues", "Confidence building"],
    level: "Beginner",
  },
  {
    title: "Intermediate Speaking",
    description: "Take your speaking to the next level with more complex topics, idioms, and natural expressions.",
    features: ["Complex grammar", "Idioms & phrases", "Discussion skills", "Storytelling"],
    level: "Intermediate",
  },
  {
    title: "English for Daily Conversation",
    description: "Master everyday conversations used in real-life situations—from shopping to making friends.",
    features: ["Daily scenarios", "Social English", "Phone conversations", "Practical vocabulary"],
    level: "All Levels",
  },
  {
    title: "English for Work & Business",
    description: "Professional English for meetings, presentations, emails, and workplace communication.",
    features: ["Business vocabulary", "Presentation skills", "Meeting English", "Email writing"],
    level: "Professional",
  },
];

export default function ProgramPage() {
  return (
    <>
      <Navbar />
      <section id="programs" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the program that fits your needs and start your journey to fluent English</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-700">{program.level}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200">
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
