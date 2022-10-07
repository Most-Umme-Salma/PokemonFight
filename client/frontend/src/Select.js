import React, { useState } from "react";
import Chinese from "./components/Chinese";
import English from "./components/English";
import French from "./components/French";
import Japanese from "./components/Japanese";
const LangDropdown = () => {
  const [currentLang, setCurrentLang] = useState("");
  let changeLang = (newLang) => {
    setCurrentLang(newLang);
    console.log(currentLang);
  };

  return (<div>
    <form>
       
      <select
        onChange={(event) => changeLang(event.target.value)}
        value={currentLang}
      > 
        <option value="empty">Select Language</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
       
   </select>

   </form>
  
   {currentLang === 'English' && <English />}
   {currentLang === 'French' && <French />}
   {currentLang === 'Japanese' && <Japanese />}
   {currentLang === 'Chinese' && <Chinese />}
</div>  );
};
export default LangDropdown;
