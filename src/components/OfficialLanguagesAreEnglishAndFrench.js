import React, { createContext, useState } from 'react';
import Select from "react-select";
import FirstOfficialLanguage from "./FirstOfficialLanguage";

// Create Context for sharing data related to official languages
const officialLanguagesAreEnglishAndFrenchData = createContext();

// Internal component for dropdown: "5) Official languages: Canada's official languages are English and French."
const OfficialLanguagesAreEnglishAndFrench = (props) => {
  // Options for the select dropdown
  const options = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
  ];
  
  // State to manage selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
  };

  // Value to be provided through context
  const selectOfficialLanguagesAreEnglishAndFrenchData = selectedOption?.value;

  return (
    <div>
      <div className="w-full">
        <h2 className="p-2 mt-3 font-semibold md:w-96">
          Official languages: Canada's official languages are English and French.
        </h2>
        <p>
          <b>Are your test results less than two years old?</b>
        </p>
      </div>
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
          isClearable
        />
      </div>
      
      {/* Conditional rendering based on selected option */}
      {selectedOption?.value === "yes" ? (
        <officialLanguagesAreEnglishAndFrenchData.Provider value={selectOfficialLanguagesAreEnglishAndFrenchData}>
          <FirstOfficialLanguage 
            yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada}
          />
        </officialLanguagesAreEnglishAndFrenchData.Provider>
      ) : selectedOption?.value === "no" ? (
        <div className="fs-3 text-danger">
          <p>
            Based on your answers, you do not appear to be eligible for Express
            Entry at this time.
          </p>
          <p>
            To submit an Express Entry profile, you must prove your language
            skills by taking an approved language test. Find out more about
            language testing for Express Entry.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default OfficialLanguagesAreEnglishAndFrench;
export { officialLanguagesAreEnglishAndFrenchData };
