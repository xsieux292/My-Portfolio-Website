import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../assets/my_photo.JPG';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('hero.greeting')}</span>
              <span className="block text-indigo-600">{t('hero.name')}</span>
            </h1>
            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
              {t('hero.description')}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  {t('hero.cta')}
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  {t('hero.contact')}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 relative">
            <img
              className="w-full h-full object-cover rounded-xl shadow-xl"
              src={heroImage}
              alt="Aphichit Seesuea"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
