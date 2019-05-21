import React from 'react';
import Translations from './Translations';
import Dialog from './Dialog';
import FakeBackend from './FakeBackend';
import BlockScreen from './BlockScreen';

const styles = {
  card: {
    marginBottom: '1rem'
  }
};
export default class Demo extends React.Component {
  render() {
    return (
      <div id="Demo" className="container">
        <h1 className="d-flex justify-content-center py-3 text-white">DEMO</h1>
        <Translations styles={styles}/>
        <Dialog styles={styles} />
        <FakeBackend styles={styles} />
        <BlockScreen styles={styles} />
      </div>
    );
  }
}
