import React, { createContext, useState } from 'react';
import Select from "react-select";
import NominationCertificateFrom from "./NominationCertificateFrom";

// Create a context for NOC data
const whichNocData = createContext();

// Internal component for dropdown: 8a) Which NOC TEER is the job offer?
const WhichNoc = (props) => {
    // Options for the NOC TEER dropdown
    const options = [
        { value: "SELECT", label: "Select..." },
        { value: "NOC_TEER_ZERO", label: "NOC TEER 0 Major group 00" },
        { value: "NOC_TEER_ONE_TWO_OR_THREE", label: "NOC TEER 1, 2 or 3, or any TEER 0 other than Major group 00" },
        { value: "NOC_TEER_FOUR_OR_FIVE", label: "NOC TEER 4 or 5" }
    ];
  
    // State to manage the selected option
    const [selectedOption, setSelectedOption] = useState(options[0]);
  
    // Handle dropdown selection change
    const handleDropdownChange = (selected) => {
        setSelectedOption(selected);
    };

    // Extract the selected value
    const selectWhichNocData = selectedOption.value;
  
    return (
        <div className="w-full">
            <h2 className="p-2 mt-3 font-semibold md:w-96">Which NOC TEER is the job offer?</h2>
            
            <div className="md:w-72 w-48">
                <Select
                    options={options}
                    onChange={handleDropdownChange}
                    value={selectedOption}
                    placeholder="Select..."
                    isClearable
                />
            </div>
            
            {/* Render NominationCertificateFrom if a valid option is selected */}
            {selectedOption.value !== "select" && (
                <whichNocData.Provider value={selectWhichNocData}>
                    <NominationCertificateFrom 
                        yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} 
                    />
                </whichNocData.Provider>
            )}
        </div>
    );
};

export default WhichNoc;
export { whichNocData };
