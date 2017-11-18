import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectPhase from './scenes/SelectPhase';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SelectPhase />, document.getElementById('root'));
registerServiceWorker();
