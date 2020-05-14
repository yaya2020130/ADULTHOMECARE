
import React, { useEffect, useState } from "react";
import API from '../utils/API';
import { Link, useParams } from "react-router-dom";
import Patient from './Patient';

import Calendar from "react-calendar"
// import DatePicker from 'react-date-picker';
// export default function LogBook({ patientData, setActivePatient }) {
//   // API.getpatient[0]Log
//   setActivePatient(patientData[0]);
//     API.getPatientLog()
//     .then(res=>setActivePatient((res.data) ))
//     .catch(err=>console.log(err))



//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col s6">
//           <table>
//             <thead>
//               <tr>
//                 <th>{patientData[0].firstname}</th>
//                 {/* <th>{patient[0].lastname}</th>
//                 <th>{patient[0].age}</th>
//                 <th>{patient[0].phone_number}</th>
//                 <th>{patient[0].lastname}</th>
//                 <th>{patient[0].address}</th>
//                 <th>{patient[0].email}</th>
//                 <th>{patient[0].isFoodEaten}</th>
//                 <th>{patient[0].patientReview}</th>
//                 <th>{patient[0].doctorAppointment}</th> */}
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td>Age</td>
//                 <td>{patientData[0].age}</td>
//               </tr>
//               <tr>
//                 <td>Email</td>
//                 <td>{patientData[0].email}</td>
//               </tr>
//               <tr>
//                 <td>Phone</td>
//                 <td>{patientData[0].phone_number}</td>
//               </tr>
//               <tr>
//                 <td>Address</td>
//                 <td>{patientData[0].address}</td>
//               </tr>
//               <tr>
//                 <td>Phone</td>
//                 <td>{patientData[0].lastname}</td>
//               </tr>
//               <tr>
//                 <td>Phone</td>
//                 <td>{patientData[0].lastname}</td>
//               </tr>
//               <tr>
//                 <td>Phone</td>
//                 <td>{patientData[0].lastname}</td>
//               </tr>

//             </tbody>
//           </table>
//           <button onClick={() => setActivePatient([])}>Go Back</button>
//         </div>
//         <div className="col s6">
//           <table>
//             <thead>
//               <tr>
//                 <th>Logs</th>
//                 <th>5/11/2020</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td>Item1</td>
//                 <td>filler</td>
//               </tr>
//               <tr>
//                 <td>Picture</td>
//                 <td>some link</td>
//               </tr>
//               <tr>
//                 <td>Jonathan</td>
//                 <td>Lollipop</td>
//                 <td>$7.00</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default function LogBook(props){
//   const [patientData, setPatientData] = useState({})
// const {id}=useParams()

// //   // Load all one patients and store them with setPatientData
// useEffect(() => {
//   API.getPatientLog(id)
//   .then (res => setPatientData(res))
//   .catch(err=>console.log(err))


// }, [])

function LogBook() {
  // created the use state to update the table
  const [patientData, setPatientData] = useState({});
  const [age, setAge] = useState('')
  const [lastName, setLastname] = useState('')
  const [firstName, setFirstName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')



  // using the api a data is collected from the database by id for a single patient
  useEffect(() => {
    loadPaitent()
  }, [])
  const { id } = useParams();
  function loadPaitent() {
    API.getPatientLog(id)
      .then(res => {
        console.log(res.data);
        setPatientData(res.data);
      })
      .catch(err => console.log(err));
  }
  



  return (



    <div className="container" >
      <div className="row">
        <div className="col s6">
          {/* <table class="striped"> */}
          <table ClassName="variant=dark">
            <thead>
              <tr>
                <th> Item</th>
                <th>value</th>
                <th> update</th>
                <th>button</th>


              </tr>


            </thead>

            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{patientData.firstname}</td>
                <td><input onChange={(e) => setPassword(e.target.value)}      ></input></td>
                <td><button>test</button></td>

              </tr>
              <tr>
                <td>Last Name</td>
                <td>{patientData.lastname}</td>
                <td><input onChange={(e) => setLastname(e.target.value)}      ></input></td>
                <td><button>Submit</button></td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{patientData.age}</td>
                <td><input onChange={(e) => setAge(e.target.value)}      ></input></td>
                <td><button>Submit</button></td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{patientData.address}</td>
                <td><input onChange={(e) => setAddress(e.target.value)}      ></input></td>
                <td><button>Submit</button></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{patientData.phone_number}</td>
                <td><input onChange={(e) => setPhone(e.target.value)}      ></input></td>
                <td><button>Submit</button></td>
              </tr>
              <tr>
                <td>Food</td>
                <td>{patientData.isFoodEaten}</td>
                <td>
                  <label><input class="with-gap" name="group3" type="radio" checked /><span>True</span></label></td>
              </tr>
              <tr>
                <td>patientReview</td>
                <td>{patientData.patientReview}</td>
                <td><textarea id="textarea1" class="materialize-textarea" ></textarea></td>
                <td><button>Submit</button></td>
              </tr>
              <tr>
                <td>Doctors Appointment</td>
                <td>{patientData.doctorAppointment}</td>
                <td><Calendar onChange={(e) => setDate(e.target.value)} /></td>
              </tr>



            </tbody>
          </table>
          {/* <button onClick={() => setActivePatient([])}>Go Back</button> */}

          <Link to="/patient">
            <button>go back</button>
          </Link>


        </div>
        <container className="col s6">
          <table>
            <thead>
              <tr>
                <th>Logs</th>
                <th>5/11/2020</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Item1</td>
                <td>filler</td>
              </tr>
              <tr>
                <td>Picture</td>
                <td>some link</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$7.00</td>
              </tr>
            </tbody>
          </table>
        </container>
      </div>


    </div>
  )
}
export default LogBook;
