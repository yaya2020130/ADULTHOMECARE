import React from 'react';
import API from '../../utils/API'

export default function Log({ patient, setActivePatient }) {
  // API.getPatientLog
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <table>
            <thead>
              <tr>
                <th>{patient.firstname}</th>
                <th>{patient.lastname}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Age</td>
                <td>{patient.age}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{patient.email}</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$7.00</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setActivePatient(null)}>Go Back</button>
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
