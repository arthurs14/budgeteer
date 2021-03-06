import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

import App from './Components/App';

const root = document.querySelector('#root');
render(<Provider store={ store }><App /></Provider>, root);
