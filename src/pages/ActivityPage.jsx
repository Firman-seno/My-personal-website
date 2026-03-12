import { useNavigate } from "react-router-dom";
// IDN BS Jonggol
import idnImg1 from "../assets/idn/kelas_8C_24/idn1.jpg";
import idnImg2 from "../assets/idn/kelas_8C_24/idn2.jpg";
import idnImg3 from "../assets/idn/kelas_8C_24/idn3.jpg";
import idnImg4 from "../assets/idn/kelas_8C_22/idn1.jpg";
import idnImg5 from "../assets/idn/kelas_8C_22/idn2.jpg";
import idnImg6 from "../assets/idn/kelas_8C_22/idn3.jpg";
import idnImg7 from "../assets/idn/kelas_8A_25/idn1.jpeg";
import idnImg8 from "../assets/idn/kelas_8A_25/idn2.jpeg";
import idnImg9 from "../assets/idn/kelas_8A_25/idn3.jpeg";

// JEC
import jecImg1 from "../assets/jec/jec1.jpg";
import jecImg2 from "../assets/jec/jec2.jpg";
import jecImg3 from "../assets/jec/jec3.jpg";
import jecImg4 from "../assets/jec/jec4.jpg";
import jecImg5 from "../assets/jec/jec5.jpg";
import jecImg6 from "../assets/jec/jec6.jpg";

/*  SDIT Nurul Qolbi & SDIT Attaqwa Bekasi */
import sditImg1 from "../assets/sdit-attaqwa-bekasi/img1.jpg";
import sditImg2 from "../assets/sdit-attaqwa-bekasi/img2.jpg";
import sditImg3 from "../assets/sdit-attaqwa-bekasi/img3.jpg";
import sditImg4 from "../assets/sdit-attaqwa-bekasi/img4.jpg";
import sditImg5 from "../assets/sdit-attaqwa-bekasi/img5.jpg";
import sditImg6 from "../assets/sdit-attaqwa-bekasi/img6.jpg";

// PRIVATE ONLINE
import onlineImg1 from "../assets/online-class/img1.jpg";
import onlineImg2 from "../assets/online-class/img2.jpg";
import onlineImg3 from "../assets/online-class/img3.jpg";
import onlineImg4 from "../assets/online-class/img4.jpg";
import onlineImg5 from "../assets/online-class/img5.jpg";
import onlineImg6 from "../assets/online-class/img6.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// IDN BS Jonggol
const idnBS = [
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: idnImg1,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: idnImg2,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: idnImg3,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2022 - 2023",
    type: "class",
    image: idnImg4,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2022 - 2023",
    type: "class",
    image: idnImg5,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2022 - 2023",
    type: "class",
    image: idnImg6,
  },
  {
    title: "Class 8A Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2025 - 2026",
    type: "class",
    image: idnImg7,
  },
  {
    title: "Class 8A Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2025 - 2026",
    type: "class",
    image: idnImg8,
  },
  {
    title: "Class 8A Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2025 - 2026",
    type: "class",
    image: idnImg9,
  },
];

// Jatisari English Club
const jecActivity = [
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: jecImg1,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: jecImg2,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: jecImg3,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: jecImg4,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: jecImg5,
  },
  {
    title: "Class 8C Homeroom & English Teacher",
    description: "Serving as their homeroom teacher and English subject teacher, supporting their academic development while guiding them in learning and improving their English skills.",
    date: "July 2024 - 2025",
    type: "class",
    image: jecImg6,
  },
];
{
  /*  SDIT Nurul Qolbi & SDIT Attaqwa Bekasi */
}
const sditActivity = [
  {
    title: "SDIT ATTAQWA BEKASI",
    description: "Teaching English to elementary school students, helping them build foundational vocabulary, basic grammar understanding, and confidence in using simple English expressions.",
    date: "July 2018 - 2019",
    type: "class",
    image: sditImg1,
  },
  {
    title: "SDIT ATTAQWA BEKASI",
    description: "Teaching English to elementary school students, helping them build foundational vocabulary, basic grammar understanding, and confidence in using simple English expressions.",
    date: "July 2018 - 2019",
    type: "class",
    image: sditImg2,
  },
  {
    title: "SDIT ATTAQWA BEKASI",
    description: "Teaching English to elementary school students, helping them build foundational vocabulary, basic grammar understanding, and confidence in using simple English expressions.",
    date: "July 2018 - 2019",
    type: "class",
    image: sditImg3,
  },
  {
    title: "SDIT NURUL QOLBI BEKASI",
    description: "Teaching English to elementary school students, helping them build foundational vocabulary, basic grammar understanding, and confidence in using simple English expressions.",
    date: "July 2018 - 2019",
    type: "class",
    image: sditImg4,
  },
  {
    title: "SDIT NURUL QOLBI BEKASI",
    description: "Teaching English to elementary school students, helping them build foundational vocabulary, basic grammar understanding, and confidence in using simple English expressions.",
    date: "July 2018 - 2019",
    type: "class",
    image: sditImg5,
  },
  {
    title: "SDIT NURUL QOLBI BEKASI",
    description: "Teaching English to elementary school students, helping them build foundational vocabulary, basic grammar understanding, and confidence in using simple English expressions.",
    date: "July 2018 - 2019",
    type: "class",
    image: sditImg6,
  },
];

// Online-class
const onlineClass = [
  {
    title: "Online Via Google Meet",
    description: "Conducting online English lessons through Zoom, helping students improve their speaking, vocabulary, and confidence in using English in daily conversations.",
    date: "July 2023 - present",
    type: "class",
    image: onlineImg1,
  },
  {
    title: "Online Via Google Meet",
    description: "Conducting online English lessons through Zoom, helping students improve their speaking, vocabulary, and confidence in using English in daily conversations.",
    date: "July 2023 - present",
    type: "class",
    image: onlineImg2,
  },
  {
    title: "Online Via Google Meet",
    description: "Conducting online English lessons through Zoom, helping students improve their speaking, vocabulary, and confidence in using English in daily conversations.",
    date: "July 2023 - present",
    type: "class",
    image: onlineImg3,
  },
  {
    title: "Online Via Google Meet",
    description: "Conducting online English lessons through Zoom, helping students improve their speaking, vocabulary, and confidence in using English in daily conversations.",
    date: "July 2023 - present",
    type: "class",
    image: onlineImg4,
  },
  {
    title: "Online Via Google Meet",
    description: "Conducting online English lessons through Zoom, helping students improve their speaking, vocabulary, and confidence in using English in daily conversations.",
    date: "July 2023 - present",
    type: "class",
    image: onlineImg5,
  },
  {
    title: "Online Via Google Meet",
    description: "Conducting online English lessons through Zoom, helping students improve their speaking, vocabulary, and confidence in using English in daily conversations.",
    date: "July 2023 - present",
    type: "class",
    image: onlineImg6,
  },
];
const achievements = [
  {
    title: "500+ Students Taught",
    description: "Successfully helped over 500 students improve their English speaking skills",
    icon: "🎓",
  },
  {
    title: "98% Satisfaction Rate",
    description: "Students rate their learning experience with near-perfect scores",
    icon: "⭐",
  },
  {
    title: "50+ Countries",
    description: "Students from 50+ countries worldwide have taken my courses",
    icon: "🌍",
  },
  {
    title: "3000+ Lessons",
    description: "Over 3000 hours of English teaching completed",
    icon: "📚",
  },
];

export default function ActivityPage() {
  const navigate = useNavigate();

  return (
    <>
      <section id="activity" className="pt-24 pb-16 md:pt-32 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => navigate("/")} className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documentation of My Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A collection of moments from my teaching journey, showcasing classroom activities, student engagement, and meaningful learning experiences.</p>
          </div>

          {/* IDN BS Jonggol */}
          <div className="bg-teal-600 rounded-md mb-4">
            <h1 className="text-white p-4 text-xl font-bold text-center">- English Teacher at IDN Boarding School Jonggol -</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {idnBS.map((idnBS, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={idnBS.image} alt={idnBS.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-teal-700 capitalize">{idnBS.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-teal-600 font-medium mb-1">{idnBS.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{idnBS.title}</h3>
                  <p className="text-gray-600 text-sm">{idnBS.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/*  Jatisari English Club */}
          <div className="bg-teal-600 rounded-md mb-4">
            <h1 className="text-white p-4 text-xl font-bold text-center">- English Teacher at Jatisari English Course -</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jecActivity.map((jecActivity, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={jecActivity.image} alt={jecActivity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-teal-700 capitalize">{jecActivity.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-teal-600 font-medium mb-1">{jecActivity.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{jecActivity.title}</h3>
                  <p className="text-gray-600 text-sm">{jecActivity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/*  SDIT Nurul Qolbi & SDIT Attaqwa Bekasi */}
          <div className="bg-teal-600 rounded-md mb-4">
            <h1 className="text-white p-4 text-xl font-bold text-center">- SDIT Nurul Qolbi & SDIT Attaqwa Bekasi -</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sditActivity.map((sditActivity, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={sditActivity.image} alt={sditActivity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-teal-700 capitalize">{sditActivity.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-teal-600 font-medium mb-1">{sditActivity.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{sditActivity.title}</h3>
                  <p className="text-gray-600 text-sm">{sditActivity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/*  Private Online */}
          <div className="bg-teal-600 rounded-md mb-4">
            <h1 className="text-white p-4 text-xl font-bold text-center">- SDIT Nurul Qolbi & SDIT Attaqwa Bekasi -</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {onlineClass.map((onlineClass, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={onlineClass.image} alt={onlineClass.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-teal-700 capitalize">{onlineClass.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-teal-600 font-medium mb-1">{onlineClass.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{onlineClass.title}</h3>
                  <p className="text-gray-600 text-sm">{onlineClass.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Teaching Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
