import React, { useState, useCallback, useMemo, createContext } from 'react';
import Select from 'react-select';
import IsYourSpousePermanentResidentOfCanada from './IsYourSpousePermanentResidentOfCanada';
import HowOldAreYou from './HowOldAreYou';

// Create Context for sharing marital status data
const maritalStatusData = createContext();

const MaritalStatus = ({selectedMaritalStatus}) => {
  // Define options for the select dropdown
  const options = useMemo(() => [
    { label: 'Select...', value: '' },
    { label: 'Annulled Marriage', value: 'ANNULLED_MARRIAGE' },
    { label: 'Common-Law', value: 'COMMON_LAW' },
    { label: 'Divorced / Separated', value: 'DIVORCED_SEPARATED' },
    { label: 'Legally Separated', value: 'LEGALLY_SEPARATED' },
    { label: 'Married', value: 'MARRIED' },
    { label: 'Never Married', value: 'NEVER_MARRIED' },
    { label: 'Widowed', value: 'WIDOWED' },
  ], []);

  // State for the selected option
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.value === selectedMaritalStatus) || options[0]
  );

  

  // Handle dropdown change
  const handleDropdownChange = useCallback((selected) => {
    setSelectedOption(selected || options[0]);
  }, [options]);

  // Value to be provided through context
  const selectMaritalStatusData = selectedOption.value; 

  // Render conditional content based on marital status
  const renderConditionalContent = () => {
    const spouseRequired = ['COMMON_LAW', 'MARRIED'];
    const showAgeComponent = ['ANNULLED_MARRIAGE', 'LEGALLY_SEPARATED', 'DIVORCED_SEPARATED', 'NEVER_MARRIED', 'WIDOWED'];

    if (spouseRequired.includes(selectedOption.value)) {
      return (
        <>
          <h2 className="p-2 mt-3 font-semibold md:w-96">
            Is your spouse or common-law partner a citizen or permanent resident of Canada?
          </h2>
          <maritalStatusData.Provider value={selectMaritalStatusData}>
            <IsYourSpousePermanentResidentOfCanada />
          </maritalStatusData.Provider>
        </>
      );
    }

    if (showAgeComponent.includes(selectedOption.value)) {
      return (
        <>
          <maritalStatusData.Provider value={selectMaritalStatusData}>
            <HowOldAreYou />
          </maritalStatusData.Provider>
        </>
      );
    }

    return null; // Render nothing if no conditions are met
  };

  return (
    <div>
        {/* <h2 className="p-2 mt-3 font-semibold md:w-96">
          Marital Status?
        </h2> */}
      <div className="relative w-[475px] h-[48px] font-inter mt-5">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select an option"
          isClearable
          styles={{
            container: (provided) => ({
              ...provided,
              width: '100%', // Ensure it takes the full width available
            }),
            control: (provided) => ({
              ...provided,
              height: '48px', // Set height for the select control (the box the user interacts with)
              minHeight: '48px', // Minimum height for the select control
            }),
            menu: (provided) => ({
              ...provided,
              maxHeight: '300px', // Set max height for the dropdown body (list of options)
              overflowY: 'auto',  // Enable scrolling if there are too many options
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              padding: '4px', // Adjust padding for the dropdown indicator (arrow)
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              display: 'block', // Display the separator as a line
              
            }),
            placeholder: (provided) => ({
              ...provided,
              fontSize: '20px', // Set placeholder text size to 40px
            }),
            singleValue: (provided) => ({
              ...provided,
              fontSize: '20px', // Set selected option text size to 40px
            }),
            option: (provided) => ({
              ...provided,
              fontSize: '20px', // Set the dropdown options text size to 40px
            }),
          }}
        />
      </div>
      <div>
        {renderConditionalContent()}
      </div>
    </div>
  );
};

export default MaritalStatus;
export { maritalStatusData };
