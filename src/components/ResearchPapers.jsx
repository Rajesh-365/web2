import React from 'react';
import { User, Calendar } from 'lucide-react';

const ResearchPapers = () => {
  const submittedPapers = [
    {
      title: 'Life of Christ',
      author: 'Ananiah',
      status: 'Completed',
      series: [
        'Birth and Early Life',
        'Ministry Begins',
        'Teachings and Miracles',
        'Opposition and Conflict',
        'Final Week in Jerusalem',
        'Crucifixion',
        'Resurrection',
        'Appearances',
        'Ascension'
      ]
    }
  ];

  const ongoingPapers = [
    {
      title: 'Bible Numerics',
      author: 'Ananiah',
      status: 'Ongoing'
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Research Papers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our submitted and ongoing theological research.
          </p>
          <p className="text-md text-blue-700 dark:text-blue-300 font-semibold mt-4">
            Degrees/Hon.Degrees awarded through Research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Submitted Papers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Submitted Papers</h3>
            {submittedPapers.map((paper, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">{paper.title}</h4>
                <p className="text-gray-600 dark:text-gray-300"><User className="inline w-4 h-4 mr-1" /> {paper.author}</p>
                <p className="text-green-600 dark:text-green-400 font-semibold">Status: {paper.status}</p>
                <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {paper.series.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ongoing Papers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Ongoing Papers</h3>
            {ongoingPapers.map((paper, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">{paper.title}</h4>
                <p className="text-gray-600 dark:text-gray-300"><User className="inline w-4 h-4 mr-1" /> {paper.author}</p>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold">Status: {paper.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPapers;
