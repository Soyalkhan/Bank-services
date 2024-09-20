// src/components/Footer.jsx
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import TermsAndConditions from '../pages/TermsAndConditions';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Easy Loans.
        </p>
        <div className="mt-2">
          {/* <a href="/PrivacyPolicy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a> */}
          <NavLink
            to="/PrivacyPolicy"
            className='text-gray-400 hover:text-white mx-2'
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/termandconditions"
            className='text-gray-400 hover:text-white mx-2'
          >
            Terms of Service
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
