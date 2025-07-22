import React, { useState } from 'react';
import {
  UserPlus, Send, User, Mail, Phone, Calendar, BookOpen,
  FileText, CheckCircle, Home, MapPin, Building, Landmark, UserCheck
} from 'lucide-react';

const AdmissionRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
    gender: '', address: '', city: '', state: '', pincode: '',
    course: '', previousEducation: '', churchAffiliation: '',
    pastorReference: '', testimony: '', motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    { value: 'CTh', label: 'Certificate in Theology (C.Th) - 8 months' },
    { value: 'DTh', label: 'Diploma in Theology (D.Th) - 12 months' },
    { value: 'BTh', label: 'Bachelor of Theology (B.Th) - 12 months' },
    { value: 'MTh', label: 'Master of Theology (M.Th) - 18 months' }
  ];

  const educationLevels = [
    { value: '10th', label: '10th Standard' },
    { value: '12th', label: '12th Standard' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
        gender: '', address: '', city: '', state: '', pincode: '',
        course: '', previousEducation: '', churchAffiliation: '',
        pastorReference: '', testimony: '', motivation: ''
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <section id="admission" className="py-16 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-3xl shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your application has been submitted. Thank you!
            </p>
            <div className="bg-blue-50 rounded-xl p-4 text-blue-700 mb-4">
              <strong>Application ID:</strong> EIT2024{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
            </div>
            <p className="text-sm text-gray-500">You'll receive a confirmation email within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admission" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Admission Registration</h2>
            <p className="text-gray-500 text-lg">Fill in the form below to apply for your desired course.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Personal Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
                <User className="w-5 h-5" /> Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} icon={<User />} />
                <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} icon={<User />} />
                <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} icon={<Mail />} />
                <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} icon={<Phone />} />
                <InputField label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} icon={<Calendar />} />
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Address */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center gap-2">
                <Home className="w-5 h-5" /> Address Information
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <InputField label="Full Address" name="address" value={formData.address} onChange={handleChange} isTextArea />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField label="City" name="city" value={formData.city} onChange={handleChange} icon={<MapPin />} />
                  <InputField label="State" name="state" value={formData.state} onChange={handleChange} icon={<Building />} />
                  <InputField label="PIN Code" name="pincode" value={formData.pincode} onChange={handleChange} icon={<Landmark />} />
                </div>
              </div>
            </div>

            {/* Section 3: Academic & Church */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Academic & Church Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField label="Course" name="course" value={formData.course} onChange={handleChange} options={courses} />
                <SelectField label="Previous Education" name="previousEducation" value={formData.previousEducation} onChange={handleChange} options={educationLevels} />
                <InputField label="Church Affiliation" name="churchAffiliation" value={formData.churchAffiliation} onChange={handleChange} />
                <InputField label="Pastor's Reference" name="pastorReference" value={formData.pastorReference} onChange={handleChange} />
              </div>
            </div>

            {/* Section 4: Testimony */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center gap-2">
                <UserCheck className="w-5 h-5" /> Personal Statement
              </h3>
              <InputField label="Testimony of Faith" name="testimony" value={formData.testimony} onChange={handleChange} isTextArea />
              <InputField label="Motivation for Ministry" name="motivation" value={formData.motivation} onChange={handleChange} isTextArea />
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-3 px-10 py-4 text-lg font-bold rounded-full shadow-md transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:scale-105 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? 'Submitting...' : <><Send className="w-5 h-5" /> Submit Registration</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Helper components
const InputField = ({ label, name, value, onChange, icon, type = 'text', isTextArea = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="4"
          required
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg"
        />
      )}
    </div>
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default AdmissionRegistration;
