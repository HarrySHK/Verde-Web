

import { useState } from "react";

export default function Country() {


  const [selectedCode, setSelectedCode] = useState<string>(''); 

  
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(event.target.value);
  };

    localStorage.setItem('selectedCode', selectedCode);
 


  return (
    <div className="absolute mt-[-38px] ml-1 ">
      <select id="countryCode" onChange={handleCountryChange}  name="countryCode" className="block py-1 pl-2 pr-8 leading-tight text-blue-400 bg-blue-200 border-2 border-white rounded-md appearance-none focus:outline-none focus:shadow-outline">
        <option value="" className="hover:bg-white" >Code</option>
        <option value="+1" className="bg-white">+1</option>
        <option value="+44" className="bg-white">+44</option>
        <option value="+33" className="bg-white">+33</option>
        <option value="+49" className="bg-white">+49</option>
        <option value="+86" className="bg-white">+86</option>
        <option value="+91" className="bg-white">+91</option>
        <option value="+81" className="bg-white">+81</option>
        <option value="+7" className="bg-white">+7</option>
        <option value="+61" className="bg-white">+61</option>
        <option value="+55" className="bg-white">+55</option>
        <option value="+1" className="bg-white">+1</option>
        <option value="+52" className="bg-white">+52</option>
        <option value="+34" className="bg-white">+34</option>
        <option value="+39" className="bg-white">+39</option>
        <option value="+44" className="bg-white">+44</option>
        <option value="+353" className="bg-white">+353</option>
        <option value="+31" className="bg-white">+31</option>
        <option value="+32" className="bg-white">+32</option>
        <option value="+41" className="bg-white">+41</option>
        <option value="+46" className="bg-white">+46</option>
        <option value="+47" className="bg-white">+47</option>
        <option value="+45" className="bg-white">+45</option>
        <option value="+64" className="bg-white">+64</option>
        <option value="+65" className="bg-white">+65</option>
        <option value="+82" className="bg-white">+82</option>
        <option value="+81" className="bg-white">+81</option>
        <option value="+86" className="bg-white">+86</option>
        <option value="+852" className="bg-white">+852</option>
        <option value="+886" className="bg-white">+886</option>
        <option value="+7" className="bg-white">+7</option>
        <option value="+380" className="bg-white">+380</option>
        <option value="+90" className="bg-white">+90</option>
        <option value="+30" className="bg-white">+30</option>
        <option value="+54" className="bg-white">+54</option>
        <option value="+55" className="bg-white">+55</option>
        <option value="+56" className="bg-white">+56</option>
        <option value="+57" className="bg-white">+57</option>
        <option value="+51" className="bg-white">+51</option>
        <option value="+52" className="bg-white">+52</option>
        <option value="+502" className="bg-white">+502</option>
        <option value="+506" className="bg-white">+506</option>
        <option value="+503" className="bg-white">+503</option>
        <option value="+504" className="bg-white">+504</option>
        <option value="+505" className="bg-white">+505</option>
        <option value="+506" className="bg-white">+506</option>
        <option value="+52" className="bg-white">+52</option>
        <option value="+503" className="bg-white">+503</option>
        <option value="+504" className="bg-white">+504</option>
        <option value="+972" className="bg-white">+972</option>
        <option value="+966" className="bg-white">+966</option>
        <option value="+971" className="bg-white">+971</option>
        <option value="+20" className="bg-white">+20</option>
        <option value="+86" className="bg-white">+86</option>
        <option value="+82" className="bg-white">+82</option>
        <option value="+81" className="bg-white">+81</option>
        <option value="+63" className="bg-white">+63</option>
        <option value="+65" className="bg-white">+65</option>
        <option value="+60" className="bg-white">+60</option>
      </select>
      <p>{selectedCode}</p>
    </div>
  )
}