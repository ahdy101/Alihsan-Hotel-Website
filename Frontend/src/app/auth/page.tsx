'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FcGoogle } from 'react-icons/fc';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const defaultFormData: FormData = {
  name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-md mx-auto p-6 space-y-6 md:p-8 md:space-y-8">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-black md:text-3xl">
            Create an Account
          </h1>
        </header>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 bg-white">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Auth Option */}
        <div className="flex justify-center">
          <button 
            type="button" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Sign in with Google"
          >
            <FcGoogle className="text-4xl" />
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400"
              value={formData.name} 
              onChange={handleInputChange}
            />
          </div>
          
          <div className="flex flex-col space-y-1">
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              className="px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400"
              value={formData.email}  
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              minLength={8}
              className="px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400"
              value={formData.password} 
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Auth;