import React, { createContext, useState } from 'react';
import Select from "react-select";
import DescribeLevelEducation from "./DescribeLevelEducation";
import OfficialLanguagesAreEnglishAndFrench from "./OfficialLanguagesAreEnglishAndFrench";

// Create Context for sharing degree, diploma, or certificate data
const haveYouEarnedDegreeDiplomaCertificateData = createContext();

// Component for dropdown: "Have you earned a Canadian degree, diploma, or certificate?"
const HaveYouEarnedDegreeDiplomaCertificate = (props) => {
  // Options for the select dropdown
  const options = [
    { value: "", label: "Select..." },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  
  // State to hold the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected || options[0]); // Update selected option
  };

  // Value to be provided through context
  const selectHaveYouEarnedDegreeDiplomaCertificateData = selectedOption.value;
  
  // Determine which content to show based on the selected option
  let contentToShow = null;
  if (selectedOption.value === "Yes") {
    contentToShow = (
      <haveYouEarnedDegreeDiplomaCertificateData.Provider value={selectHaveYouEarnedDegreeDiplomaCertificateData}>
        <DescribeLevelEducation
          yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada}
        />
      </haveYouEarnedDegreeDiplomaCertificateData.Provider>
    );
  } else if (selectedOption.value === "No") {
    contentToShow = (
      <haveYouEarnedDegreeDiplomaCertificateData.Provider value={selectHaveYouEarnedDegreeDiplomaCertificateData}>
        <OfficialLanguagesAreEnglishAndFrench 
          yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada}
        />
      </haveYouEarnedDegreeDiplomaCertificateData.Provider>
    );
  }

  return (
    <div>
      <h2 className="p-2 mt-3 font-semibold md:w-96">
        Have you earned a Canadian degree, diploma, or certificate?
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
      {contentToShow} {/* Render the determined content */}
    </div>
  );
};

export default HaveYouEarnedDegreeDiplomaCertificate;
export { haveYouEarnedDegreeDiplomaCertificateData };
