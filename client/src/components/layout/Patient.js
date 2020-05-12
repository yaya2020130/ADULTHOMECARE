import React, { useState } from 'react';
import Secound from './Secound';
import Log from './LogBook'

export default ({ data }) => {
  // const [activePatient, setActivePatient] = useState(null)
  const [activePatient, setActivePatient] = useState([])
  return <>
    <div >
      <h1>HELLO WORLD</h1>
    </div>
    <div className='row'>
      {activePatient.length ? (
        <Log patient={activePatient} setActivePatient={setActivePatient} />
      ) : (
          data.map(patientData => (
            <Secound
              patientData={patientData}
              setActivePatient={setActivePatient}
            />
          ))
        )}
    </div>
  </>
}

