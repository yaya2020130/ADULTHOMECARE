import React ,{useState,useEffect}from 'react'
import API  from '../../utils/API'
function DetailPage() {
  const [patientState,setPatienState]=useState([]);
  useEffect(()=>{
    loadPaitent()
  }, [])
  function loadPaitent(){
    API.getAllPatients().then(res =>console.log((res)) )
  }
// function DetailPage({patient}) {
//   const [patientState,setPatienState]=useState([]);
//   useEffect(()=>setPatienState(patient), [patient])
  return (
    <div>
      <table>
        <thead>
          <tr>
          <th></th>
          <th>{patienState.firstname}</th>
            <th>{patienState.lastname}</th>
            <th>{patienState.phone_number}</th> 
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