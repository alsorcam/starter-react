import React from 'react';

import { withTranslation } from 'react-i18next';

function Translations({ t, i18n }) {
  return (
    <div className="demo-section">
      <h2>Translations</h2>
      <div className="d-flex">
        <button className="btn btn-sm btn-info mr-1" onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button className="btn btn-sm btn-warning" onClick={() => i18n.changeLanguage('es')}>ES</button>
      </div>
      <div className="d-flex flex-column mt-3">
        <p>{t('demo.helloWorld')}</p>
        <p>{t('demo.phrase')}</p> 
      </div>
    </div>
  );
}

export default withTranslation()(Translations);
