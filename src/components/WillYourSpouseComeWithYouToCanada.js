import React, { createContext, useState } from 'react';
import Select from 'react-select';
import HowOldAreYou from './HowOldAreYou';

// Create Context for sharing the decision about whether the spouse will come to Canada
const willYourSpouseComeWithYouToCanadaData = createContext();

const WillYourSpouseComeWithYouToCanada = () => {
  // Options for the select dropdown
  const options = [
    { value: '', label: 'Select...' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

  // State to hold the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle dropdown change
  const handleDropdownChange = (selected) => {
    
    setSelectedOption(selected || options[0]);
    
  };

  // Value to be provided through context
  const selectWillYourSpouseComeWithYouToCanadaData = selectedOption.value;

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
      {(selectedOption.value === 'Yes' || selectedOption.value === 'No') && (
        <willYourSpouseComeWithYouToCanadaData.Provider value={selectWillYourSpouseComeWithYouToCanadaData}>
          <HowOldAreYou
            yourSpouseComeWithYouToCanada={selectedOption.value}
          />
        </willYourSpouseComeWithYouToCanadaData.Provider>
      )}
    </div>
  );
};

export default WillYourSpouseComeWithYouToCanada;
export { willYourSpouseComeWithYouToCanadaData };
