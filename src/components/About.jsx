import React from "react";
import abc from "./abc.jpeg";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="font-bold text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm NARMATHA K
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embracing the world of coding and web development with enthusiasm
            and dedication
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src={abc}
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-5xl font-semibold text-gray-800 mb-6 text-center">
            Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              "As a beginner,I'm embarking on a journey in web development and
              coding,eager to learn and grow.I'm Currently focused on
              understanding the fundamentals of programming languages,including
              HTML,css,javascript,Python.I'm passionate about creating solutions
              that are functional,efficient,and scalable.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Learing to creat beautiful and user-friendly interfaces using
              HTML,CSS,and Javascript
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Exploring the world of server-side programming using languages
              like python,and database management using SQL and mongodb
              database.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-lg text-gray-600">
              Designing intuitive and engaging user experiences with a focus on
              accessibility and performance
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              Python full-stack development
            </h3>
            <p className="text-lg text-gray-600">
              "Currently exploring Python-full-stack-development,with focus on
              python,Django back-end technologies,and database like mongodb"
            </p>
          </div>
        </div>

        {/* Personal Interests */}

        <div className="bg-white p-8 rounded-xl shadow-lg mb-16 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          {/* Skills Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-green-600 font-semibold">
                Cultural Enthusiast
              </h3>
              <p className="text-lg text-gray-600">
                Passionate about dance and exploring various cultural expression
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-blue-600 font-semibold">
                Effective Communicator
              </h3>
              <p className="text-lg text-gray-600">
                Skilled in communication,with the ability to convey complex
                ideas simply,and building strong communication networks.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-blue-600 font-semibold">
                Multilingual
              </h3>
              <p className="text-lg text-gray-600">
                Knowledgeable in multiple languages,including
                English,Hindi,Malayalam,Tamil,Kannada, and Telugu,enabling
                effective communication across diverse cultural backgrounds.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-green-600 font-semibold">
                Creative Pursuits
              </h3>
              <p className="text-lg text-gray-600">
                Enjoys crafts,creative activities,and reading in free time.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-700 via-blue-700 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
