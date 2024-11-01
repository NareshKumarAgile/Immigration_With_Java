import React, { createContext, useState } from 'react';
import Select from "react-select";
import CertificateOfQualificationFromCanadian from "./CertificateOfQualificationFromCanadian";

// Create Context for sharing foreign work experience data
const foreignWorkExperienceData = createContext();

// Internal component for dropdown: ii. In the last 10 years, how many total years of foreign skilled work experience do you have?
const ForeignWorkExperience = (props) => {
  // Options for the foreign work experience dropdown
  const options = [
    { value: "SELECT", label: "Select..." },
    { value: "LESS_THAN_ONE_YEAR", label: "None or less than a year" },
    { value: "ONE_YEAR", label: "1 year" },
    { value: "TWO_YEARS", label: "2 years" },
    { value: "THREE_YEARS", label: "3 years" },
    { value: "FOUR_YEARS", label: "4 years" },
    { value: "FIVE_OR_MORE_YEARS", label: "5 years or more" },
  ];

  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
  };

  // Value to be provided through context
  const selectForeignWorkExperienceData = selectedOption.value;

  return (
    <div className="w-full">
      <h2 className="p-2 mt-3 font-semibold md:w-96">
        Foreign skilled work experience in last 10 years?
      </h2>
      
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
        />
      </div>

      {/* Render CertificateOfQualificationFromCanadian if a valid option is selected */}
      {selectedOption.value !== "SELECT" && (
        <div>
          <foreignWorkExperienceData.Provider value={selectForeignWorkExperienceData}>
            <CertificateOfQualificationFromCanadian 
              yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada}
            />
          </foreignWorkExperienceData.Provider>
        </div>
      )}
    </div>
  );
};

export default ForeignWorkExperience;
export { foreignWorkExperienceData };
