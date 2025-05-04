"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Leaf } from 'lucide-react';
import { Suspense } from 'react';

// Client component to handle search params
function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'confirmPassword') {
        setPasswordsMatch(formData.password === value);
      } else {
        setPasswordsMatch(value === formData.confirmPassword);
      }
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    // In a real app, you would handle registration here
    console.log('Registration data:', formData);
  };
  return <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <div className="mt-1">
            <input id="firstName" name="firstName" type="text" autoComplete="given-name" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={formData.firstName} onChange={handleChange} />
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <div className="mt-1">
            <input id="lastName" name="lastName" type="text" autoComplete="family-name" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={formData.lastName} onChange={handleChange} />
        </div>
      </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={formData.email} onChange={handleChange} />
        </div>
      </div>

        <div className="sm:col-span-2">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company name
        </label>
          <div className="mt-1">
            <input id="companyName" name="companyName" type="text" autoComplete="organization" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={formData.companyName} onChange={handleChange} />
        </div>
      </div>

        <div className="sm:col-span-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
          <div className="mt-1">
            <input id="password" name="password" type="password" autoComplete="new-password" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={formData.password} onChange={handleChange} />
        </div>
      </div>

        <div className="sm:col-span-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm password
        </label>
          <div className="mt-1">
            <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={formData.confirmPassword} onChange={handleChange} />
            {!passwordsMatch && <p className="mt-1 text-sm text-red-600">Passwords do not match</p>}
          </div>
      </div>

        <div className="flex items-center">
          <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700" />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
          I agree to the{' '}
            <Link href="/terms" className="font-medium text-blue-700 hover:text-blue-800">
            Terms of Service
          </Link>{' '}
          and{' '}
            <Link href="/privacy" className="font-medium text-blue-700 hover:text-blue-800">
            Privacy Policy
          </Link>
        </label>
      </div>

        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
          Create account
        </button>
        </div>
      </div>
    </form>;
}

export default function RegisterPage() {
  return <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Leaf className="h-10 w-10 text-green-600" />
              <span className="font-bold text-3xl">
                <span className="text-green-600">Bam</span>
                <span className="text-blue-700">Boo</span>
                <span className="text-gray-800">B2B</span>
              </span>
            </div>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-blue-700 hover:text-blue-800">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterForm />
          </Suspense>
        </div>
      </div>
    </div>;
}