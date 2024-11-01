import React, { createContext, useState } from 'react';
import Select from 'react-select';
import HowOldAreYou from './HowOldAreYou';
import WillYourSpouseComeWithYouToCanada from './WillYourSpouseComeWithYouToCanada';

// Create Context for sharing the status of whether the spouse is a permanent resident
const isYourSpousePermanentResidentOfCanadaChangeData = createContext();

const IsYourSpousePermanentResidentOfCanada = () => {
  // Options for the select dropdown
  const options = [
    { value: '', label: 'Select...' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

  // State for the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle dropdown change
  const handleDropdownChange = (selected) => {
    
    setSelectedOption(selected || options[0]);
    
  };

  // Value to be provided through context
  const selectIsYourSpousePermanentResidentOfCanadaChangeData = selectedOption.value; 

  // Render conditional content based on the selected option
  const renderContent = () => {
    switch (selectedOption.value) {
      case 'Yes':
        return (
          <>
            <isYourSpousePermanentResidentOfCanadaChangeData.Provider value={selectIsYourSpousePermanentResidentOfCanadaChangeData}>
              <HowOldAreYou />
            </isYourSpousePermanentResidentOfCanadaChangeData.Provider>
          </>
        );
      case 'No':
        return (
          <>
            <h2 className="p-2 mt-3 font-semibold md:w-96">
              Will your spouse or common-law partner come with you to Canada?
            </h2>
            <isYourSpousePermanentResidentOfCanadaChangeData.Provider value={selectIsYourSpousePermanentResidentOfCanadaChangeData}>
              <WillYourSpouseComeWithYouToCanada/>
            </isYourSpousePermanentResidentOfCanadaChangeData.Provider>
          </>
        );
      default:
        return null; // Render nothing if no valid selection
    }
  };

  return (
    <div>
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
          isClearable
        />
      </div>
      {renderContent()} {/* Render additional content based on selection */}
    </div>
  );
};

export default IsYourSpousePermanentResidentOfCanada;
export { isYourSpousePermanentResidentOfCanadaChangeData };
