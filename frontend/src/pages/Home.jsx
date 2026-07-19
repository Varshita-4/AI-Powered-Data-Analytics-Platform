import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import {
  Database,
  BarChart3,
  Bot,
  MessageCircle,
} from "lucide-react";

function Home() {
  const features = [
    {
      title: "Automated Data Cleaning",
      icon: <Database size={32} className="text-cyan-400" />,
    },
    {
      title: "EDA & Interactive Charts",
      icon: <BarChart3 size={32} className="text-cyan-400" />,
    },
    {
      title: "Gemini AI Reports",
      icon: <Bot size={32} className="text-cyan-400" />,
    },
    {
      title: "Chat With Dataset",
      icon: <MessageCircle size={32} className="text-cyan-400" />,
    },
  ];

  const steps = [
    {
      title: "Upload CSV",
      desc: "Upload any CSV dataset in seconds.",
    },
    {
      title: "Analyze Data",
      desc: "Automatically clean data and perform EDA.",
    },
    {
      title: "Generate Report",
      desc: "Receive AI-powered insights and reports.",
    },
    {
      title: "Chat with Data",
      desc: "Ask questions and explore your dataset.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0891b255,transparent_35%),radial-gradient(circle_at_bottom_left,#22d3ee33,transparent_35%)]" />

      <main className="relative z-10 px-6 py-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">
              AI-Powered Data Analyst
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Turn messy CSV data into{" "}
              <span className="text-cyan-400">
                insights, charts, and AI reports.
              </span>
            </h1>

            <p className="text-slate-300 text-lg mt-6 max-w-2xl">
              InsightFlow AI automatically cleans datasets, performs exploratory
              data analysis, creates visualizations, generates professional AI
              reports, and lets you chat with your data.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-cyan-500 text-slate-950 rounded-2xl font-bold hover:bg-cyan-400 transition"
              >
                Get Started
              </Link>

              <Link
                to="/reports"
                className="px-8 py-4 border border-slate-700 bg-slate-900 rounded-2xl font-bold hover:bg-slate-800 transition"
              >
                View Reports
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="InsightFlow AI"
              className="w-72 md:w-[360px] lg:w-[420px] drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Features */}
        <section className="max-w-7xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-7xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>

                <h3 className="font-bold text-xl mb-3">{step.title}</h3>

                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto mt-24 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© 2026 InsightFlow AI • AI-Powered Data Analytics Platform</p>
        </footer>
      </main>
    </div>
  );
}

export default Home;