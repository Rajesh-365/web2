import React, { useState } from 'react';
import { HelpCircle, Send, User, Mail, Phone, MapPin, Users, MessageSquare, CheckCircle, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GospelNeed = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    location: '',
    communitySize: '',
    needType: '',
    urgency: '',
    description: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const needTypes = [
    { value: 'church-planting', label: 'Church Planting' },
    { value: 'pastoral-care', label: 'Pastoral Care' },
    { value: 'bible-teaching', label: 'Bible Teaching' },
    { value: 'youth-ministry', label: 'Youth Ministry' },
    { value: 'community-outreach', label: 'Community Outreach' },
    { value: 'evangelism', label: 'Evangelism Support' }
  ];

  const urgencyLevels = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'urgent', label: 'Urgent (Within 3 months)' },
    { value: 'moderate', label: 'Moderate (Within 6 months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        contactName: '',
        email: '',
        phone: '',
        location: '',
        communitySize: '',
        needType: '',
        urgency: '',
        description: '',
        additionalInfo: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="gospel-need" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for reaching out. We've received your request for Gospel ministry support and will respond as soon as possible.
              </p>
              <div className="text-sm text-gray-500">
                Our team will review your request and contact you within 48 hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gospel-need" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('gospelProgrammeTitle')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('gospelProgrammeDescription')}
            </p>
          </div>

          {/* Ministry Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {[
              {
                title: 'Church Planting',
                description: 'Establish new churches in unreached areas',
                icon: '⛪',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Bible Teaching',
                description: 'Provide biblical education and training',
                icon: '📖',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Community Outreach',
                description: 'Serve and support local communities',
                icon: '🤝',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Pastoral Care',
                description: 'Spiritual guidance and counseling',
                icon: '🙏',
                color: 'from-red-500 to-red-600'
              },
              {
                title: 'Youth Ministry',
                description: 'Engage and mentor young people',
                icon: '👥',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                title: 'Evangelism',
                description: 'Share the Gospel message',
                icon: '💝',
                color: 'from-pink-500 to-pink-600'
              }
            ].map((ministry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 bg-gradient-to-br ${ministry.color} rounded-lg flex items-center justify-center mb-4 text-xl`}>
                  {ministry.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{ministry.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{ministry.description}</p>
              </div>
            ))}
          </div>

          {/* Request Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">Gospel Programme Request Form</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Name */}
                <div className="group">
                  <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-600" />
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-yellow-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Location */}
                <div className="group">
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-yellow-600" />
                    Location/Area
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Village/City, District, State"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Community Size */}
                <div className="group">
                  <label htmlFor="communitySize" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-yellow-600" />
                    Community Size
                  </label>
                  <select
                    id="communitySize"
                    name="communitySize"
                    value={formData.communitySize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">-- Select Community Size --</option>
                    <option value="small">Small (Under 500 people)</option>
                    <option value="medium">Medium (500-2000 people)</option>
                    <option value="large">Large (2000-5000 people)</option>
                    <option value="very-large">Very Large (Over 5000 people)</option>
                  </select>
                </div>

                {/* Need Type */}
                <div className="group">
                  <label htmlFor="needType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-yellow-600" />
                    Type of Ministry Needed
                  </label>
                  <select
                    id="needType"
                    name="needType"
                    value={formData.needType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">-- Select Ministry Type --</option>
                    {needTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Urgency */}
              <div className="group">
                <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Timeline/Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">-- Select Timeline --</option>
                  {urgencyLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="group">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-yellow-600" />
                  Describe the Need
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Please describe the specific Gospel ministry need in your area..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white resize-none"
                ></textarea>
              </div>

              {/* Additional Info */}
              <div className="group">
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any additional details that might help us understand your request better..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GospelNeed;