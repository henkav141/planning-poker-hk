import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainSceneContainer from './scenes/MainSceneContainer';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
ReactDOM.render(
    <BrowserRouter>
        <MainSceneContainer />
    </BrowserRouter>
    , document.getElementById('root')
);
