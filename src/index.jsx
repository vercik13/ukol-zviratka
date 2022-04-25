import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {/* zde budou jednotlivé komponenty */}
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
