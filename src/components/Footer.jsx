import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  // Footer component displays the copyright information.
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Aphichit Seesuea. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
