// src/components/Footer.jsx
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import TermsAndConditions from '../pages/TermsAndConditions';
import RefundAndCancellationPolicy from '../pages/RefundAndCancellationPolicy';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Easy Loans.
        </p>
        <div className="mt-2">
          {/* <a href="/PrivacyPolicy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a> */}
          <Link
            to="/PrivacyPolicy"
            className='text-gray-400 hover:text-white mx-2'
          >
            Privacy Policy
          </Link>
          <Link
            to="/TermsAndConditions"
            className='text-gray-400 hover:text-white mx-2'
          >
            Terms of Service
          </Link>
          <Link
            to="/RefundAndCancellationPolicy"
            className='text-gray-400 hover:text-white mx-2'
          >
            Refund and cancellation
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
