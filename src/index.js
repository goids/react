import React from 'react'; //importar react
import ReactDom from 'react-dom'; //importar React DOM para visualizar los elemetos
import App from './containers/App'; //mi container

ReactDom.render(<App />, document.getElementById('app')); //render, recibe dos paramentros, el componente y el elemento donde va a ingresar el componente en el html