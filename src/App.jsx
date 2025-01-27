import React from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiShield,
  FiList,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";

const App = () => {
  function downloadExtension() {
    // Url of the extension
    const downloadUrl =
      "https://www.dropbox.com/scl/fi/tkfiwkd3yami1l10ufsfl/parent-guard.zip?rlkey=w2gr3m1d27ipay6osc55dll0r&st=bf6wif3l&dl=1";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "extension.zip"; // Name the downloaded file

    // Append to document, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="font-inter text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="flex items-center justify-between px-4 lg:px-20 py-4">
          <div className="text-2xl font-bold text-blue-600">ParentGuard</div>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:-translate-y-1"
            onClick={downloadExtension}
          >
            Download Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] pt-20 flex items-center px-4 lg:px-20 bg-gradient-to-r from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Take Control of <br />
            Your <span className="bg-blue-200">Kids</span>
          </h1>
          <p className="text-xl leading-relaxed  text-gray-600 max-w-2xl">
            Manage their screen time, filter inappropriate content, and monitor
            their online activity—all from one easy-to-use platform. Stay
            informed and in control, so you can ensure they have a safe,
            balanced online experience.
          </p>
          <button
            onClick={downloadExtension}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 cursor-pointer py-4 rounded-lg text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Download Extension
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block flex-1"
        >
          <img
            src="/hero.png"
            alt="Parent and child safely browsing together"
            className="w-full rounded-2xl object-contain max-h-[600px]"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features for Peace of Mind
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FiClock />,
              title: "Screen Time Scheduling",
              description: "Set daily limits and create custom schedules",
            },
            {
              icon: <FiList />,
              title: "Custom Filtering",
              description: "Create allow and block lists for complete control",
            },
            {
              icon: <FiBarChart2 />,
              title: "Detailed Analytics",
              description: "Monitor browsing activity and view statistics",
            },
            {
              icon: <FiUsers />,
              title: "Multiple Accounts",
              description: "Manage different profiles for each child",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          See It In Action
        </h2>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <video autoPlay loop muted className="w-full">
            <source src="/socialproof.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Easy Installation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: 1,
              title: "Download Extension",
              description:
                "Click the download button to get the extension package",
            },
            {
              step: 2,
              title: "Open Chrome Extensions",
              description: "Go to chrome://extensions/ in your browser",
            },
            {
              step: 3,
              title: "Enable Developer Mode",
              description: 'Toggle "Developer mode" in the top right',
            },
            {
              step: 4,
              title: "Load Extension",
              description:
                'Click "Load unpacked" and select the downloaded folder',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-50">
        <p className="text-gray-600">
          © 2024 ParentGuard. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
