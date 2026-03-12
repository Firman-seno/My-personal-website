import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const testimonials = [
  {
    name: "Fani",
    role: "student",
    country: "Bogor",
    image: <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">FN</div>,
    text: "The lessons are very helpful because the information provided is accurate and well explained. He is also a very patient teacher who takes the time to guide students step by step, making learning English more comfortable and effective.",
  },
  {
    name: "Murni",
    role: "student parent",
    country: "Bogor",
    image: <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">MN</div>,
    text: "Mr. Firman is a dedicated teacher who shows great patience in guiding his students. His teaching ability and clear explanations make it easier for students to understand the lessons and improve their English skills.",
  },
  {
    name: "Rini",
    role: "student parent",
    country: "Bogor",
    image: <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">RN</div>,
    text: "Mr. Firman teaches with clear and detailed explanations. His teaching style is simple and easy for children to understand, which helps them feel more confident and comfortable when learning English.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real feedback from students who transformed their English speaking skills</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {testimonial.image}

                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name} <span className="text-gray-400 text-sm">({testimonial.role})</span>
                    </p>

                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </div>

                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
