import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Country from '../Country_Code/country'
import { ChangeEvent } from 'react';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Doc_DashBoard = () => {
    const navigate = useNavigate();
    const genders = ['Male', 'Female']
    const experiences = ['Two', 'Three', 'Four']
    const [menu, setMenu] = useState(false)
    const [menu1, setMenu1] = useState(false)
    const [gender, setGender] = useState('Select Your Gender')
    const [experience, setExperience] = useState('Years in Medical Practice')


    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
    };


    const changeText1 = (e: any) => {
        setMenu(false)
        setGender(e.target.textContent)
    }
    const changeText2 = (e: any) => {
        setMenu1(false)
        setExperience(e.target.textContent)
    }



    // API

    interface DoctorData {
        doc_reg_id: number;
        doc_reg_first: string;
        doc_reg_last: string;
        doc_reg_email: string;
        doc_reg_phone: string;
        doc_reg_password: string;
        doc_reg_code: string;
        doc_reg_gender: string;
    }

    const [doctorsData, setDoctorsData] = useState<DoctorData[]>([]);


    const [error, setError] = useState('');
    //   const [doctorsData, setDoctorsData] = useState([]);


    useEffect(() => {
        get_Doctor_Registration_data();
    }, []);

    const get_Doctor_Registration_data = async () => {
        try {
            const response = await fetch("http://localhost:4000/get_docs");

            if (response.status === 200) {

                const data = await response.json();

                setDoctorsData(data);

                console.log(data[0])
            } else {
                setError('Error fetching doctors data.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while fetching doctors data.');
        }
    };





    // Posting





    const Post_Doctor_info_into_db = async () => {
        try {
          const response = await fetch('http://localhost:4000/post_doctors_details', {
            method: 'POST',
            body: JSON.stringify({
             
                doc_d_complete_name:docCompleteName,
                doc_d_gender:docGender,
                doc_d_email:docEmail,
                doc_d_phone:docPhone,
                 doc_d_city:docCity,
                  doc_d_country:doc_Country,
                   doc_d_department:docDepartment,
                    doc_d_experience:docExperience,
                     doc_d_registration:docRegistration, 
                     doc_d_qualification:docQualification,
                     doc_consultation_mode:docConsultationMode,
                     doc_d_regular_fee:docRegularConsultationFee,
                     doc_d_disc_fee:docDiscountedConsultationFee,
                     doc_d_booking_gender:gender,
                     doc_d_payout_mode:docCategoryMode,
                     doc_d_payment_password:docPayoutPassword,
                     doc_d_add1:docAddressLine1,
                     doc_d_add2:docAddressLine2,
                     doc_d_postal_code:docPostalCode,
                     doc_d_services:docServices,
                     doc_d_specialization:docSpecialization,
                     doc_d_bio:docBiography,
            }),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);  
    
    
        } catch (err) {
          console.error(err);
        }
      }




      const my_handle_Submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        await Post_Doctor_info_into_db();
    
       navigate('/ShowDocs')
      };





      const [docCompleteName, setDocCompleteName] = useState("")
      const [docGender, setDocGender] = useState("")
      const [docEmail, setDocEmail] = useState("")
      const [docPhone, setDocPhone] = useState("")





    const [docCity, setDocCity] = useState("")
    const [doc_Country, setDocCountry] = useState("")
    const [docDepartment, setDocDepartment] = useState("")
    const [docExperience, setDocExperience] = useState(0)
    const [docRegistration, setDocRegistration] = useState("")
    const [docQualification, setDocQualification] = useState("")


    const storedSelectedCode = localStorage.getItem('selectedCode');

    const [docConsultationMode, setDocConsultationMode] = useState<string>('');


    const handleConsultationMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocConsultationMode(event.target.id);
    };


    const [docRegularConsultationFee, setDocRegularConsultationFee] = useState(0)
    const [docDiscountedConsultationFee, setDocDiscountedConsultationFee] = useState(0)

    

   const [docCategoryMode, setDocCategoryMode] = useState<string>('');

   const handleCategoryMode = (event: React.ChangeEvent<HTMLInputElement>) => {
       setDocCategoryMode(event.target.id);
   };

   const [docPayoutPassword, setDocPayoutPassword] = useState("")


   const [docAddressLine1, setDocAddressLine1] = useState("")
   const [docAddressLine2, setDocAddressLine2] = useState("")
   const [docPostalCode, setDocPostalCode] = useState("")



   const [docServices, setDocServices] = useState("")
   const [docSpecialization, setDocSpecialization] = useState("")

   const [docBiography, setDocBiography] = useState("")






    return (




        //     <div>
        //     {doctorsData.length > 0 ? (
        //       <div>
        //         <p>First Name: {doctorsData[0].doc_reg_first}</p>
        //         <p>Last Name: {doctorsData[0].doc_reg_last}</p>
        //         <p>Gender: {doctorsData[0].doc_reg_gender}</p>
        //         <p>Email: {doctorsData[0].doc_reg_email}</p>
        //         <p>Phone Number: {doctorsData[0].doc_reg_phone}</p>

        //       </div>
        //     ) : (
        //       <p>No data available</p>
        //     )}

        //   </div>



        <div>
            {doctorsData.length > 0 ? (
                <div className="LogIn">


                    {/* <div>
           <p>First Name: {doctorsData[0].doc_reg_first}</p>
            <p>Last Name: {doctorsData[0].doc_reg_last}</p>
           <p>Gender: {doctorsData[0].doc_reg_gender}</p>
            <p>Email: {doctorsData[0].doc_reg_email}</p>
           <p>Phone Number: {doctorsData[0].doc_reg_phone}</p>

          </div> */}


                    <div className="flex w-full bg-white h-fit">
                        <div className="flex w-1/2 h-[680px] items-center justify-center bg-white">
                            <div className="flex flex-col w-4/5 bg-white border-2 border-blue-600 h-5/6 rounded-2xl">
                                <label className="mt-3 ml-auto mr-5 text-lg font-semibold text-blue-700 bg-yellow-400 max-lg:text-base max-md1:text-sm ">
                                    Pending Verification
                                </label>
                                <div className="flex w-24 h-24 mx-auto mt-5 bg-black rounded-full max-xl:h-20 max-xl:w-20">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="mx-auto mt-2 text-sm font-bold text-blue-700">
                                        Doctor Name
                                    </label>
                                    <label className="mx-auto mt-2 w-56 border-[2px] border-red-500 text-center text-sm text-red-500">
                                        Stop Accepting Appointments
                                    </label>
                                    <label className="mx-auto mt-2 w-48 border-[2px] border-green-400 text-center text-sm text-green-400">
                                        Share My Booking Page
                                    </label>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label className="mt-5 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                        <span className="w-full">
                                            <FontAwesomeIcon icon={faSquareCaretDown} />
                                        </span>{' '}
                                        DashBoard
                                    </label>
                                    <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                        <span className="w-full">
                                            <FontAwesomeIcon icon={faSquareCaretDown} />
                                        </span>{' '}
                                        My Profile
                                    </label>
                                    <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                        <span className="w-full">
                                            <FontAwesomeIcon icon={faSquareCaretDown} />
                                        </span>{' '}
                                        Appointments
                                    </label>
                                    <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                        <span className="w-full">
                                            <FontAwesomeIcon icon={faSquareCaretDown} />
                                        </span>{' '}
                                        My Patients
                                    </label>
                                    <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                        <span className="w-full">
                                            <FontAwesomeIcon icon={faSquareCaretDown} />
                                        </span>{' '}
                                        Schedule Slots
                                    </label>
                                    <label className="mt-2 h-8 cursor-pointer border-b-[1px] border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                        <span className="w-full">
                                            <FontAwesomeIcon icon={faSquareCaretDown} />
                                        </span>{' '}
                                        Payments & Payouts
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-start w-3/4 mb-16 bg-white">
                            <div className='flex mt-14 h-[570px] w-11/12 flex-row rounded-2xl bg-white border-2 border-blue-600 '>
                                <div className='w-1/3 h-full '>
                                    <h2 className="mt-4 ml-4 text-xl font-bold text-blue-700 text-start ">
                                        Basic Information
                                    </h2>
                                    <div className="flex flex-col mt-32 ml-8 mr-auto bg-black rounded-full h-44 w-44 max-xl:h-20 max-xl:w-20">

                                        {selectedFile && (
                                            // <div className="flex flex-col justify-center">
                                            <img className="w-full h-full rounded-full" src={URL.createObjectURL(selectedFile)} alt="Selected" />
                                            // </div>
                                        )}

                                    </div>
                                    <div className='flex flex-col mt-1 mr-auto ml-7 max-xl:h-20 max-xl:w-20'>

                                        <input type="file" className="mt-10 text-black" accept="image/*" onChange={handleFileChange} />
                                        <p className='pt-4 ml-4 text-xs text-blue-700'>Allowed JPG, PNG; Max size of 2 MB</p>
                                    </div>
                                </div>
                                <div className="w-4/5">
                                    <div className='flex flex-row justify-between mt-16'>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Complete Name"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Complete Name
                                            </label>
                                            <input
                                                type="text"
                                                name="Complete Name"
                                                id="Complete Name"
                                                placeholder="Enter Your Complete Name"
                                                value={doctorsData[0].doc_reg_first + ' ' + doctorsData[0].doc_reg_last}
                                                onChange={(e) => setDocCompleteName(e.target.value)}
                                                className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="fName"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Gender
                                            </label>
                                            <input
                                                type="text"
                                                name="fName"
                                                id="fName"
                                                placeholder="Select Your Gender"
                                                value={doctorsData[0].doc_reg_gender}
                                                onChange={(e) => setDocGender(e.target.value)}
                                                className="mt-4 w-full mr-2 rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                            <FontAwesomeIcon icon={faAngleDown} className='absolute mt-8 text-blue-800 ml-52' />
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between mt-4'>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Email"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                name="Email"
                                                id="Email"
                                                placeholder="Enter Your Email"
                                                value={doctorsData[0].doc_reg_email}
                                                onChange={(e) => setDocEmail(e.target.value)}
                                                className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Phone Number"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="Phone Number"
                                                id="Phone Number"
                                                placeholder="Enter Phone Number"
                                                value={doctorsData[0].doc_reg_phone}
                                                onChange={(e) => setDocPhone(e.target.value)}
                                                className="mt-4 w-full mr-2 rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs pl-24 placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                            <div className='absolute mt-[59px]'>
                                                <Country />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between mt-4'>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="City"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="City"
                                                id="City"
                                                placeholder="Enter Your City"
                                                onChange={(e) => setDocCity(e.target.value)}
                                                className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Country"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                name="Country"
                                                id="Country"
                                                onChange={(e) => setDocCountry(e.target.value)}
                                                placeholder="Enter Phone Country"
                                                className="mt-4 w-full mr-2 rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between mt-4'>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Department"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Department
                                            </label>
                                            <input
                                                type="text"
                                                name="Department"
                                                id="Department"
                                                placeholder="Enter Your Department"
                                                onChange={(e) => setDocDepartment(e.target.value)}
                                                className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Experience"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Experience
                                            </label>
                                            <input
                                                type="text"
                                                name="Country"
                                                id="Country"
                                                //      onChange={(e) => setDocExperience(e.target.value)}
                                                value={docExperience.toString()} // Convert the number to a string for input value
                                                onChange={(e) => setDocExperience(parseInt(e.target.value, 10))}
                                                placeholder="Years In Practice"
                                                className="mt-4 w-full mr-2 rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                            <FontAwesomeIcon icon={faAngleDown} className='absolute mt-8 text-blue-800 ml-52' />
                                            
                                        </div>

                                    </div>
                                    <div className='flex flex-row justify-between mt-4'>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Registration No."
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Registration No.
                                            </label>
                                            <input
                                                type="text"
                                                name="Registration No."
                                                id="Registration No."
                                                onChange={(e) => setDocRegistration(e.target.value)}
                                                placeholder="Enter Your Registration No."
                                                className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className='flex w-[48%]'>
                                            <label
                                                htmlFor="Qualification"
                                                className="absolute ml-5 text-sm font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                            >
                                                Qualification
                                            </label>
                                            <input
                                                type="text"
                                                name="Qualification"
                                                id="Qualification"
                                                placeholder="Enter Your Qualification"
                                                onChange={(e) => setDocQualification(e.target.value)}
                                                className="mt-4 w-full mr-2 rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-row mt-6'>
                                        <div className="my-auto text-xl font-bold text-blue-700">
                                            Note:
                                        </div>
                                        <div className="ml-4 text-sm font-semibold text-blue-700">
                                            Your Email Id will not be shared with anyone. <br />
                                            Registration No. will be printed on Prescription. Please
                                            specify the complete Registration No. Medical Qualification
                                            will be displayed under your name in doctor listing. <br />
                                            All fields are required.
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-8 flex  w-[100%] items-center justify-center ">
                                <div className="flex flex-col w-11/12 bg-white border-2 border-blue-600 rounded-2xl ">
                                    <div className="flex flex-col pl-10 space-y-6">
                                        <div>
                                            <h1 className="mt-5 text-xl font-semibold text-blue-700">
                                                Consultation Mode
                                            </h1>
                                        </div>
                                        <div className="flex gap-14" id="group1">
                                            <div className="flex gap-3">
                                                <input type="radio" id="Video Consultation" onChange={handleConsultationMode} checked={docConsultationMode === 'Video Consultation'} className="radio radio-xl" name="group1" />
                                                <p className="text-blue-700">Video Consultation</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <input type="radio" id="Clinic / Hospital visit" onChange={handleConsultationMode} checked={docConsultationMode === 'Clinic / Hospital'} className="radio radio-xl" name="group1" />
                                                <p className="text-blue-700">Clinic/ Hospital visit</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <input type="radio" id="Both" onChange={handleConsultationMode} checked={docConsultationMode === 'Both'} className="radio radio-xl" name="group1" />
                                                <p className="text-blue-700">Both</p>
                                            </div>
                                         
                                        </div>
                                       
                                    
                                        <div>
                                            <p className="mb-4 text-blue-700">
                                                Both options will be given to the patients at the time of
                                                booking. You will see the consultation mode for each.
                                                appointment on your appointment screen. <br />
                                                Video calling option will be displayed for in-person/visit
                                                appointments.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex  w-[100%] flex-col items-center justify-center ">
                                <div className="flex flex-col w-11/12 bg-white border-2 border-blue-600 rounded-2xl">
                                    <div className="flex flex-col pl-10">
                                        <div>
                                            <h1 className="mt-5 text-xl font-semibold text-blue-700">
                                                Consultation Fee
                                            </h1>
                                        </div>
                                        <div className="flex mt-4">
                                            <div className="w-2/5">
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="lName"
                                                        className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                    >
                                                        Regular Consultation Fee
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="lName"
                                                        id="lName"
                                                        placeholder="500"
                                                        value={docRegularConsultationFee.toString()} // Convert the number to a string for input value
                                                        onChange={(e) => setDocRegularConsultationFee(parseInt(e.target.value, 10))}
                                                        className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 pl-10 text-base font-medium text-blue-700 outline-none placeholder:pl-2 placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                    />
                                                    <div className="absolute ml-2 mt-[-42px] rounded-sm bg-slate-400 p-2">
                                                        <svg
                                                            className="text-xl fill-blue-700"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1em"
                                                            viewBox="0 0 320 512"
                                                        >
                                                            <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-2/5 ml-6 ">
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="lName"
                                                        className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                    >
                                                        Discounted Consultation Fee
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="lName"
                                                        id="lName"
                                                        placeholder="200"
                                                        value={docDiscountedConsultationFee.toString()} // Convert the number to a string for input value
                                                        onChange={(e) => setDocDiscountedConsultationFee(parseInt(e.target.value, 10))}
                                                        className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 pl-10 text-base font-medium text-blue-700 outline-none placeholder:pl-2 placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                    />
                                                    <div className="absolute ml-2 mt-[-42px] rounded-sm bg-slate-400 p-2">
                                                        <svg
                                                            className="text-xl fill-blue-700"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1em"
                                                            viewBox="0 0 320 512"
                                                        >
                                                            <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                                                        </svg>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <p className="mb-5 text-blue-700">
                                                We charge 30% (plus GST) as transaction fee for digital branding
                                                and platform services.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* working */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                        <div className="second_last ">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  pl-6 text-[20px] font-bold text-blue-700">
                                                    Booking Lead Time{' '}
                                                </h1>
                                            </div>

                                            <div className="w-full pt-6 pl-8 ">
                                                <div className="mb-5">
                                                    <div className="relative w-3/5 mt-4 bg-green-500">
                                                        <label
                                                            htmlFor="fName"
                                                            className="absolute ml-5 -mt-4 text-base font-medium text-blue-700 bg-white max-md3:-mt-3 max-md3:text-sm max-md3:tracking-wider"
                                                        >
                                                            Lead Team
                                                        </label>
                                                        <button
                                                            name="fName"
                                                            id="fName"
                                                            className="w-full p-4 text-xs font-semibold leading-4 text-left text-blue-700 placeholder-gray-600 bg-white border border-gray-300 rounded-tl rounded-tr"
                                                        >
                                                            {gender}
                                                            
                                                        </button>
                                                        <svg
                                                            onClick={() => setMenu(!menu)}
                                                            className={
                                                                'absolute  right-4 top-4 transform cursor-pointer ' +
                                                                (menu ? 'rotate-180' : '')
                                                            }
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.5 5.75L8 10.25L12.5 5.75"
                                                                stroke="#27272A"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <div
                                                            className={
                                                                'absolute z-10 mt-1 flex w-full flex-col justify-start bg-gray-50 text-gray-600 ' +
                                                                (menu ? 'block' : 'hidden')
                                                            }
                                                        >
                                                            {genders.map((country) => (
                                                                <div
                                                                    key={country}
                                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white"
                                                                    onClick={changeText1}
                                                                >
                                                                    {country}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <p className="flex  justify-center p-4 text-[15px] font-semibold text-blue-700 ">
                                                    Minimum Time in Advance for patients to book your
                                                    Appointments, e.g, if you set 3 hours, a patient booking at 1
                                                    PM will only see slots for 4 pm or later.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* working */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                        <div className="w-full second_last ">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    Payout{' '}
                                                </h1>
                                            </div>

                                            <div className="flex flex-row mt-4 max-smm:flex-col ">
                                                <div className="w-full px-3 max-smm:mx-auto max-smm:w-3/4 ">
                                                    <div className="">
                                                        <div className="container relative w-full mx-auto ">
                                                            <label
                                                                htmlFor="fName"
                                                                className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                            >
                                                                UPI ID
                                                            </label>
                                                            <input
                                                                placeholder="Password"
                                                                className="mt-3 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                                onChange={(e) => setDocPayoutPassword(e.target.value)}
                                                          />
                                                        </div>
                                                       
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-center w-1/2 px-3 pb-4 max-smm:mx-auto max-smm:w-3/4 max-smm:justify-start">
                                                    <div className="mb-0 ">
                                                        <div className="flex items-center mt-2 space-x-20 max-smm:mt-8 ">
                                                            <div className="flex items-center ">
                                                                <input
                                                                    type="radio"
                                                                    name="radio1"
                                                                    id="UPI"
                                                                    onChange={handleCategoryMode} checked={docCategoryMode === 'UPI'}
                                                                    className="w-5 h-5 max-md3:h-4 max-md3:w-4"
                                                                />
                                                                <label
                                                                    htmlFor="radioButton1"
                                                                    className="pl-2 text-base font-medium text-blue-700 max-md3:text-sm"
                                                                >
                                                                    UPI
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="radio"
                                                                    name="radio1"
                                                                    id="A/C transfer"
                                                                    className="w-5 h-5 max-md3:h-4 max-md3:w-4"
                                                                    onChange={handleCategoryMode} checked={docCategoryMode === 'A/C transfer'}
                                                                />
                                                                <label
                                                                    htmlFor="radioButton2"
                                                                    className="pl-2 text-base font-medium text-blue-700 max-md3:text-sm"
                                                                >
                                                                    A/C transfer
                                                                </label>
                                                               
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap justify-center p-4 pt-4 pb-8 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <p className="max-md4:pl-0  mr-auto text-[15px] font-semibold text-blue-700">
                                                    Payouts will be discussed every Sunday for Appointments
                                                    complete up to seven days prior.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* working */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto b max-md:mx-0 max-sm:pt-4 ">
                                        <div className="second_last max-md4:mx-auto max-md4:items-center ">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    Contact Details (Optional)
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap pt-4 pl-4 mx-auto max-md4:pl-0 max-md4:flex-col max-md4:justify-center">
                                                <div className="max-md4:w-full w-[32%] px-2  ">
                                                    <div className="w-full mb-4">
                                                        <label
                                                            htmlFor="addressline1"
                                                            className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                        >
                                                            Address Line 1
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="fName"
                                                            id="fName"
                                                            placeholder="Enter Your Address here"
                                                            className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white  px-6 py-3 text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                            onChange={(e) => setDocAddressLine1(e.target.value)}
                                                       />
                                                    </div>
                                                </div>
                                                <div className="max-md4:w-full w-[32%] px-2">
                                                    <div className="w-full mb-8">
                                                        <label
                                                            htmlFor="lName"
                                                            className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                        >
                                                            Address Line 2
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="addressline2"
                                                            id="lName"
                                                            placeholder="Enter Your Address here"
                                                            onChange={(e) => setDocAddressLine2(e.target.value)}
                                                            className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="max-md4:w-full max-md4:-mt-4 max-md4:mb-4 w-[32%] px-2">
                                                    <div className="mb-5">
                                                        <label
                                                            htmlFor="lName"
                                                            className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                        >
                                                            Postal Code
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lName"
                                                            id="lName"
                                                            placeholder="Enter Your Postal Code"
                                                            className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                            onChange={(e) => setDocPostalCode(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* work */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl ">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                        <div className="second_last">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    Servies and Specialization (Optional)
                                                </h1>
                                            </div>

                                            <div className="flex flex-wrap pt-4 pl-4 mx-auto">
                                                <div className="w-full px-5 sm:w-1/2">
                                                    <div className="mb-4">
                                                        <label
                                                            htmlFor="fName"
                                                            className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                        >
                                                            Services
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="fName"
                                                            id="fName"
                                                            placeholder="Enter Your Services"
                                                            className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white  px-6 py-3 text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                            onChange={(e) => setDocServices(e.target.value)}
                                                       />
                                                    </div>
                                                    
                                                </div> 
                                                <div className="w-full px-3 sm:w-1/2">
                                                    <div className="mb-5">
                                                        <label
                                                            htmlFor="lName"
                                                            className="absolute ml-5 text-base font-medium text-blue-700 bg-white max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                        >
                                                            Specialization
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lName"
                                                            id="lName"
                                                            placeholder="Enter Your Specialization"
                                                            onChange={(e) => setDocSpecialization(e.target.value)}
                                                            className="mt-4 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-blue-700 outline-none placeholder:text-xs placeholder:text-blue-700 focus:border-[#6A64F1] focus:shadow-md"
                                                        />
                                                              
                                                    </div>
                                                </div>
                                            </div>



                                            {/* working map */}

                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <p className="mr-auto  text-[15px] font-semibold text-blue-700 ">
                                                    Type and press to add new Servies and Specialization
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* work */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                        <div className="second_last">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    Education (Optional)
                                                </h1>
                                            </div>

                                            <div className="mb-6 diva">
                                                <p className="text-blue-700">
                                                    <FontAwesomeIcon
                                                        icon={faCirclePlus}
                                                        className="w-4 h-4 "
                                                        style={{ color: '#050985' }}
                                                    />{' '}
                                                    &nbsp; Add Now{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* work */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                        <div className="second_last">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    Experience (Optional)
                                                </h1>
                                            </div>

                                            <div className="mb-6 diva">
                                                <p className="text-blue-700">
                                                    <FontAwesomeIcon
                                                        icon={faCirclePlus}
                                                        className="w-4 h-4 "
                                                        style={{ color: '#050985' }}
                                                    />{' '}
                                                    &nbsp; Add Now{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* work */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                        <div className="second_last">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    Membership (Optional)
                                                </h1>
                                            </div>

                                            <div className="mb-6 diva">
                                                <p className="text-blue-700">
                                                    <FontAwesomeIcon
                                                        icon={faCirclePlus}
                                                        className="w-4 h-4 "
                                                        style={{ color: '#050985' }}
                                                    />{' '}
                                                    &nbsp; Add Now{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* work1 */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                        <div className="second_last">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    Registation (Optional)
                                                </h1>
                                            </div>

                                            <div className="mb-6 diva">
                                                <p className="text-blue-700">
                                                    <FontAwesomeIcon
                                                        icon={faCirclePlus}
                                                        className="w-4 h-4 "
                                                        style={{ color: '#050985' }}
                                                    />{' '}
                                                    &nbsp; Add Now{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Work2 */}

                                <div className="w-11/12 max-w-5xl px-2 mx-auto mt-8 bg-white border-2 border-blue-700 rounded-xl">
                                    <form
                                        action="https://formbold.com/s/FORM_ID"
                                        method="POST"
                                        className="flex flex-col rounded-md space-y-7 max-md3:space-y-5 max-md:space-y-4 max-sm:space-y-3"
                                    >
                                        <div className="flex flex-wrap w-full pt-4 mx-auto max-md:mx-0 max-sm:pt-4">
                                            <div className="flex flex-wrap justify-center pt-4 pb-4 pl-6 -mx-3 max-sm:ml-auto max-sm:mr-auto">
                                                <h1 className="mr-auto  text-[20px] font-bold text-blue-700 ">
                                                    About Me (Optional)
                                                </h1>
                                            </div>

                                            <div className="w-full px-6 py-2 pt-4 ">
                                                <div className="pb-8 ">
                                                    <label
                                                        htmlFor="fName"
                                                        className="absolute ml-7 mt-[-12px] bg-white text-base font-medium text-blue-700 max-md3:mt-1 max-md3:text-sm max-md3:tracking-wider"
                                                    >
                                                        Bibliography
                                                    </label>
                                                    <textarea
                                                        //   onChange={(e) => setContact_Query(e.target.value)}
                                                        onChange={(e) => setDocBiography(e.target.value)}
                                                        name="message"
                                                        id="message"
                                                        cols={30}
                                                        rows={9}
                                                        placeholder="Write About Yourself"
                                                        className="w-full pt-6 pl-3 text-sm text-blue-700 bg-white border-2 border-blue-700 rounded-md resize-none placeholder:text-blue-700 hover:border-blue-700 focus:border-blue-700 "
                                                    ></textarea>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </form>
                                
                                </div>

                                <div className="flex items-center w-11/12 h-16 max-w-5xl px-2 mx-auto mt-8 rounded-xl ">
                                    
                                    <div className='flex items-center justify-center w-2/3 h-full mx-auto '>
  <button onClick={my_handle_Submit} className='w-full bg-blue-800 rounded-full cursor-pointer h-2/3'>Save Changes</button>

                                    </div>


                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No data available</p>
            )}

        </div>


    )
}

export default Doc_DashBoard