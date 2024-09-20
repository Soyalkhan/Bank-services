import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
<>
<Navbar/>
    <div className="container mx-auto p-28">
     
      <h1 className=" text-blue-800 text-4xl font-bold mb-6">Terms and Conditions</h1>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">1. Introduction</h2>
      <p className="mb-4 text-[#69829f] text-sm">
        These terms and conditions ("Terms") govern your use of our website and services provided by EasyLoans Pvt Ltd ("Company"), located in the Delhi-NCR region, India. By accessing our website at www.easyloans.com and using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
      </p>

      <h2 className=" text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">2. Eligibility</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>You must be at least 18 years of age to apply for our loans and insurance services.</li>
        <li>You must be a resident of India and possess a valid government-issued ID (e.g., PAN, Aadhaar).</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">3. Loan Services</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Application Process: Loan applications must be submitted through our online application form. All required information must be provided accurately.</li>
        <li>Approval: Loan approval is subject to verification of provided information and creditworthiness. EasyLoans Pvt Ltd reserves the right to approve or reject any application at its discretion.</li>
        <li>Interest Rates: Interest rates on loans vary based on the loan type, amount, term, and the applicant's credit profile. The applicable interest rate will be communicated upon approval.</li>
        <li>Repayment: Loans must be repaid as per the agreed schedule. Early repayment is allowed without penalties unless specified otherwise in the loan agreement.</li>
        <li>Default: In case of default, EasyLoans Pvt Ltd reserves the right to take legal action and report the default to credit bureaus.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">4. Insurance Services</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Application Process: Insurance applications must be submitted through our online application form. Accurate and complete information must be provided.</li>
        <li>Approval: Approval of insurance applications is subject to verification and underwriting by our insurance partners.</li>
        <li>Premiums: Insurance premiums are based on the type of insurance, coverage amount, and the applicant's risk profile. The applicable premium will be communicated upon approval.</li>
        <li>Claims: Insurance claims must be filed as per the procedure outlined in the insurance policy document. EasyLoans Pvt Ltd assists in claim processing but does not guarantee claim approval.</li>
        <li>Policy Renewal: Insurance policies must be renewed as per the schedule to ensure continuous coverage. Non-renewal can lead to lapse of coverage.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">5. Fees and Charges</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Processing Fees: Loan applications may be subject to processing fees as specified in the loan agreement.</li>
        <li>Late Payment Fees: Late payments may attract penalties as specified in the loan agreement.</li>
        <li>Service Charges: Any additional services requested by the customer may attract charges as communicated by EasyLoans Pvt Ltd.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">6. Privacy and Data Protection</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Personal Information: We collect and process personal information as per our Privacy Policy. By using our services, you consent to the collection and use of your personal information as described in the Privacy Policy.</li>
        <li>Data Security: We implement industry-standard security measures to protect your personal information. However, we cannot guarantee absolute security and are not liable for any unauthorized access.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">7. Customer Responsibilities</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Accuracy of Information: You are responsible for providing accurate and complete information during the application process. Any false or misleading information may result in application rejection or service termination.</li>
        <li>Compliance: You must comply with all applicable laws and regulations while using our services.</li>
        <li>Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">8. Limitation of Liability</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Indirect Damages: EasyLoans Pvt Ltd is not liable for any indirect, incidental, or consequential damages arising out of your use of our services.</li>
        <li>Service Interruptions: We strive to ensure continuous availability of our services but do not guarantee uninterrupted access. We are not liable for any interruptions or downtime.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">9. Amendments</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Changes to Terms: EasyLoans Pvt Ltd reserves the right to amend these Terms at any time. Changes will be effective upon posting on our website. Continued use of our services after such changes constitutes acceptance of the new Terms.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">10. Governing Law and Jurisdiction</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Governing Law: These Terms are governed by the laws of India.</li>
        <li>Jurisdiction: Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Delhi-NCR, India.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base	uppercase font-semibold mt-6 mb-4">11. Contact Information</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Email: support@easyloans.com</li>
        <li>Phone: [Your Customer Support Number]</li>
        <li>Address: EasyLoans Pvt Ltd, [Your Office Address], Delhi-NCR, India</li>
      </ul>
    </div>

<Footer/>
    </>
  );
};

export default TermsAndConditions;
