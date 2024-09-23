import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const RefundAndCancellationPolicy = () => {
  return (

    <>

    <Navbar/>
    <div className="p-16">
      <h1 className="text-blue-800 text-4xl font-bold mb-6">Refund and Cancellation Policy</h1>
      
      <h2 className="text-[#052f5f] text-base uppercase font-semibold mt-6 mb-4">1. Overview</h2>
      <p className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        This Refund and Cancellation Policy outlines the conditions under which customers can cancel services or request refunds from EasyLoans Pvt Ltd.
      </p>

      <h2 className="text-[#052f5f] text-base uppercase font-semibold mt-6 mb-4">2. Cancellation</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Loan applications can be canceled within 24 hours of submission, provided the loan amount has not been disbursed.</li>
        <li>After 24 hours or once the loan amount has been disbursed, cancellations will not be accepted.</li>
        <li>Insurance policies can be canceled within 14 days of issuance, provided no claims have been made.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base uppercase font-semibold mt-6 mb-4">3. Refunds</h2>
      <ul className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        <li>Refunds will be processed within 7-10 business days after the cancellation request is approved.</li>
        <li>Any processing fees incurred during the application will not be refunded.</li>
        <li>For insurance services, if the policy is canceled within the free-look period (14 days), the premium will be refunded after deducting applicable charges.</li>
      </ul>

      <h2 className="text-[#052f5f] text-base uppercase font-semibold mt-6 mb-4">4. Contact Information</h2>
      <p className="list-disc list-inside mb-4 text-[#69829f] text-sm">
        For cancellation and refund requests, please contact us at:
        <br /> Email: refunds@easyloans.com
        <br /> Phone: [Your Customer Support Number]
        <br /> Address: EasyLoans Pvt Ltd, [Your Office Address], Delhi-NCR, India
      </p>
    </div>

<Footer/>
    </>
  );
};

export default RefundAndCancellationPolicy;
