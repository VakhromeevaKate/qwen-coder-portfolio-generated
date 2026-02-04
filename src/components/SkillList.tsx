import React from 'react';

interface SkillListProps {
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Навыки</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;