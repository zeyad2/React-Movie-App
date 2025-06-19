import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up data:', formData);
  };

  return (
    <div className="min-h-screen bg-[#030014] flex flex-col pt-16">
      <Navbar />
      <div className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-dark-100 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row animate-fade-in">
          {/* Left: SVG Illustration */}
          <div className="hidden lg:flex flex-1 items-center justify-center bg-[#1a1333] p-8">
            <img src="/undraw_home-cinema_jdm1.svg" alt="Sign Up Illustration" className="w-full max-w-md h-auto object-contain" />
          </div>

          {/* Right: Sign Up Form */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
            <p className="text-light-200 mb-8">Join us and start exploring amazing movies!</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-light-100 mb-1">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-[#23203b] text-white placeholder-light-200 focus:outline-none focus:ring-2 focus:ring-[#AB8BFF] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-100 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-[#23203b] text-white placeholder-light-200 focus:outline-none focus:ring-2 focus:ring-[#AB8BFF] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-light-100 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-[#23203b] text-white placeholder-light-200 focus:outline-none focus:ring-2 focus:ring-[#AB8BFF] focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-light-100 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-[#23203b] text-white placeholder-light-200 focus:outline-none focus:ring-2 focus:ring-[#AB8BFF] focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-center">
                <label className="flex items-center text-light-200 text-sm">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 text-[#AB8BFF] rounded focus:ring-[#AB8BFF]"
                    required
                  />
                  <span className="ml-2">
                    I agree to the{' '}
                    <a href="#" className="text-[#AB8BFF] hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#AB8BFF] hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              <Button type="submit" text="Create Account" className="w-full mt-2" />
              
              <div className="text-center">
                <Link to="/signin" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  Already have an account? Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;