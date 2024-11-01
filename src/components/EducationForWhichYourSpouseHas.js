import React, { createContext, useState } from 'react';
import Select from 'react-select';
import SkilledWorkExperienceInCanadaDoesYourSpouse from './SkilledWorkExperienceInCanadaDoesYourSpouse';

// Create a context to provide the selected education value
const educationForWhichYourSpouseHasData = createContext();

const EducationForWhichYourSpouseHas = () => {
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
        { value: "DOCTORAL_PHD", label: "Doctoral level university degree (PhD)" },
    ];

    // State to hold the currently selected option
    const [selectedOption, setSelectedOption] = useState(options[0]);

    // Handle change event for the dropdown
    const handleDropdownChange = (selected) => {
        setSelectedOption(selected || options[0]);
    };

    // Value to be provided to context consumers
    const selectEducationForWhichYourSpouseHasData = selectedOption.value;

    return (
        <div>
            <h2 className="p-2 mt-3 font-semibold md:w-96">
                Highest level of education for which your spouse or common-law partner has:
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

            {/* Render the next component only if a valid option is selected */}
            {selectedOption.value !== "NOT_SELECTED" && (
                <educationForWhichYourSpouseHasData.Provider value={selectEducationForWhichYourSpouseHasData}>
                    <SkilledWorkExperienceInCanadaDoesYourSpouse />
                </educationForWhichYourSpouseHasData.Provider>
            )}
        </div>
    );
};

export default EducationForWhichYourSpouseHas;
export { educationForWhichYourSpouseHasData };
