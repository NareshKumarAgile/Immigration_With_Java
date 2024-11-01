import React, { createContext, useState } from 'react';
import Select from 'react-select';
import LevelOfEducation from './LevelOfEducation';

// Create Context for sharing age data
const howOldAreYouData = createContext();

const HowOldAreYou = ( props ) => {
  console.log('Received props:', props);

  // Options for the age select dropdown
  const options = [
    { value: 'NOT_SELECTED', label: 'Select...' },
    { value: '17', label: '17 years of age or less' },
    { value: '18', label: '18 years of age' },
    { value: '19', label: '19 years of age' },
    { value: '20-29', label: '20 years of age' },
    { value: '20-29', label: '21 years of age' },
    { value: '20-29', label: '22 years of age' },
    { value: '20-29', label: '23 years of age' },
    { value: '20-29', label: '24 years of age' },
    { value: '20-29', label: '25 years of age' },
    { value: '20-29', label: '26 years of age' },
    { value: '20-29', label: '27 years of age' },
    { value: '20-29', label: '28 years of age' },
    { value: '20-29', label: '29 years of age' },
    { value: '30', label: '30 years of age' },
    { value: '31', label: '31 years of age' },
    { value: '32', label: '32 years of age' },
    { value: '33', label: '33 years of age' },
    { value: '34', label: '34 years of age' },
    { value: '35', label: '35 years of age' },
    { value: '36', label: '36 years of age' },
    { value: '37', label: '37 years of age' },
    { value: '38', label: '38 years of age' },
    { value: '39', label: '39 years of age' },
    { value: '40', label: '40 years of age' },
    { value: '41', label: '41 years of age' },
    { value: '42', label: '42 years of age' },
    { value: '43', label: '43 years of age' },
    { value: '44', label: '44 years of age' },
    { value: '45', label: '45 years of age or more' },
  ];

  // State to hold the selected age option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Handle change in dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected || options[0]); // Update selected option
    
  };

  // Value to be provided through context
  const selectHowOldAreYouData = selectedOption.value;

  return (
    <div>
      <h2 className="p-2 mt-3 font-semibold md:w-96">Age?</h2>
      <div className="md:w-72 w-48">
        <Select
          options={options}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="Select..."
          isClearable
        />
      </div>
      {selectedOption.value !== 'NOT_SELECTED' && (
        <howOldAreYouData.Provider value={selectHowOldAreYouData}>
          <LevelOfEducation 
            yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada}
          />
        </howOldAreYouData.Provider>
      )}
    </div>
  );
};

export default HowOldAreYou;
export { howOldAreYouData };
