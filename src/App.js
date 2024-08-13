function App() {
    return ( 
    <h1>Hello do compnente App</h1> // Só pode retornar um elemento Pai
    //  <p>Impossível de ter mais um elemento pai</p> 
    )
}

// O que funcionaria seria:

// function App() {
//     return (
//         <>
//          <h1>Hello do compnente App</h1>
//          <p 2 Elementos filhos de uma tag vazia, que ao entrar no html irá sumir</p> 
//         </>
//     )
// }

// Alguns atributos são escritos diferentes no jsx, como class vira clasName, label seria htmlFor

// Algo simples sem JSX, usando puro Javascript:
// import React from 'react'

// function App() {
//     return React.createElement('div', { className: 'coitnainer' }, React.createElement('h1', {}, 'My App'))
// }

export default App