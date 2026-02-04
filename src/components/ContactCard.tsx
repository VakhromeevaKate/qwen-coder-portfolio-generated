import React from 'react';

interface ContactCardProps {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  telegram: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  email,
  phone,
  linkedin,
  github,
  telegram,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Контакты</h3>
      <ul className="space-y-2 text-gray-700">
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </li>
        <li>
          <strong>Телефон:</strong>{' '}
          <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-blue-600 hover:underline">
            {phone}
          </a>
        </li>
        <li>
          <strong>Соцсети:</strong>{' '}
          <div className="flex space-x-4 mt-1">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href={telegram} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Telegram
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;