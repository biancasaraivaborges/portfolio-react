/*Esse "index.js" é o que chamamos de bootstrap da App, o ponto de entrada para criar o componente.
É o primeiro arquivo que vai ser executado e que vai renderizar o primeiro componente e iniciar um movimento em cascata.*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//o React faz o import do React DOM (Document Object Model) e cria o root onde vai ficar o componente principal da aplicação
//e o que passamos como argumento para esse createRoot é algo que estamos acostumados, um seletor document.getElementByid, 
//então alguém procurou um elemento com o id root em algum lugar e vamos descobrir daqui a pouco onde é.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

//Chama o método render que é um método do React
//React.StrictMode é para ajudar pq ele em produção não vai fazer nada, mas em ambiente dev vai ajudar */}
//a prevenir errors e ter mensagens de erros mais amigáveis 

/*<App />
    {/* Renderizou o componente App que nada mais é do que o App.js */

