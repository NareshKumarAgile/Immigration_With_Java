import React, { createContext, useState } from 'react';
import Select from "react-select";
import ValidJobOfferSupportedByLabourMarketImpactAssessment from "./ValidJobOfferSupportedByLabourMarketImpactAssessment";

// Create Context for sharing certificate of qualification data
const certificateOfQualificationFromCanadianData = createContext();

// Internal component for dropdown: 7) Do you have a certificate of qualification from a Canadian province, territory or federal body?
const CertificateOfQualificationFromCanadian = (props) => {
  // Options for the certificate of qualification dropdown
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
  const selectCertificateOfQualificationFromCanadianData = selectedOption.value;

  return (
    <div className="w-full">
      <h2 className="p-2 mt-3 font-semibold md:w-96">
        Do you have a certificate of qualification from a Canadian province,
        territory or federal body?
      </h2>
      
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
        />
      </div>
      
      {/* Render ValidJobOfferSupportedByLabourMarketImpactAssessment if a valid option is selected */}
      {selectedOption.value !== "SELECT" && (
        <div>
          <certificateOfQualificationFromCanadianData.Provider value={selectCertificateOfQualificationFromCanadianData}>
            <ValidJobOfferSupportedByLabourMarketImpactAssessment 
              yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} 
            />
          </certificateOfQualificationFromCanadianData.Provider>
        </div>
      )}
    </div>
  );
};

export default CertificateOfQualificationFromCanadian;
export { certificateOfQualificationFromCanadianData };
