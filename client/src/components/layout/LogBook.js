import React from 'react';
import API from '../../utils/API'

export default function LogBook({ patient, setActivePatient }) {
  // API.getpatient[0]Log
  console.log(patient[0]);
    // API.getpatient[0]Log().then(({ data }) => {
    //   this.setState({ data })
    //   console.log(data)
    // })
  
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <table>
            <thead>
              <tr>
                <th>{patient[0].firstname}</th>
                <th>{patient[0].lastname}</th>
                <th>{patient[0].age}</th>
                <th>{patient[0].phone_number}</th>
                <th>{patient[0].lastname}</th>
                <th>{patient[0].address}</th>
                <th>{patient[0].email}</th>
                <th>{patient[0].isFoodEaten}</th>
                <th>{patient[0].patientReview}</th>
                <th>{patient[0].doctorAppointment}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Age</td>
                <td>{patient[0].age}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{patient[0].email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{patient[0].phone_number}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{patient[0].address}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{patient[0].lastname}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{patient[0].lastname}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{patient[0].lastname}</td>
              </tr>
              
            </tbody>
          </table>
          <button onClick={() => setActivePatient([])}>Go Back</button>
        </div>
        <div className="col s6">
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
        </div>
      </div>
    </div>
  )
}
