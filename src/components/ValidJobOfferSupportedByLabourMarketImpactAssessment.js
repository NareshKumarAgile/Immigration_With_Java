import React, { createContext, useState } from 'react';
import Select from "react-select";
import NominationCertificateFrom from "./NominationCertificateFrom";
import WhichNoc from "./WhichNoc";

// Create Context for sharing valid job offer data
const validJobOfferSupportedByLabourMarketImpactAssessmentData = createContext();

// Internal component for dropdown: 8) Do you have a valid job offer supported by a Labour Market Impact Assessment (if needed)?
const ValidJobOfferSupportedByLabourMarketImpactAssessment = (props) => {
  // Options for the valid job offer dropdown
  const options = [
    { value: "select", label: "Select..." },
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
  ];

  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
  };

  // Value to be provided through context
  const selectValidJobOfferSupportedByLabourMarketImpactAssessmentData = selectedOption.value;

  return (
    <div className="w-full">
      <h2 className="p-2 mt-3 font-semibold md:w-96">
        Do you have a valid job offer supported by a Labour Market Impact Assessment (if needed)?
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

      {/* Conditional rendering based on the selected option */}
      {selectedOption.value === "select" ? null : (
        <validJobOfferSupportedByLabourMarketImpactAssessmentData.Provider value={selectValidJobOfferSupportedByLabourMarketImpactAssessmentData}>
          {selectedOption.value === "no" ? (
            <NominationCertificateFrom 
              yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} 
            />
          ) : (
            <WhichNoc 
              yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} 
            />
          )}
        </validJobOfferSupportedByLabourMarketImpactAssessmentData.Provider>
      )}
    </div>
  );
};

export default ValidJobOfferSupportedByLabourMarketImpactAssessment;
export { validJobOfferSupportedByLabourMarketImpactAssessmentData };
