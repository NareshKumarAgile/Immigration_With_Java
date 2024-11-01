import React, { createContext, useState } from 'react';
import Select from "react-select";
import ForeignWorkExperience from "./ForeignWorkExperience";

// Create Context for sharing work experience data
const canadaWorkExperienceData = createContext();

// Internal component for dropdown: 6) Work Experience
const CanadaWorkExperience = (props) => {
  // Options for the work experience dropdown
  const options = [
    { value: "SELECT", label: "Select..." },
    { value: "NONE", label: "None or less than a year" },
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
  const selectCanadaWorkExperienceData = selectedOption.value;

  return (
    <div className="w-full">
      <h2 className="p-2 mt-3 font-semibold md:w-96">Work Experience in Canada</h2>
      
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
          isClearable
        />
      </div>
      
      {/* Render ForeignWorkExperience component if a valid option is selected */}
      {selectedOption.value !== "SELECT" && (
        <div>
          <canadaWorkExperienceData.Provider value={selectCanadaWorkExperienceData}>
            <ForeignWorkExperience 
              yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} 
            />
          </canadaWorkExperienceData.Provider>
        </div>
      )}
    </div>
  );
};

export default CanadaWorkExperience;
export { canadaWorkExperienceData };
