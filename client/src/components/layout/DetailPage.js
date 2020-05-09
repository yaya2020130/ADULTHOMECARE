import React from 'react'
import { EmptyResultError } from 'sequelize/types';

 function DetailPage() {
  return (
    <div>
          <table>
        <thead>
          <tr>
              <th>name</th>
              <th>address</th>
              <th>emer.contact</th>
              <th>bed sheet changed</th>
              <th>medicine given</th>
              <th>family visited</th>
          </tr>
        </thead>

        <tbody>
          <tr>
           <td>{name}</td>
        <td>{address}</td>
        <td>{emer.contact}</td>
        <td>{bedsheetChanged}</td>
        <td>{medicineGiven}</td>
        <td>{familyVisited}</td>
        
          </tr>
         
        </tbody>
      </table>
    </div>
  )
}
export default DetailPage;