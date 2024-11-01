import React, { createContext, useState } from 'react';
import Select from "react-select";
import HaveYouEarnedDegreeDiplomaCertificate from "./HaveYouEarnedDegreeDiplomaCertificate";

// Create Context for sharing level of education data
const levelOfEducationData = createContext();

// Component for dropdown: "What is your level of education?"
const LevelOfEducation = (props) => {
  // Options for the education select dropdown
  const options = [
    { value: "NOT_SELECTED", label: "Select..." },
    { value: "LESS_THAN_SECONDARY", label: "None, or less than secondary (high school)" },
    { value: "SECONDARY_DIPLOMA", label: "Secondary diploma (high school graduation)" },
    { value: "ONE_YEAR_PROGRAM", label: "One-year program at a university, college, trade or technical school, or other institute" },
    { value: "TWO_YEAR_PROGRAM", label: "Two-year program at a university, college, trade or technical school, or other institute" },
    { value: "BACHELORS_DEGREE", label: "Bachelors degree (three or more year program at a university, college, trade or technical school, or other institute)" },
    { value: "TWO_OR_MORE_CERTIFICATES", label: "Two or more certificates, diplomas or degrees. One must be for a program of three or more years" },
    { value: "MASTERS_DEGREE", label: "Masters degree, or professional degree needed to practice in a licensed profession (see Help)" },
    { value: "DOCTORAL_PHD", label: "Doctoral level university degree (PhD)" }
  ];
  
  // State to hold the selected education option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    
    setSelectedOption(selected || options[0]); // Update selected option
    
  };

  // Value to be provided through context
  const selectLevelOfEducationData = selectedOption.value;

  return (
    <div>
      <h2 className="p-2 mt-3 font-semibold md:w-96">Education?</h2>
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
          isClearable
        />
      </div>
      {selectedOption.value !== "NOT_SELECTED" && (
        <levelOfEducationData.Provider value={selectLevelOfEducationData}>
          <HaveYouEarnedDegreeDiplomaCertificate
            yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada}
          />
        </levelOfEducationData.Provider>
      )}
    </div>
  );
};

export default LevelOfEducation;
export { levelOfEducationData };
