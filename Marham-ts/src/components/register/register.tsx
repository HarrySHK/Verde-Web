import Country from "../Country_Code/country";
import React, { useEffect, useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

library.add(faEye, faEyeSlash)

export default function Register() {

  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  
  function togglePasswordVisibility(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }



  const [user_reg_first,setUser_reg_first]=useState('')
  const [user_reg_last,setUser_reg_last]=useState('')
  const [user_reg_email,setUser_reg_email]=useState('')
  const [user_reg_phone,setUser_reg_phone]=useState('')
  const [user_reg_password,setUser_reg_password]=useState('')

  const storedSelectedCode = localStorage.getItem('selectedCode');

  const [user_reg_gender, setUserRegGender] = useState<string>(''); 

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegGender(event.target.id);
  };
 


  const Post_User_Registration_info_into_db = async () => {
    try {
      const response = await fetch('http://localhost:4000/post_user_registration_details', {
        method: 'POST',
        body: JSON.stringify({
         
          user_reg_first:user_reg_first,
          user_reg_last:user_reg_last,
          user_reg_email:user_reg_email,
          user_reg_phone:user_reg_phone,
          user_reg_password:user_reg_password,
          user_reg_code:storedSelectedCode,
          user_reg_gender:user_reg_gender,
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



  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    console.log(user_reg_gender)
    console.log(storedSelectedCode)
    await Post_User_Registration_info_into_db();

   
    navigate('/login');
  };



    return(
        <div className="flex flex-row w-full h-full mt-3 bg-white maindiv">

            
<div className="flex flex-row w-1/2 h-full mt-3 max-md3:w-3/4 max-md:w-3/5 max-sm:w-full " >
    
    <div className="flex items-center justify-center p-12 ml-auto mr-auto max-md:w-full max-md:p-3 ">

  <div className="mx-auto w-full max-w-[550px]   max-md:w-[540px]   ">
    <form action="/login"  method="POST" className="flex flex-col space-y-7 max-sm:space-y-3 max-md3:space-y-5 max-md:space-y-4 ">



    <div className="flex flex-wrap justify-center -mx-3 max-sm:ml-auto max-sm:mr-auto">
        
       <h1 className="text-[40px] text-blue-400 mr-auto font-bold max-md:text-[35px] ">Create Account</h1>
        
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
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] placeholder:text-xs placeholder:text-blue-400  mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setUser_reg_first(e.target.value)}
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
              placeholder="Last Name"
              className="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setUser_reg_last(e.target.value)}
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
              placeholder="Enter Email here"
              className="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setUser_reg_email(e.target.value)}
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
              placeholder="Enter Phone Here"
              className="w-full rounded-md border placeholder:pl-2 pl-24 placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => setUser_reg_phone(e.target.value)}
           />
            <Country/>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap items-center justify-center -mx-3 max-md:mx-0 ">
        <div className="w-full px-3 sm:w-1/2 ">

     


<div className="mb-0">
      <label className="block mb-5 text-base font-medium text-blue-400">Gender</label>
      <div className="flex items-center space-x-6 max-md3:space-x-4 max-sm:space-x-8">
        <div className="flex items-center">
          <input
            type="radio"
            name="gender"
            id="Male"
            value="Male"
            checked={user_reg_gender === 'Male'}
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
            checked={user_reg_gender === 'Female'}
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
      <p>{user_reg_gender}</p>
    </div>



         
        </div>
        <div className="w-full px-3 sm:w-1/2 max-sm:mt-6 ">
       

<div className="">
           
            {/* <PasswordInput/> */}
      

{/* <PasswordInput/> */}

<div className="container relative w-full mx-auto ">
<label
              htmlFor="fName"
              className="absolute ml-5 text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider">
                Password</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md" 
        onChange={(e) => setUser_reg_password(e.target.value)}/>
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

      </div>
      

    

      <div className="w-full ">
      
        <button
          className="hover:shadow-form rounded-full mt-3 max-sm:py-2 max-md3:mt-3 w-full bg-blue-600 py-2.5 px-10 text-center text-base font-semibold text-white outline-none"
       onClick={handleSubmit}
       >
          Submit
        </button>
   
      </div>


      <div className="w-full ">
   
      <div className="font-semibold text-blue-400 divider divider-horizontal">or</div>
      </div>


      <div className="flex flex-row w-full space-x-5 ">
      
      <button className="w-3/5 py-3 ml-auto mr-auto text-sm font-semibold text-white bg-orange-700 rounded-full max-sm:py-3 max-md:py-2"> <FontAwesomeIcon icon={faGoogle} className="mr-2" />Login through Google</button>
      <button className="w-3/5 py-3 ml-auto mr-auto text-sm font-semibold text-white bg-blue-800 rounded-full max-sm:py-3 max-md:py-2"> <FontAwesomeIcon icon={faFacebook} className="mr-2" />Login through Facebook</button>
      
      </div>


      
      
      <div className="flex flex-row w-full space-x-5 ">
      
     <p className="ml-auto mr-auto font-semibold text-blue-400 max-md:pt-2">Already a Member<Link to="/login"  className="ml-2 text-blue-400 underline cursor-pointer text-semibold hover:text-blue-950">Click here</Link></p>
      </div>

      
    </form>
  </div>
</div>




    
</div>
        

<div className="flex justify-center w-1/2 h-screen max-md:w-2/3 max-sm:hidden">
  <div className="w-5/6 mt-12 bg-purple-400 h-3/4 max-md3:mt-7 max-md3:w-full max-md3:h-3/4 max-md:mt-14 max-md:h-3/5" >
    
<img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full"/>  

    
  </div>
</div>
















        </div>
    )

}