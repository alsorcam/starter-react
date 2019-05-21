import React from 'react';
import Translations from './Translations';
import ModalDialog from './ModalDialog';
import BlockScreen from './BlockScreen';

function Demo() {
  return (
    <div id="Demo" className="full-page container-fluid bg-light">
      <h1 className="d-flex justify-content-center py-3 text-info">DEMO</h1>
      <Translations />
      <ModalDialog />
      <BlockScreen />
    </div>
  );
}

export default Demo;