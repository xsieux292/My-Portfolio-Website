import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  // About component displays information about the user, including skills and goals.
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 bg-slate-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
              {t('about.subtitle')}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-8/10">
            {/* Skills */}
             <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-slate-900">
                      {t('about.skillsTitle')}
                    </p>
                    <ul className="mt-3 text-base text-slate-500 list-disc list-inside">
                      {t('about.skillsDesc').map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                      ))}
                    </ul>
                  </div>
                </div>
             </div>
             {/* Goals */}
             <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-slate-900">
                      {t('about.goalsTitle')}
                    </p>
                    <p className="mt-3 text-base text-slate-500">
                      {t('about.goalsDesc')}
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
