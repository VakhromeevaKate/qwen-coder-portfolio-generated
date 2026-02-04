import React from 'react';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import ProjectCard from './components/ProjectCard';
import SkillList from './components/SkillList';

const App: React.FC = () => {
  const skills = [
    'React / Next.js',
    'TypeScript',
    'Tailwind CSS',
    'HTML5 / CSS3',
    'Git / GitHub',
    'REST API',
    'Jest / Testing Library',
  ];

  const projects = [
    {
      id: 1,
      title: 'Task Manager',
      description: 'Приложение для управления задачами с возможностью добавления, редактирования и удаления задач.',
      demoUrl: '#',
      githubUrl: 'https://github.com/vasyaivanov/task-manager',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Интерактивный дашборд погоды с использованием OpenWeather API и картой местоположения.',
      demoUrl: '#',
      githubUrl: 'https://github.com/vasyaivanov/weather-app',
    },
    {
      id: 3,
      title: 'E-commerce Landing',
      description: 'Адаптивный лендинг интернет-магазина с корзиной и каталогом товаров.',
      demoUrl: '#',
      githubUrl: 'https://github.com/vasyaivanov/ecommerce-landing',
    },
    {
      id: 4,
      title: 'Crypto Tracker',
      description: 'Приложение для отслеживания цен на криптовалюты в реальном времени.',
      demoUrl: '#',
      githubUrl: 'https://github.com/vasyaivanov/crypto-tracker',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Простая платформа для блогеров с поддержкой Markdown и комментариев.',
      demoUrl: '#',
      githubUrl: 'https://github.com/vasyaivanov/blog-platform',
    },
    {
      id: 6,
      title: 'Quiz App',
      description: 'Интерактивное приложение для прохождения тестов с таймером и подсчётом баллов.',
      demoUrl: '#',
      githubUrl: 'https://github.com/vasyaivanov/quiz-app',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero / About */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Василий Иванов</h1>
          <p className="text-xl text-gray-600 mt-2">Frontend-разработчик</p>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          Более 3 лет опыта в создании современных веб-приложений с использованием React и TypeScript.
          Увлекаюсь чистым кодом, UX/UI и автоматизацией процессов разработки.
        </p>

        <SkillList skills={skills} />

        <ContactCard
          email="vasya.ivanov@example.com"
          phone="+7 (999) 123-45-67"
          linkedin="https://linkedin.com/in/vasyaivanov"
          github="https://github.com/vasyaivanov"
          telegram="https://t.me/vasya_ivanov_dev"
        />
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Мои проекты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;