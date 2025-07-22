import React, { useState } from 'react';
import { Trophy, Search } from 'lucide-react';

const Results = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all');

  const results = [
    {
      id: 1,
      studentId: 'EC008',
      name: 'Nagavaraou.Ruthu',
      course: 'B.C.Th',
      semester: 'Semester 1',
      year: '2024-2025',
      grade: 'O',
      percentage: 94,
      status: 'Distinction',
    },
    {
      id: 2,
      studentId: 'EC027',
      name: 'Turakha Tirupathi Raidu',
      course: 'B.C.Th',
      semester: 'Semester 1',
      year: '2024-2025',
      grade: 'O',
      percentage: 94,
      status: 'Distinction',
    },
  ];

  const topPerformers = results.map((r, index) => ({
    name: r.name,
    course: r.course,
    percentage: r.percentage,
    rank: index + 1
  }));

  return (
    <section id="results" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Results</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Top students based on performance</p>
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Filter by Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Semesters</option>
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
                <option value="Semester 3">Semester 3</option>
              </select>
            </div>
          </div>

          {/* Top Performers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topPerformers.map((performer, index) => (
              <div key={index} className="p-6 bg-yellow-50 rounded-lg border border-yellow-100 shadow hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-yellow-400 text-white px-3 py-1 rounded-full font-semibold">Rank {performer.rank}</span>
                  <span className="text-xs text-gray-500">{performer.percentage}%</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800">{performer.name}</h4>
                <p className="text-sm text-gray-600">{performer.course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
