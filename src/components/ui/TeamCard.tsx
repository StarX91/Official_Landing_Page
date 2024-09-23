import React from 'react';

// Define the structure of the card content with props
interface TeamCardProps {
  imgSrc: string;
  name: string;
  title: string;
  description: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imgSrc, name, title, description, email }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imgSrc} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600 mb-2">{title}</p>
          <p className="text-gray-700">{description}</p>
          <p className="text-blue-500 mt-2">{email}</p>
          <button className="mt-4 w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
