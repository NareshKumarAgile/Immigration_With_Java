import React, { createContext, useState } from 'react';
import Select from 'react-select';
import DidYourSpouseTakeLanguageTest from './DidYourSpouseTakeLanguageTest';

// Create a context to provide the selected work experience value
const skilledWorkExperienceInCanadaDoesYourSpouseData = createContext();

const SkilledWorkExperienceInCanadaDoesYourSpouse = () => {
    // Options for the work experience select dropdown
    const options = [
        { value: "NOT_SELECTED", label: "Select..." },
        { value: "NONE", label: "None or less than a year" },
        { value: "ONE_YEAR", label: "1 year" },
        { value: "TWO_YEARS", label: "2 years" },
        { value: "THREE_YEARS", label: "3 years" },
        { value: "FOUR_YEARS", label: "4 years" },
        { value: "FIVE_YEARS", label: "5 years or more" },
    ];
    
    // State to hold the currently selected option
    const [selectedOption, setSelectedOption] = useState(options[0]);
    
    // Handle change event for the dropdown
    const handleDropdownChange = (selected) => {
        setSelectedOption(selected || options[0]);
    };

    // Value to be provided to context consumers
    const selectSkilledWorkExperienceInCanadaDoesYourSpouseData = selectedOption.value;

    return (
        <div className="w-full">
            <h2 className="p-2 mt-3 font-semibold md:w-96">
                How many years of skilled work experience in Canada does your spouse/common-law partner have?
            </h2>
            
            <div className="md:w-72 w-48">
                <Select
                    options={options}
                    onChange={handleDropdownChange}
                    value={selectedOption}
                    placeholder="Select..."
                />
            </div>

            {/* Render the next component only if a valid option is selected */}
            {selectedOption.value !== "NOT_SELECTED" && (
                <skilledWorkExperienceInCanadaDoesYourSpouseData.Provider value={selectSkilledWorkExperienceInCanadaDoesYourSpouseData}>
                    <DidYourSpouseTakeLanguageTest />
                </skilledWorkExperienceInCanadaDoesYourSpouseData.Provider>
            )}
        </div>
    );
};

export default SkilledWorkExperienceInCanadaDoesYourSpouse;
export { skilledWorkExperienceInCanadaDoesYourSpouseData };
