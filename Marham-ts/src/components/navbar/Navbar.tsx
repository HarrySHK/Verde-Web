import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {faUserDoctor} from  '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




library.add(faPhone, faUser, faAngleDown);
function Navbar() {
  return (
    <div className="Navbar">

      <nav className="bg-white">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold text-blue-800 whitespace-nowrap">  Verde     </span>
          </a>
          <div className="flex space-x-6  md:order-2 max-fourthsmall::bg-red-800">
            <button type="button" className="px-7 py-1 max-md3:px-5 max-sm:px-3 max-sm:py-1 max-sixthsmall:px-1 max-sixthsmall:py-1 max-fifthsmall:px-1 max-fifthsmall:py-1 max-triplesmall:px-1 max-triplesmall:pyS-1 max-fourthsmall:py-1  font-semibold text-gray-100 bg-gradient-to-b from-green-600 from-20% to-blue-600 rounded-full">     <FontAwesomeIcon icon="phone" size="xs" />  Help</button>
            {/* <Link to='/DocRegister'>
            <button type="button" className="px-7 py-2.5 max-md3:px-5 max-sm:px-3 max-sm:py-1 max-sixthsmall:px-1 max-sixthsmall:py-1 max-fifthsmall:px-1 max-fifthsmall:py-1 max-triplesmall:px-1 max-triplesmall:pyS-1 max-fourthsmall:py-1  font-semibold text-gray-100 bg-gradient-to-b from-green-600 from-20% to-blue-600 rounded-full">     <FontAwesomeIcon icon={faUserDoctor} size="lg" />&nbsp;&nbsp;&nbsp; Doctor Registration</button>
            </Link> */}
  

  <div className="dropdown dropdown-hover">
  <label className="btn px-5 py-4 max-md3:px-5 max-sm:px-3 max-sm:py-1 max-sixthsmall:px-1 max-sixthsmall:py-1 max-fifthsmall:px-1 max-fifthsmall:py-1 max-triplesmall:px-1 max-triplesmall:pyS-1 max-fourthsmall:py-1  font-semibold text-gray-100 bg-white rounded-md border-2 border-black  " tabIndex={0}> <FontAwesomeIcon icon={faUserDoctor} className='text-black' size="lg" />    <FontAwesomeIcon className='ml-4 mt-1 text-black' icon="angle-down" size="lg" /></label>
  <div className="dropdown-menu dropdown-menu-bottom-right mt-2 bg-white border-2 border-gray-400  ">
    <a href='/DocRegister' className="dropdown-item text-sm font-semibold text-black hover:bg-gray-300 rounded-none border-b-2 border-black/30">Doctor Reg</a>
    <a href='/login' tabIndex={-1} className="dropdown-item text-sm font-semibold text-black hover:bg-gray-300">User Login</a>
    {/* <a tabIndex={-1} className="dropdown-item text-sm font-bold text-black hover:bg-gray-300"></a> */}
  </div>
</div>

            {/* <button type="button" className="px-4 py-2 font-semibold bg-white border-2 border-green-700 rounded max-md3:px-4 max-sm:px-3 max-sm:py-1 max-sixthsmall:px-1 max-sixthsmall:py-1 max-fifthsmall:px-1 max-fifthsmall:py-1 max-triplesmall:px-1 max-triplesmall:pyS-1 max-fourthsmall:py-1">  <FontAwesomeIcon className='text-blue-900' icon="user" size="xs" />  <FontAwesomeIcon className='ml-2 text-blue-900' icon="angle-down" size="xs" />    </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;