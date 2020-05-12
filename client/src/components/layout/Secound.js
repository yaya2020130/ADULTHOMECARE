import React from 'react';

function Secound({ patientData, setActivePatient }) {
  console.log(patientData)
  return (

    <>



      <div class="col s12 m6 l4">
        <div class="card">
          <h5> <span class="card-title">{patientData.firstname} {patientData.lastname}</span></h5>
          <div class="card-image">
            <img src={patientData.url || "https://previews.123rf.com/images/dtiberio/dtiberio1801/dtiberio180100202/93064324-stressed-old-person.jpg"} alt="ty" />

            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

          </div>

          <div
            className="card-content"
            onClick={() => setActivePatient([patientData])}
          >
            <p>email - {patientData.email}</p>
            <p>phone - {patientData.phone_number}</p>
          </div>
        </div>
      </div>
    </>

  );
}
export default Secound;