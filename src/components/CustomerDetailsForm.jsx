import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link,NavLink } from 'react-router-dom';
import TermsAndConditions from '../pages/TermsAndConditions';


const countries = ["USA", "Canada", "India", "UK"];
const loanTypes = ["Personal Loan", "Home Loan", "Auto Loan", "Student Loan", "Business Loan"];
const repaymentTerms = ["6 months", "12 months", "24 months", "36 months", "48 months", "60 months"];
const insuranceTypes = ["Life Insurance", "Health Insurance", "Auto Insurance", "Homeowners Insurance", "Disability Insurance", "Pet Insurance", "Identity Theft Insurance"];
const employmentStatusOptions = ["Employed", "Self-employed", "Unemployed", "Student", "Retired"];

const CustomerDetailsForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gender: '',
        maritalStatus: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        panNumber: '',
        aadhaarNumber: '',
        employmentStatus: '',
        employerName: '',
        jobTitle: '',
        annualIncome: '',
        workAddress: '',
        workCity: '',
        workState: '',
        workPostalCode: '',
        workCountry: '',
        loanType: '',
        loanAmount: '',
        loanPurpose: '',
        repaymentTerm: '',
        insuranceType: '',
        coverageAmount: '',
        beneficiaries: '',
        additionalInfo: '',
        terms: false,
        privacyPolicy: false,
        electronicSignature: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and submission logic here
        console.log(formData);
    };

    return (

        <>

        <Navbar/>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
            <h2 className=" text-2xl text-blue-800  font-bold mb-6 border-b-4 border-[#d90368] w-fit pb-2">FILL THIS FORM</h2>

            {/* Personal Information */}
            <h3 className=" text-[#d90368] text-lg font-semibold mb-4 border-b pb-2">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Full Name</label>
                    <input type="text" name="fullName" placeholder="Enter your full name" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Date of Birth</label>
                    <input type="date" name="dob" required onChange={handleChange} className="w-full p-2 mt-1 border uppercase rounded-md focus:ring focus:ring-blue-200 text-[#69829f] text-sm" />
                </div>
            </div>

            <div className="mt-4">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Gender</label>
                <div className="flex gap-4 mt-1">
                    <label className="flex items-center text-[#69829f] text-sm">
                        <input type="radio" name="gender" value="Male" onChange={handleChange} required className="mr-2" />
                        Male
                    </label>
                    <label className="flex items-center text-[#69829f] text-sm">
                        <input type="radio" name="gender" value="Female" onChange={handleChange} required className="mr-2" />
                        Female
                    </label>
                    <label className="flex items-center text-[#69829f] text-sm">
                        <input type="radio" name="gender" value="Other" onChange={handleChange} required className="mr-2" />
                        Other
                    </label>
                </div>
            </div>

            <div className="mt-4">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Marital Status</label>
                <select name="maritalStatus" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200 text-[#69829f] text-sm">
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                </select>
            </div>

            {/* Contact Information */}
            <h3 className="text-[#d90368] text-lg font-semibold mt-8 mb-4 border-b pb-2">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Email Address</label>
                    <input type="email" name="email" placeholder="Enter your email address" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Phone Number</label>
                    <input type="text" name="phone" placeholder="Enter your phone number" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
            </div>

            {/* Address Information */}
            <h3 className="text-[#d90368] text-lg font-semibold mt-8 mb-4 border-b pb-2">Address</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Street Address</label>
                    <input type="text" name="streetAddress" placeholder="Enter your street address" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">City</label>
                    <input type="text" name="city" placeholder="Enter your city" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">State/Province</label>
                    <input type="text" name="state" placeholder="Enter your state or province" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Postal Code</label>
                    <input type="text" name="postalCode" placeholder="Enter your postal code" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
            </div>

            <div className="mt-4">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Country</label>
                <select name="country" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200">
                    <option value="">Select</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>

            {/* Identification Information */}
            <h3 className="text-[#d90368] text-lg font-semibold mt-8 mb-4 border-b pb-2">Identification</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">PAN Number</label>
                    <input type="text" name="panNumber" placeholder="Enter your PAN number" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Aadhaar Number</label>
                    <input type="text" name="aadhaarNumber" placeholder="Enter your Aadhaar number" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
            </div>

            {/* Employment Information */}
            <h3 className="text-[#d90368] text-lg font-semibold mt-8 mb-4 border-b pb-2">Employment Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Employment Status</label>
                    <select name="employmentStatus" required onChange={handleChange} className=" text-[#69829f] text-sm w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200">
                        <option value="">Select</option>
                        {employmentStatusOptions.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Employer Name</label>
                    <input type="text" name="employerName" placeholder="Enter your employer's name" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Job Title</label>
                    <input type="text" name="jobTitle" placeholder="Enter your job title" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Annual Income</label>
                    <input type="number" name="annualIncome" placeholder="Enter your annual income" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
            </div>

            {/* Loan Information */}
            <h3 className="text-[#d90368] text-lg font-semibold mt-8 mb-4 border-b pb-2">Loan Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Loan Type</label>
                    <select name="loanType" required onChange={handleChange} className=" text-[#69829f] text-sm w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200">
                        <option value="">Select</option>
                        {loanTypes.map((loan) => (
                            <option key={loan} value={loan}>{loan}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Loan Amount</label>
                    <input type="number" name="loanAmount" placeholder="Enter the loan amount" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
            </div>

            <div className="mt-4">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Loan Purpose</label>
                <textarea name="loanPurpose" rows="3" placeholder="Enter the purpose of the loan" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"></textarea>
            </div>

            <div className="mt-4">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Repayment Term</label>
                <select name="repaymentTerm" required onChange={handleChange} className=" text-[#69829f] text-sm w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200">
                    <option value="">Select</option>
                    {repaymentTerms.map((term) => (
                        <option key={term} value={term}>{term}</option>
                    ))}
                </select>
            </div>

            {/* Insurance Information */}
            <h3 className="text-[#d90368] text-lg font-semibold mt-8 mb-4 border-b pb-2">Insurance Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Insurance Type</label>
                    <select name="insuranceType" required onChange={handleChange} className="text-[#69829f] text-sm w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200">
                        <option value="">Select</option>
                        {insuranceTypes.map((insurance) => (
                            <option key={insurance} value={insurance}>{insurance}</option>
                        ))}
                    </select>
                </div>
                <div> <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Coverage Amount</label>
                    <input type="number" name="coverageAmount" placeholder="Enter the coverage amount" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
                </div>
            </div>

            <div className="mt-4">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Beneficiaries</label>
                <textarea name="beneficiaries" rows="3" placeholder="Enter the beneficiaries" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"></textarea>
            </div>

            {/* Additional Information */}
         

            <div className="mt-4">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Additional Information</label>
                <textarea name="additionalInfo" rows="3" placeholder="Enter any additional information" onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"></textarea>
            </div>

            {/* Terms & Conditions */}
            <div className="mt-8">
                <label className="flex items-center text-[#69829f] text-sm">
                    <input type="checkbox" name="terms" onChange={handleChange} required className="mr-2" />
                    I agree to the &nbsp; 
                    <Link to={'/TermsAndConditions'} className='text-blue-600 hover:underline' >Terms and Conditions</Link>
                </label>
                <label className="flex items-center mt-2 text-[#69829f] text-sm">
                    <input type="checkbox" name="privacyPolicy" onChange={handleChange} required className="mr-2" />
                    I agree to the &nbsp; <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
            </div>

            <div className="mt-12 mb-12">
                <label className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">Electronic Signature</label>
                <input type="text" name="electronicSignature" placeholder="Enter your full name for electronic signature" required onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#052f5f] text-white p-3 mt-8 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200">Submit</button>
        </form>
<Footer/>
        </>
    );
};

export default CustomerDetailsForm;
