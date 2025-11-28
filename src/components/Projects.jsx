import React from 'react';
import { useLanguage } from '../context/LanguageContext';


const Projects = () => {
  // Projects component displays a list of projects with descriptions and links.
  const { t } = useLanguage();
  
  // Array of project data retrieved from translations
  const projects = t('projects.items');

  return (
    <section id="projects" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            {t('projects.subtitle')}
          </p>
        </div>
        <div className="mt-12 grid gap-8 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="shrink-0">
                <img className="h-64 w-full object-cover" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={project.link} target="_blank" className="block mt-2">
                    <p className="text-xl font-semibold text-slate-900">{project.title}</p>
                    <p className="mt-3 text-base text-slate-500">{project.description}</p>
                  </a>
                </div>
                <div className="mt-6">
                  <a href={project.link} target="_blank" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                    {t('projects.learnMore')} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
