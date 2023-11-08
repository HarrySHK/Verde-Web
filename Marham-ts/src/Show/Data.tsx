//Doctors Data



import React, { useState, useEffect } from "react";


export default function Show_All_Doctor(){



    const [error, setError] = useState('');
    const [doctorDetail, setDoctorsDetail] = useState([]);
  
    useEffect(() => {
        get_Doctor_Details();
    }, []);
  
    const get_Doctor_Details = async () => {
      try {
        const response = await fetch("http://localhost:4000/get_doctor_details");
        if (response.status === 200) {
          const data = await response.json();
          setDoctorsDetail(data);
        } else {
          setError('Error fetching doctors data.');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while fetching doctors data.');
      }
    };



    // doc_d_complete_name, doc_d_gender, doc_d_phone,
    //  doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration,
    //   doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,
    //   doc_d_payout_mode,doc_d_payment_password,
    // doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email 


    

    return(
        <div className="flex justify-center text-black bg-white showing_doctors">
        <div className="mt-16 mb-16 bg-white border-2 border-black">
      {/* <p>Data from the 0th index:</p> */}
      {doctorDetail.length > 0 ? (
        <p>
          {Object.keys(doctorDetail[0]).map((key) => (
            <span key={key}>
              <strong>{key}:</strong> {doctorDetail[0][key]}
              <br />
            </span>
          ))}
        </p>
      ) : (
        <p>No data available</p>
      )}
      </div>


    </div>
    )
}