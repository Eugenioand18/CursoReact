import React from 'react'
import ReactDOM from 'react-dom/client'
import  {App} from './App'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

// los componentes se deben colocar siempre en PascalCase
//De lo contrario no renderiza los elementos
/* const SpecialButton = ({text}) =>{
  return (
    <button>{text}</button>
  )
} */



root.render(
  <React.Fragment>
    <App></App>
  </React.Fragment>
   
 
)