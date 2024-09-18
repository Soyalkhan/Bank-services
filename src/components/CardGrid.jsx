import React from 'react';
import Card from './Card'; // Adjust the path if needed

const CardGrid = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Credit Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Cards */}
        <Card 
          icon={<span role="img" aria-label="Credit Card">💳</span>}
          title="Credit Cards"
          description="From 50+ Options, Choose a card matching your lifestyle & needs"
          linkText="Get Best Offers"
        />
        <Card 
          icon={<span role="img" aria-label="Loan">🏦</span>}
          title="Personal Loan"
          description="Select the best offer curated just for you from a wide choice of Banks & NBFC’s"
          linkText="Check Eligibility"
        />
        <Card 
          icon={<span role="img" aria-label="Micro Loan">💰</span>}
          title="Micro Loans"
          description="Instant small ticket loans to meet your immediate cash needs"
          linkText="Get Instant Loan"
        />
        <Card 
          icon={<span role="img" aria-label="Business Loan">🏢</span>}
          title="Business Loan"
          description="Expand your business with loans at low interest rates"
          linkText="Check Eligibility"
        />
        
      </div>
    
      <h1 className="text-2xl font-bold mb-6 mt-9">Insurance & Investment</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Cards with Labels */}
        <Card 
          label="Up to 10% Off"
          icon={<span role="img" aria-label="Umbrella">☂️</span>}
          title="Term Life Insurance"
          description="Safeguard your loved ones from future uncertainties"
          linkText="Starting from ₹ 473/month*"
        />
        <Card 
          label="Tax Free Returns"
          icon={<span role="img" aria-label="Investment">📈</span>}
          title="Investment Plan"
          description="Plans starting from ₹1,000 with Inbuilt Life Cover & Tax Benefits"
          linkText="View Plans"
        />
        <Card 
          label="Pre-Approved"
          icon={<span role="img" aria-label="Health">❤️</span>}
          title="Health Insurance"
          description="Protect yourself and your family against medical expenses with up to 25% discount"
          linkText="Starting @ ₹ 8/day*"
        />
        <Card 
          icon={<span role="img" aria-label="Mutual Funds">🌱</span>}
          title="Direct Mutual Funds"
          description="Get higher returns on your Mutual Fund investments"
          linkText="Check Your Investment"
        />
        {/* Add more cards as needed */}
      </div>
    
    </div>

    
  );
};

export default CardGrid;
