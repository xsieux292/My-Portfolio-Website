import React from 'react';
import { useLanguage } from '../context/LanguageContext';

import { contacts } from '../data/contacts';

const Contact = () => {
  // Contact component displays contact information and social links.
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target={contact.name === 'Email' ? undefined : '_blank'}
              rel={contact.name === 'Email' ? undefined : 'noreferrer'}
              className="flex flex-col items-center text-slate-600 hover:text-indigo-600 transition-colors group"
            >
              <div className="p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="h-8 w-8" fill={contact.fill} viewBox="0 0 24 24" stroke={contact.stroke} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={contact.d} fillRule={contact.fillRule} clipRule={contact.clipRule} />
                </svg>
              </div>
              <span className="mt-3 text-lg font-medium">{contact.name}</span>
              <span className="text-sm text-slate-500">{contact.detail}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
