import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const experiences = [
  {
    year: "2022 - Present",
    title: "English Teacher ",
    company: "at IDN Boarding School Jonggol",
    description:
      "Teaching English at IDN Boarding School Jonggol, focusing on developing students' speaking and communication skills. Conducting interactive classroom activities, conversation practice, and confidence-building exercises to help students use English effectively in real-life situations.",
  },
  {
    year: "2020 - 2021",
    title: "Founder & English Teacher",
    company: "Jatisari English Club",
    description:
      "Founder of EasySpeak English Course and English teacher specializing in speaking and communication skills. Designing and delivering interactive lessons that help students improve fluency, build confidence, and communicate effectively in real-life situations.",
  },
  {
    year: "2018 - 2019",
    title: "English Teacher ",
    company: "at SDIT Nurul Qolbi & SDIT Attaqwa Bekasi",
    description:
      "Taught English to elementary school students at SDIT Nurul Qolbi and SDIT Attaqwa Bekasi. Designed engaging classroom activities to help students learn basic English vocabulary, speaking, and communication skills in a fun and interactive learning environment.",
  },
  {
    year: "2018 - Present",
    title: "Teaching Private",
    company: "Online class",
    description:
      "Providing private English lessons through online classes, focusing on speaking, pronunciation, and real-life conversation practice. Helping students improve fluency, build confidence, and communicate more effectively in English.",
  },
];

export default function ExperiencePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section id="experience" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Teaching Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Over 8 years of experience helping students worldwide achieve their English speaking goals</p>
          </div>

          <div className="space-y-6 mb-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-teal-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-teal-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">{exp.year}</span>
                </div>
                <p className="text-gray-600 mt-3">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => navigate("/activity")} className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/25">
              View All Activities
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
