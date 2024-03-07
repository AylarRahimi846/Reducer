import { useReducer,useState } from 'react'
import reducer from './Reducer/Reducer'
import './App.css'

function App() {
const[state,dispatch]=useReducer(reducer,0)
return(
  <>
  <div className='container'>
    
  <h1 className='counter'>{state}</h1>
  <button className='counter__increase' onClick={()=>dispatch({type:"increase"})} >increase</button>
  <button className='counter__decrease' onClick={()=>dispatch({type:"decrease"})} >decrease</button>

  </div>
  </>
)
}

export default App
