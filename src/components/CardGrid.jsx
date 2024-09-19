// src/CardGrid.js
import React from 'react';
import Card from './Card'; // Adjust the path if needed

const servicesData = [
  {
    category: "Loans Services",
    services: [
      {
        icon: "💳",
        title: "Personal Loans",
        description: [
          "Unsecured personal loans",
          "Secured personal loans",
          "Debt consolidation loans",
          "Not Sure"
        ],
        linkText: "Get Best Offers"
      },
      {
        icon: "🏦",
        title: "Home Loans",
        description: [
          "Fixed-rate mortgages",
          "Adjustable-rate mortgages (ARMs)",
          "FHA loans",
          "VA loans",
          "USDA loans",
          "Jumbo loans",
          "Not Sure"
        ],
        linkText: "Check Eligibility"
      },
      {
        icon: "🚗",
        title: "Auto Loans",
        description: [
          "New car loans",
          "Used car loans",
          "Refinancing auto loans",
          "Not Sure"
        ],
        linkText: "Get Instant Loan"
      },
      {
        icon: "🎓",
        title: "Student Loans",
        description: [
          "Undergraduate student loans",
          "Graduate student loans",
          "Parent loans",
          "Student loan refinancing",
          "Not Sure"
        ],
        linkText: "Explore Options"
      },
      {
        icon: "🏢",
        title: "Business Loans",
        description: [
          "Small business loans",
          "SBA loans",
          "Business lines of credit",
          "Equipment financing",
          "Commercial real estate loans",
          "Not Sure"
        ],
        linkText: "Get Started"
      },
      {
        icon: "📈",
        title: "Credit Builder Loans",
        description: [
          "Loans designed to help build or improve credit scores"
        ],
        linkText: "Learn More"
      },
      {
        icon: "💵",
        title: "Payday Loans",
        description: [
          "Short-term, high-interest loans for emergency needs"
        ],
        linkText: "Apply Now"
      },
    ]
  },
  {
    category: "Insurance Services",
    services: [
      {
        icon: "☂️",
        title: "Life Insurance",
        description: [
          "Term life insurance",
          "Whole life insurance",
          "Universal life insurance",
          "Variable life insurance",
          "Not Sure"
        ],
        linkText: "View Plans"
      },
      {
        icon: "❤️",
        title: "Health Insurance",
        description: [
          "Individual health insurance",
          "Family health insurance plans",
          "Dental insurance",
          "Vision insurance",
          "Not Sure"
        ],
        linkText: "Get a Quote"
      },
      {
        icon: "🚗",
        title: "Auto Insurance",
        description: [
          "Liability coverage",
          "Collision coverage",
          "Comprehensive coverage",
          "Uninsured/underinsured motorist coverage",
          "Personal injury protection (PIP)",
          "Not Sure"
        ],
        linkText: "Check Your Rates"
      },
      {
        icon: "🏠",
        title: "Homeowners Insurance",
        description: [
          "Standard homeowners insurance",
          "Condo insurance",
          "Renters insurance",
          "Landlord insurance",
          "Not Sure"
        ],
        linkText: "Compare Policies"
      },
      {
        icon: "💼",
        title: "Business Insurance",
        description: [
          "General liability insurance",
          "Professional liability insurance",
          "Workers’ compensation insurance",
          "Commercial property insurance",
          "Business interruption insurance",
          "Not Sure"
        ],
        linkText: "Learn More"
      },
    ]
  },
  {
    category: "Specialized Insurance",
    services: [
      {
        icon: "🐾",
        title: "Pet Insurance",
        description: [
          "Coverage for veterinary expenses"
        ],
        linkText: "Get a Quote"
      },
      {
        icon: "🔒",
        title: "Identity Theft Insurance",
        description: [
          "Protection against identity theft and related losses"
        ],
        linkText: "Protect Now"
      },
      {
        icon: "🏥",
        title: "Long-term Care Insurance",
        description: [
          "Coverage for long-term care services"
        ],
        linkText: "Explore Options"
      },
    ]
  },
  {
    category: "Additional Services",
    services: [
      {
        icon: "📊",
        title: "Financial Counseling",
        description: [
          "Debt management plans",
          "Budgeting assistance",
          "Credit score improvement advice",
          "Not Sure"
        ],
        linkText: "Schedule a Session"
      },
      {
        icon: "🧮",
        title: "Loan Calculators",
        description: [
          "Mortgage calculators",
          "Auto loan calculators",
          "Personal loan calculators"
        ],
        linkText: "Calculate Now"
      },
    ]
  },
  {
    category: "Customer Support",
    services: [
      {
        icon: "🕓",
        title: "24/7 Customer Service",
        description: [
          "Live chat support",
          "Phone support",
          "Email support"
        ],
        linkText: "Contact Us"
      },
      {
        icon: "📚",
        title: "Educational Resources",
        description: [
          "Blog articles on financial tips and advice",
          "FAQ section",
          "Webinars and workshops"
        ],
        linkText: "Learn More"
      },
    ]
  },
];

const CardGrid = () => {
  return (
    <div className="p-8 items-center">
      {servicesData.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h1 className="text-2xl ml-6 mt-12 font-bold mb-6 text-blue-800">{category.category}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.services.map((service, serviceIndex) => (
              <Card 
                key={serviceIndex}
                icon={<span role="img" aria-label={service.title}>{service.icon}</span>}
                title={service.title}
                description={service.description.join(', ')}
                linkText={service.linkText}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
