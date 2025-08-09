
import React, { useState } from 'react';
import { EnvelopeIcon } from '../components/IconComponents';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setError('');
    // In a real app, you would send this data to a server/API
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
          <h2 className="text-3xl font-bold text-dark mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg">
            Your message has been sent successfully. Our team will review your enquiry and get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Get in Touch</h1>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    We'd love to hear from you. Please fill out the form below to get in touch with our team of experts.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-light p-8 md:p-12 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} noValidate>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150" placeholder="you@company.com" />
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-gray-500">(Optional)</span></label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150" placeholder="+44 123 456 7890" />
                        </div>
                        <div>
                           <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company <span className="text-gray-500">(Optional)</span></label>
                           <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150" placeholder="Your Company Name" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150" placeholder="How can we help you?"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-md">
                            Send Enquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
