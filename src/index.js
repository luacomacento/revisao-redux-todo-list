import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

// Um passo fundamental para poder utilizar as informações do Redux nos seus componentes React é encapsular todos eles dentro de um componente <Provider>. Note que isso é muuuuuito parecido com o que você já faz ao utilizar Rotas, precisando sempre encapsular o <App> num <BrowserRouter>
// Esse Provider vem, como sempre, da biblioteca "react-redux" (note a importação lá em cima).
// Ele recebe uma única prop, a store, que neste caso é aquela que criamos lá na pasta ./redux/store (veja a importação). Isso permite que o <App> e tudo que esteja dentro dele tenha acesso à nossa Store, e esse acesso é ESSENCIAL para que o connect()() funcione.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
