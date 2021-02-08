import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useKeyEvent from '../src/index';

const App = () => {
  const [pressed, setPressed] = React.useState(false);

  useKeyEvent('Enter', () => {
    setPressed((v) => !v);
  });

  return (
    <div>
      <p>Press the enter key!</p>

      {pressed ? 'The enter key was pressed!' : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
