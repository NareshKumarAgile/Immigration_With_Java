import React, { createContext, useState } from 'react';
import Select from "react-select";
import YourSpouseOrCommonLawPartner from "./YourSpouseOrCommonLawPartner";

// Create context for sharing nomination certificate data
const nominationCertificateFromData = createContext();

// Internal component for dropdown: 9) Do you have a nomination certificate from a province or territory?
const NominationCertificateFrom = (props) => {
  // Options for the nomination certificate dropdown
  const options = [
    { value: "SELECT", label: "Select..." },
    { value: "NO", label: "No" },
    { value: "YES", label: "Yes" },
  ];
  
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
  };

  // Value to be provided through context
  const selectNominationCertificateFromData = selectedOption.value;

  return (
    <div className="w-full">
      <h2 className="p-2 mt-3 font-semibold md:w-96">
        Do you have a nomination certificate from a province or territory?
      </h2>
      
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
          isClearable
        />
      </div>

      {/* Conditionally render the next component based on selection */}
      {selectedOption.value !== "SELECT" && (
        <nominationCertificateFromData.Provider value={selectNominationCertificateFromData}>
          <YourSpouseOrCommonLawPartner 
            yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} 
          />
        </nominationCertificateFromData.Provider>
      )}
    </div>
  );
};

export default NominationCertificateFrom;
export { nominationCertificateFromData };
