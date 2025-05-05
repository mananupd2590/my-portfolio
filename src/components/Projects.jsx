import React from 'react';

const projects = [
  {
    title: 'Finance101 Dashboard',
    description: 'An interactive Streamlit dashboard for stock forecasting and financial analysis using ARIMA, LSTM, and XGBoost.',
    link: 'https://github.com/mananupd2590/finance101-dashboard'
  },
  {
    title: 'Calorie Calculator Web App',
    description: 'A sleek dark-themed web app built with React and Tailwind to calculate calories and macros based on user goals.',
    link: 'https://github.com/mananupd2590/calorie-calculator'
  }
];

const Projects = () => (
  <section className="bg-white dark:bg-gray-800 py-10 px-5">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <a href={proj.link} key={idx} className="border border-gray-300 dark:border-gray-600 p-5 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm">{proj.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;