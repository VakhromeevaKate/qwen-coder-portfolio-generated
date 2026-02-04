import React from 'react';

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    { name: 'Обо мне', href: '#about' },
    { name: 'Портфолио', href: '#portfolio' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">В. Иванов</div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;