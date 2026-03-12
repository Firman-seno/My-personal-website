import photo from "../assets/My-Pict.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img src={photo} alt="English Teacher" className="rounded-lg  hover:border-teal-600 hover:shadow-xl transition-all duration-300" />
                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hello! I'm a passionate English teacher specializing in speaking and communication skills. My mission is to help students overcome their fear of speaking English and become confident communicators in real-world situations.
                </p>
                <p>
                  With over 5 years of experience teaching English to students of all levels, I've developed a unique approach that focuses on practical conversation skills, pronunciation, and building the confidence needed to speak
                  fluently.
                </p>
                <p>I believe that speaking a language shouldn't be stressful. My teaching philosophy centers on creating a supportive, encouraging environment where mistakes are seen as learning opportunities, not failures.</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-xl">
                  <p className="text-3xl font-bold text-teal-600">500+</p>
                  <p className="text-gray-600">Students Taught</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-xl">
                  <p className="text-3xl font-bold text-teal-600">2000+</p>
                  <p className="text-gray-600">Lessons Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
