import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Formation from '../src';

const App = () => {
  return (
    <div>
      <Formation formation="4-1-2-3" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
