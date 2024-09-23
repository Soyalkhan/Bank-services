// CookieConsent.js
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setVisible(false);
    };

    const cutPopup = () =>{
        setVisible(false)
    }

    return (
        isVisible && (
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-20">
                <div className="flex flex-col items-center">
                    <p className="text-center flex">
                        EasyLoans Pvt Ltd ("we", "us", or "our") uses cookies and similar tracking technologies to enhance your browsing experience on our website www.easyloans.com.
                        {/* <button  onClick={cutPopup} className="border-2 w-8"> x </button> */}
                    </p>
                  
                    <div className="mt-2">
                        <button
                            onClick={handleAccept}
                            className="bg-green-500 text-white px-4 py-2 mr-2"
                        >
                            Accept
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2"
                            onClick={handleDecline}
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default CookieConsent;
