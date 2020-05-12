import React, {useState} from 'react';
import Secound from './Secound';
import Log from './LogBook'

export default ({data})=>{
  const [activePatient, setActivePatient] = useState(null)

  return <>
    <div >
      <h1>HELLO WORLD</h1>
    </div>
    <div className='row'> 
    {activePatient ? <Log patient ={activePatient} setActivePatient={setActivePatient}/> : data.map(a=> <div onClick={()=>setActivePatient(a)}><Secound props={a}/></div>)}
    </div>
  </>
}

