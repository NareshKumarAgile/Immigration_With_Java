import React, { createContext, useContext, useState } from 'react';
import Select from "react-select";
import EducationForWhichYourSpouseHas from './EducationForWhichYourSpouseHas';
import CommonData from './CommonData';
import { maritalStatusData } from './MaritalStatus';
import { isYourSpousePermanentResidentOfCanadaChangeData } from './IsYourSpousePermanentResidentOfCanada';

// Create a context for spouse or common law partner data
const yourSpouseOrCommonLawPartnerData = createContext();

const YourSpouseOrCommonLawPartner = (props) => {
    // Options for the dropdown
    const options = [
        { value: "", label: "Select..." },
        { value: "NO", label: "No" },
        { value: "YES", label: "Yes" },
    ];
    
    // Received the value of whether the spouse is coming to Canada from props
    const yourSpouseComeWithYouToCanada = props.yourSpouseComeWithYouToCanada;
    
    // State to manage the selected option
    const [selectedOption, setSelectedOption] = useState(options[0]);

    // Handle dropdown selection change
    const handleDropdownChange = (selected) => {
        setSelectedOption(selected);
    };

    // Extract the selected value
    const selectYourSpouseOrCommonLawPartnerData = selectedOption.value;

    // Get marital status from context
    const maritalStatus = useContext(maritalStatusData);

    const isYourSpousePermanentResidentOfCanadaChange = useContext(isYourSpousePermanentResidentOfCanadaChangeData);

    // Check if the marital status indicates separation or divorce
    const isSeparatedOrDivorced = 
        maritalStatus === 'ANNULLED_MARRIAGE' ||
        maritalStatus === 'LEGALLY_SEPARATED' ||
        maritalStatus === 'DIVORCED_SEPARATED' ||
        maritalStatus === 'NEVER_MARRIED' ||
        maritalStatus === 'WIDOWED';

    return (
        <div className="w-full">
            <h2 className="p-2 mt-3 font-semibold md:w-96">
                Do you or your spouse or common law partner (if they will come with you to Canada) have at least one brother or sister living in Canada who is a citizen or permanent resident?
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

            {/* Render components based on the selection and spouse's presence */}
            {selectedOption.value !== "" && yourSpouseComeWithYouToCanada === "Yes" ? (
                <yourSpouseOrCommonLawPartnerData.Provider value={selectYourSpouseOrCommonLawPartnerData}>
                    <EducationForWhichYourSpouseHas />
                </yourSpouseOrCommonLawPartnerData.Provider>
            ) : selectedOption.value !== "" && (yourSpouseComeWithYouToCanada === "No" || isSeparatedOrDivorced || isYourSpousePermanentResidentOfCanadaChange === "Yes") ? (
                <yourSpouseOrCommonLawPartnerData.Provider value={selectYourSpouseOrCommonLawPartnerData}>
                    <CommonData /> {/* Render CommonData component if the spouse is not coming */}
                </yourSpouseOrCommonLawPartnerData.Provider>
            ) : null}
        </div>
    );
};

export default YourSpouseOrCommonLawPartner;
export { yourSpouseOrCommonLawPartnerData };
