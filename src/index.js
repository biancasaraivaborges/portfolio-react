//Esse "index.js" é o que chamamos de bootstrap, o ponto de entrada. 
//Esse é o primeiro arquivo que vai ser executado e que vai renderizar o primeiro componente e iniciar um movimento em cascata.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//o React faz o import do React DOM e cria o root onde vai ficar o componente principal da aplicação
//e o que passamos como argumento para esse createRoot é algo que estamos acostumados, um seletor document.getElementByid, 
//então alguém procurou um elemento com o id root em algum lugar e vamos descobrir daqui a pouco onde é.
const root = ReactDOM.createRoot(document.getElementById('root'));
//chama o método render
//quando fizer o build em ambiente de dev esse StrictMode vai ajudar a prevenir errors e ter mensagens de erros mais amigáveis
root.render(
  <React.StrictMode>
    <App />
    {/* Renderizou o componente App que nada mais é do que o App.js */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//primeiro arquivo que vai ser executado é esse aqui