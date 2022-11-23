
import React from 'react';
import  ReactDOM  from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './sass/style.css'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { getBlogsFromDatabase } from './actions/blogAction';
import './firebase/firebaseConfig'
const store = configureStore();

const app = (
    <Provider store={store}> 
    <AppRouter/>
    </Provider>
  
)

ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(app, document.getElementById('root'));
})


reportWebVitals();
