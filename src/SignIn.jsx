import React, { useState } from "react";
import Navbar from './components/Navbar';
import Button from './components/Button';
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div className="min-h-screen bg-[#030014] flex flex-col pt-16">
      <Navbar />
      <div className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-dark-100 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row animate-fade-in">


          <div className="hidden lg:flex flex-1 items-center justify-center bg-[#1a1333] p-8">
            <img src="/undraw_home-cinema_jdm1.svg" alt="Sign In Illustration" className="w-full max-w-md h-auto object-contain" />
          </div>



          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">Sign in to your account</h2>
            <p className="text-light-200 mb-8">Welcome back! Please enter your details.</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-100 mb-1">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-[#23203b] text-white placeholder-light-200 focus:outline-none focus:ring-2 focus:ring-[#AB8BFF] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>



              <div>
                <label htmlFor="password" className="block text-sm font-medium text-light-100 mb-1">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-[#23203b] text-white placeholder-light-200 focus:outline-none focus:ring-2 focus:ring-[#AB8BFF] focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-light-200 text-sm">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="form-checkbox h-4 w-4 text-[#AB8BFF] rounded focus:ring-[#AB8BFF]"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#AB8BFF] hover:underline">Forgot password?</a>
              </div>
              <Button type="submit" text="Sign In" className="w-full mt-2" />
              <Link to="/signup" className="text-white opacity-60">
                  <a href="">Not a member? Sign up now</a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
