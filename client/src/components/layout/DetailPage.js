import React ,{useState,useEffect}from 'react'


function DetailPage({patient}) {
  const [patientState,setPatienState]=useState([]);
  useEffect(()=>setPatienState(patient), [patient])
  return (
    <div>
      <table>
        <thead>
          <tr>
          <th></th>
            <th>{patientState.firstname}</th>
            <th>{patientState.lastname}</th>
            <th>{patientState.phone_number}</th>
            <th>{patientState.email}</th>

          </tr>
        </thead>

        <tbody>
          <tr>
          <td>value</td>
            <td>e</td>
            <td>e</td>
            <td>3</td>
            <td>3</td>


          </tr>

        </tbody>
      </table>
    </div>
  
  )
}
export default DetailPage;