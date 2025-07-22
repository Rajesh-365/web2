import React, { useState } from 'react';
import {
  ClipboardCheck,
  Calendar,
  Clock,
  FileText,
  Download,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

// --- Examination Section ---
const Examination = () => {
  const [selectedExam, setSelectedExam] = useState(null);

  const examSchedule = [
    {
      id: 1,
      course: 'C.Th (Certificate in Theology)',
      semester: 'Semester 1',
      date: '2025-07-20',
      time: '10:00 AM - 1:00 PM',
      duration: '3 hours',
      subjects: ['Biblical Studies', 'Christian Doctrine', 'Church History'],
      status: 'completed'
    },
    {
      id: 2,
      course: 'D.Th (Diploma in Theology)',
      semester: 'Semester 2',
      date: 'To Be Announced',
      time: 'To Be Announced',
      duration: 'To Be Announced',
      subjects: ['Advanced Biblical Studies', 'Systematic Theology', 'Pastoral Care'],
      status: 'upcoming'
    },
    {
      id: 3,
      course: 'B.Th (Bachelor of Theology)',
      semester: 'Semester 3',
      date: 'To Be Announced',
      time: 'To Be Announced',
      duration: 'To Be Announced',
      subjects: ['Biblical Languages', 'Homiletics', 'Christian Ethics'],
      status: 'upcoming'
    },
    {
      id: 4,
      course: 'M.Th (Master of Theology)',
      semester: 'Semester 2',
      date: 'To Be Announced',
      time: 'To Be Announced',
      duration: 'To Be Announced',
      subjects: ['Research Methods', 'Advanced Theology', 'Leadership Studies'],
      status: 'upcoming'
    }
  ];

  const examGuidelines = [
    'Arrive 30 minutes before the examination time',
    'Bring valid student ID and hall ticket',
    'Use only blue or black ink pens',
    'Mobile phones and electronic devices are strictly prohibited',
    'Read all instructions carefully before starting',
    'Maintain silence throughout the examination'
  ];

  return (
    <section id="examination" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Examination</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with examination schedules, guidelines, and important announcements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Exam Schedule */}
            <div className="lg:col-span-2">
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 animate-fade-in-up"
                style={{ animationDelay: '200ms' }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  Examination Schedule
                </h3>

                <div className="space-y-4">
                  {examSchedule.map((exam) => (
                    <div
                      key={exam.id}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        exam.status === 'upcoming'
                          ? 'border-blue-200 hover:border-blue-400 bg-blue-50/50 dark:bg-blue-900/30'
                          : 'border-gray-200 bg-gray-50/50 dark:bg-gray-800/30'
                      } ${selectedExam === exam.id ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() =>
                        setSelectedExam(selectedExam === exam.id ? null : exam.id)
                      }
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                            {exam.course}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">{exam.semester}</p>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            exam.status === 'upcoming'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                          }`}
                        >
                          {exam.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {exam.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {exam.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClipboardCheck className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {exam.duration}
                          </span>
                        </div>
                      </div>

                      {selectedExam === exam.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Subjects:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exam.subjects.map((subject, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Guidelines and Downloads */}
            <div className="space-y-8">
              {/* Guidelines */}
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Exam Guidelines
                </h3>
                <ul className="space-y-3">
                  {examGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Downloads */}
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 animate-fade-in-up"
                style={{ animationDelay: '600ms' }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-500" />
                  Downloads
                </h3>
                <div className="space-y-3">
                  {[
                    'Examination Time Table',
                    'Hall Ticket',
                    'Exam Guidelines PDF',
                    'Syllabus Document'
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors duration-300 text-left"
                    >
                      <FileText className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                      <Download className="w-4 h-4 text-blue-500 ml-auto" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examination;
