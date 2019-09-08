import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ContentComponents from './components/contentComponents';

ReactDOM.render(<ContentComponents />, document.getElementById('root'))

serviceWorker.unregister();


