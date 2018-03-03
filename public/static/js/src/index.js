import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import '../css/main.css';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import Store from './store';
import App from './app';

render((<Provider store={Store}>
            <App/>
        </Provider>),document.getElementById('root'))
