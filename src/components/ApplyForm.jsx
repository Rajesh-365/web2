import React, { useState } from 'react';
import { Send, User, Mail, Phone, BookOpen, CheckCircle, Calendar, MapPin, Home, Church } from 'lucide-react';

const ApplyForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    course: '',
    previousEducation: '',
    churchAffiliation: '',
    pastorReference: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    { value: 'CTh', label: 'Certificate in Theology (C.Th)' },
    { value: 'DTh', label: 'Diploma in Theology (D.Th)' },
    { value: 'BTh', label: 'Bachelor of Theology (B.Th)' },
    { value: 'MTh', label: 'Master of Theology (M.Th)' }
  ];

  const educationLevels = [
    { value: 'high_school', label: 'High School' },
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: "Master's Degree" },
    { value: 'other', label: 'Other' }
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  // Define steps with groups of fields
  const steps = [
    {
      id: 0,
      label: 'Contact Info',
      title: 'Contact Information',
      subtitle: 'Please provide your email address and phone number for account verification.',
      fields: [
        { name: 'email', type: 'email', label: 'Email Address', placeholder: 'you@example.com', required: true, icon: Mail },
        { name: 'phone', type: 'tel', label: 'Phone Number', placeholder: 'Enter phone number', required: true, icon: Phone, helper: "We'll send a verification code to this number" }
      ]
    },
    {
      id: 1,
      label: 'Personal Info',
      title: 'Personal Information',
      subtitle: 'Tell us more about yourself.',
      fields: [
        { name: 'firstName', type: 'text', label: 'First Name', placeholder: 'Enter first name', required: true, icon: User },
        { name: 'lastName', type: 'text', label: 'Last Name', placeholder: 'Enter last name', required: true, icon: User }
      ]
    },
    {
      id: 2,
      label: 'Personal Details',
      title: 'Personal Details',
      subtitle: 'Additional information about you.',
      fields: [
        { name: 'dob', type: 'date', label: 'Date of Birth', placeholder: 'dd-mm-yyyy', required: true, icon: Calendar },
        { name: 'gender', type: 'select', label: 'Gender', placeholder: 'Select Gender', required: true, icon: User, options: genderOptions }
      ]
    },
    {
      id: 3,
      label: 'Address',
      title: 'Address Information',
      subtitle: 'Where can we reach you?',
      fields: [
        { name: 'address', type: 'textarea', label: 'Full Address', placeholder: 'Enter full address', required: true, icon: Home },
        { name: 'city', type: 'text', label: 'City', placeholder: 'Enter city', required: true, icon: MapPin },
        { name: 'state', type: 'text', label: 'State', placeholder: 'Enter state', required: true, icon: MapPin },
        { name: 'pincode', type: 'text', label: 'PIN Code', placeholder: 'Enter PIN code', required: true, icon: MapPin, maxLength: 6 }
      ]
    },
    {
      id: 4,
      label: 'Course',
      title: 'Course Selection',
      subtitle: 'Select the course you want to apply for.',
      fields: [
        { name: 'course', type: 'select', label: 'Course', placeholder: 'Select course', required: true, icon: BookOpen, options: courses }
      ]
    },
    {
      id: 5,
      label: 'Education',
      title: 'Academic Information',
      subtitle: 'Tell us about your educational background.',
      fields: [
        { name: 'previousEducation', type: 'select', label: 'Previous Education', placeholder: 'Select education level', required: true, icon: BookOpen, options: educationLevels }
      ]
    },
    {
      id: 6,
      label: 'Church Info',
      title: 'Church Information',
      subtitle: 'Provide your church affiliation details.',
      fields: [
        { name: 'churchAffiliation', type: 'text', label: 'Church Affiliation', placeholder: 'Enter church name', required: true, icon: Church },
        { name: 'pastorReference', type: 'text', label: "Pastor's Reference", placeholder: "Enter pastor's name", required: true, icon: User }
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1 && isCurrentStepValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCurrentStepValid()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(0);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        course: '',
        previousEducation: '',
        churchAffiliation: '',
        pastorReference: ''
      });
    }, 3000);
  };

  const isCurrentStepValid = () => {
    const currentStepFields = steps[currentStep].fields;
    return currentStepFields.every(field => {
      const value = formData[field.name];
      if (!value || value.trim() === '') return false;
      
      if (field.name === 'email') {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }
      if (field.name === 'phone') {
        return value.length >= 10;
      }
      if (field.name === 'pincode') {
        return value.length === 6;
      }
      return true;
    });
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-md w-full text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Application Submitted!</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for your interest. We'll review your application and get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admission Registration</h1>
          <p className="text-gray-600 dark:text-gray-400">Fill in the form below to apply for your desired course.</p>
        </div>

        {/* Progressive Stepper */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 p-6">
          <div className="flex items-center relative">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    index < currentStep ? 'bg-blue-600 text-white' :
                    index === currentStep ? 'bg-blue-600 text-white ring-4 ring-blue-200' :
                    'bg-gray-200 text-gray-400'
                  }`}>
                    {index < currentStep ? <CheckCircle className="w-5 h-5" /> : <span className="text-sm font-semibold">{index + 1}</span>}
                  </div>
                  <span className={`mt-2 text-xs font-medium whitespace-nowrap ${
                    index <= currentStep ? 'text-blue-600' : 'text-gray-400'
                  }`}>{step.label}</span>
                </div>
                {index < currentStep && <div className="flex-1 h-0.5 bg-blue-600 mx-2"></div>}
              </React.Fragment>
            ))}
            {currentStep < steps.length - 1 && (
              <div className="flex items-center gap-1.5 ml-4">
                {[...Array(Math.min(3, steps.length - currentStep - 1))].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{currentStepData.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{currentStepData.subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStepData.fields.map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                
                {field.type === 'select' ? (
                  <select
                    value={formData[field.name]}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    required={field.required}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.name]}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    placeholder={field.placeholder}
                    rows="4"
                    required={field.required}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                  />
                ) : field.type === 'tel' ? (
                  <div className="flex gap-3">
                    <select className="w-28 px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                      <option value="+91">IN +91</option>
                    </select>
                    <input
                      type="tel"
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      placeholder={field.placeholder}
                      maxLength={field.maxLength || "10"}
                      required={field.required}
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                    required={field.required}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                )}
                
                {field.helper && <p className="text-sm text-gray-500 mt-2">{field.helper}</p>}
              </div>
            ))}

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-8 py-3 rounded-lg font-medium ${
                  currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Back
              </button>

              {currentStep === steps.length - 1 ? (
                <button
                  type="submit"
                  disabled={!isCurrentStepValid() || isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium ${
                    !isCurrentStepValid() || isSubmitting ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentStepValid()}
                  className={`px-8 py-3 rounded-lg font-medium ${
                    !isCurrentStepValid() ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Next: Verify Information
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
