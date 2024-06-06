import React from 'react';
import { FaCheckCircle, FaWallet, FaCogs, FaCode, FaRocket, FaBookOpen, FaToolbox, FaNetworkWired } from 'react-icons/fa';

type PlanCardProps = {
    plan: {
        title: string;
        features: string[];
        price: string;
        url: string;
    };
    onClick: () => void;
};

const iconMapping: { [key: string]: React.ReactNode } = {
    "Token and Technology Integration": <FaCogs className="text-blue-500 mr-2" />,
    "Blockchain Engine Access": <FaNetworkWired className="text-purple-500 mr-2" />,
    "Wallet Factory": <FaWallet className="text-green-500 mr-2" />,
    "Smart Contracts Development": <FaCode className="text-yellow-500 mr-2" />,
    "Advanced Tutorials": <FaBookOpen className="text-red-500 mr-2" />,
    "Extended Web3 Frameworks": <FaToolbox className="text-orange-500 mr-2" />,
    "Custom Blockchain Solutions": <FaRocket className="text-pink-500 mr-2" />,
    "Full Wallet Integration": <FaWallet className="text-green-500 mr-2" />,
    "Custom Smart Contracts": <FaCode className="text-yellow-500 mr-2" />,
    "Personalized Tutorials": <FaBookOpen className="text-red-500 mr-2" />,
    "Comprehensive Web3 Frameworks": <FaToolbox className="text-orange-500 mr-2" />,
};

const PlanCard: React.FC<PlanCardProps> = ({ plan, onClick }) => {
    return (
        <div className="bg-gray-800 bg-opacity-75 border border-blue-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
            <ul className="mb-4">
                {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                        {iconMapping[feature] || <FaCheckCircle className="text-green-500 mr-2" />}
                        {feature}
                    </li>
                ))}
            </ul>
            <p className="text-xl font-semibold mb-4">{plan.price}</p>
            <button 
                onClick={onClick} 
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors text-center block"
            >
                Choose Plan
            </button>
        </div>
    );
};

export default PlanCard;
