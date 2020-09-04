import React from 'react';
import '../assets/styles/components/Search.scss';

//Una buena practica es no usar texto plano al HTML/JSX, es mejor pasarlo como variable para poder modificarlo con facilidad en el futuro.
const mainTitle = '¿Qué quieres ver hoy?';
const placeHolder = 'Buscar...';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{mainTitle}</h2>
    <input type='text' className='input' placeholder={placeHolder} />
  </section>
);

export default Search;
