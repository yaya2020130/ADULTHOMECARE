import React,{useState,useEffect} from 'react'
import DetailPage from './components/layout/DetailPage'


function RecordPage() {
  const [playerState,setPlayerState]=useState([])
  return (
    <div>


     <DetailPage patient={patientState}/> 
    </div>
  )
}
export default RecordPage;