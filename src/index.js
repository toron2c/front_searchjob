import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import AppRegistration from "./components/RegistrationApp/AppRegistration";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import {Provider, useSelector} from "react-redux";
import Loader from "./loader/loader";
import styled from "styled-components";
import App from "./components/App/App";
import { save, load } from "redux-localstorage-simple"

const  createStoreWithMiddleware
    = compose(applyMiddleware(thunk, save()))( createStore )

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStoreWithMiddleware(
    rootReducer,
    load()
)

const IndexApp = styled.div``


function Index() {
    const load = useSelector(state => state.auth.load);
    const auth = useSelector(state=> state.auth.auth.isAuth);
    return (<IndexApp>
        <div>
            {load && <Loader />}
        </div>

        {auth ? <App /> : <AppRegistration/>}
            </IndexApp>)
}

root.render(

  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <Index />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
