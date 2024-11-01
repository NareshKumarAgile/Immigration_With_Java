import React, { createContext, useState } from 'react';
import Select from "react-select";
import OfficialLanguagesAreEnglishAndFrench from "./OfficialLanguagesAreEnglishAndFrench";

// Create Context for sharing level of education data
const describeLevelEducationData = createContext();

// Component for dropdown: "Choose the best answer to describe this level of education."
const DescribeLevelEducation = (props) => {
  // Options for the education select dropdown
  const options = [
    { value: "", label: "Select..." },
    { value: "SECONDARY_OR_LESS", label: "Secondary (high school) or less" },
    { value: "ONE_OR_TWO_YEAR_DIPLOMA", label: "One- or two-year diploma or certificate" },
    { value: "THREE_YEARS_OR_LONGER_OR_MASTERS", label: "Degree, diploma or certificate of three years or longer OR a Master’s, professional or doctoral degree of at least one academic year" },
  ];
  
  // State to hold the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected || options[0]); // Update selected option
  };

  // Value to be provided through context
  const selectDescribeLevelEducationData = selectedOption.value;

  return (
    <div>
      <h2 className="p-2 mt-3 font-semibold md:w-96">Choose the best answer to describe this level of education.</h2>
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
          isClearable
        />
      </div>
      {selectedOption.value !== "" && (
        <describeLevelEducationData.Provider value={selectDescribeLevelEducationData}>
          <OfficialLanguagesAreEnglishAndFrench 
            yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada}
          />
        </describeLevelEducationData.Provider>
      )}
    </div>
  );
};

export default DescribeLevelEducation;
export { describeLevelEducationData };
