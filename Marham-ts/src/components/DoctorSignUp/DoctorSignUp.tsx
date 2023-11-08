import Country from "../Country_Code/country";
import React, { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



library.add(faEye,faEyeSlash)


export default function DoctorRegister(){


  const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

    // function togglePasswordVisibility(e) {
    //   e.preventDefault();
    //   setIsPasswordVisible((prevState) => !prevState);
    // }

    function togglePasswordVisibility(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      setIsPasswordVisible((prevState) => !prevState);
    }

    const [doctor_First, setDoctor_First] = useState('');
    const [doctor_Last, setDoctor_Last] = useState('');
    const [doctor_Email,setDoctor_Email] = useState('');
    const [doctor_Phone,setDoctor_Phone] = useState('');
    const [doctor_Password, setDoctor_Password] = useState('');
    
    const storedSelectedCode = localStorage.getItem('selectedCode');

    const [doctor_reg_gender, setDoctorRegGender] = useState<string>(''); 
    


    const Post_Doctor_info_into_db = async () => {
        try {
          const response = await fetch('http://localhost:4000/post_doctor_registration_details', {
            method: 'POST',
            body: JSON.stringify({
             
              doc_reg_first:doctor_First,
              doc_reg_last:doctor_Last,
              doc_reg_email:doctor_Email,
              doc_reg_phone:doctor_Phone,
              doc_reg_password:doctor_Password,
              doc_reg_code:storedSelectedCode,
              doc_reg_gender:doctor_reg_gender
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


      const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoctorRegGender(event.target.id);
      };


      const handle_Submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        await Post_Doctor_info_into_db();
    
       navigate('/DocLogin')
      };


    return(
        <div className="flex flex-row w-full h-full mt-3 bg-white maindiv">


{/* image div      */}
<div className="flex justify-center w-1/2 h-screen max-md:w-2/3 max-sm:hidden">
  <div className="w-5/6 mt-12 bg-purple-400 h-3/4 max-md3:mt-[76px] max-md3:w-full max-md3:h-3/4 max-md:mt-10 max-md:h-3/5 max-lg:mt-[74px] max-xl:mt-[78px] max-2xl:mt-20  max-md2:mt-20  max-md1:mt-[75px]  " >
    
{/* <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full"/>   */}

    <img src="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" className="h-full w-full"/>

  </div>
</div>

{/* image div close */}


            
<div className="flex flex-row w-1/2 h-full mt-3 max-md3:w-3/4 max-md:w-3/5 max-sm:w-full " >





    <div className="flex items-center justify-center p-12 ml-auto mr-auto max-md:w-full max-md:p-3 ">


        

  <div className="mx-auto w-full max-w-[550px]   max-md:w-[540px]   ">

    <form action="null" method="POST"   className="flex flex-col space-y-7 max-sm:space-y-3 max-md3:space-y-5 max-md:space-y-4 ">



    <div className="flex flex-wrap justify-center -mx-3 max-sm:ml-auto max-sm:mr-auto ">
        
       <h1 className="text-[40px] text-blue-400 mr-auto font-bold max-md:text-[35px] max-triplesmall:text-[30px] max-md:ml-8" >Not a Doctor?</h1>
        
      </div>



      <div className="flex flex-wrap pt-4 -mx-4 max-md:mx-0 max-sm:pt-4">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-4">
            <label
              htmlFor="fName"
              className="absolute ml-5 text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Enter Your First Name"
              className="w-full rounded-md border border-[#e0e0e0] placeholder:text-xs placeholder:text-blue-400  mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setDoctor_First(e.target.value)}
            />
          </div>

        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="lName"
              className="absolute ml-5 text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Enter Your Last Name"
              className="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setDoctor_Last(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 max-md:mx-0 ">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-4">
            <label
              htmlFor="fName"
              className="absolute ml-5 text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              Email
            </label>
            <input
              type="email"
              name="fName"
              id="fName"
              placeholder="Enter Your Email"
              className="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setDoctor_Email(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="lName"
              className="absolute ml-5 text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              Phone 
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Enter Your Phone Num"
              className="w-full rounded-md border placeholder:pl-2 pl-24 placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setDoctor_Phone(e.target.value)}
           />
            <Country/>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap items-center justify-center -mx-3 max-md:mx-0 ">
        <div className="w-full px-3 sm:w-1/2 ">

        {/* <div className="mb-0 ">
        <label className="block mb-5 text-base font-medium text-blue-400">
          Gender
        </label>
        <div className="flex items-center space-x-6 max-md3:space-x-4 max-sm:space-x-8">
          
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="w-5 h-5 max-md3:h-4 max-md3:w-4"
            />
            <label
              htmlFor="radioButton1"
              className="pl-2 text-base font-medium text-blue-400 max-md3:text-sm"
            >
              Male
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="w-5 h-5 max-md3:h-4 max-md3:w-4"
            />
            <label
              htmlFor="radioButton2"
              className="pl-2 text-base font-medium text-blue-400 max-md3:text-sm"
            >
              Female
            </label>
          </div>
          
        </div>
      </div> */}


<div className="mb-0">
      <label className="block mb-5 text-base font-medium text-blue-400">Gender</label>
      <div className="flex items-center space-x-6 max-md3:space-x-4 max-sm:space-x-8">
        <div className="flex items-center">
          <input
            type="radio"
            name="gender"
            id="Male"
            value="Male"
            checked={doctor_reg_gender === 'Male'}
            className="w-5 h-5 max-md3:h-4 max-md3:w-4"
            onChange={handleGenderChange}
          />
          <label
            htmlFor="Male"
            className={`pl-2 text-base font-medium text-blue-400 max-md3:text-sm`}
          >
            Male
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="gender"
            id="Female"
            value="Female"
            checked={doctor_reg_gender === 'Female'}
            className="w-5 h-5 max-md3:h-4 max-md3:w-4"
            onChange={handleGenderChange}
          />
          <label
            htmlFor="Female"
            className={`pl-2 text-base font-medium text-blue-400 max-md3:text-sm`}
          >
            Female
          </label>
        </div>
      </div>
      <p>{doctor_reg_gender}</p>
    </div>










        </div>

        <div className="w-full px-3 sm:w-1/2 max-sm:mt-6 ">
       

<div className="">
         

<div className="container relative w-full mx-auto ">
<label
              htmlFor="fName"
              className="absolute ml-5 text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider">
                Password</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md" 
        onChange={(e) => setDoctor_Password(e.target.value)}
        />
        
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
       {isPasswordVisible ?  <FontAwesomeIcon icon="eye-slash"  className='mt-4'/> :  <FontAwesomeIcon icon="eye"  className='mt-4'/>}
       {/* size="md" */}
      </button>
    </div>


    
     
          </div>

         
        </div>

{/* gender */}


        
      </div>




      <div className="flex flex-wrap pt-4 max-md:mx-0 max-sm:pt-4 justify-center items-center flex-row">
  <div className="w-full flex justify-center"> 
    <label className="flex cursor-pointer gap-2">
      <input type="checkbox" className="checkbox mt-1"/>
      <span className="text-blue-400">Keep me Logged in</span>
    </label>
  </div>
</div>

    
    
    
     
      <div className="w-full">
        <button
          className="hover:shadow-form rounded-full mt-3 max-sm:py-2 max-md3:mt-3 w-full bg-blue-600 py-2.5 px-10 text-center text-base font-semibold text-white outline-none"
       onClick={handle_Submit}
       >
          Sign Up
        </button>
      </div>
      


      
      <div className="flex flex-row w-full ml-4">
      
     <p className="ml-auto mr-auto font-semibold text-blue-400 max-md:pt-2 mt-4 max-md:ml-20 max-sm:ml-32 max-xs:ml-16 max-doublesmall:ml-12 max-fourthsmall:ml-8 max-fifthsmall:ml-4">Already have an account?<Link to="/DocLogin"  className="ml-2 text-blue-400 underline cursor-pointer text-semibold hover:text-blue-950">Log In</Link></p>
      </div>

      
    </form>
  </div>


</div>




    
</div>
        


















        </div>
    )

}