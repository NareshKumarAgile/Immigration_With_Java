import React, { useState, createContext } from 'react';
import Select from 'react-select';
import CanadaWorkExperience from './CanadaWorkExperience';

// Create context for language test data
const OtherSecondLanguageTestContext = createContext();

const OtherLanguageResultSecond = (props) => {
  const options = [
    { value: 'NOT_SELECTED', label: 'Select...' },
    { value: 'CELPIP_G', label: 'CELPIP-G' },
    { value: 'IELTS', label: 'IELTS' },
    { value: 'PTE_CORE', label: 'PTE Core' },
    { value: 'NOT_APPLICABLE', label: 'Not Applicable' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [speakingItems, setSpeakingItems] = useState([]);
  const [listeningItems, setListeningItems] = useState([]);
  const [readingItems, setReadingItems] = useState([]);
  const [writingItems, setWritingItems] = useState([]);
  const [speakingScore, setSpeakingScore] = useState(null);
  const [listeningScore, setListeningScore] = useState(null);
  const [readingScore, setReadingScore] = useState(null);
  const [writingScore, setWritingScore] = useState(null);

  const handleDropdownChange = (selected) => {
    const value = selected ? selected.value : '';
    setSelectedOption(selected || options[0]);

    // Define score options for different tests

    switch (value) {
      case 'CELPIP_G':
        setSpeakingItems([
          { label: '10-12', value: "TEN_OR_TEN_PLUS" },
          { label: '9', value: "NINE" },
          { label: '8', value: "EIGHT" },
          { label: '7', value: "SEVEN" },
          { label: '6', value: "SIX" },
          { label: '5', value: "FIVE" },
          { label: '4', value: "FOUR" },
          { label: 'M,0-3', value: "THREE" },
        ]);
        setListeningItems([
          { label: '10-12', value: "TEN_OR_TEN_PLUS" },
          { label: '9', value: "NINE" },
          { label: '8', value: "EIGHT" },
          { label: '7', value: "SEVEN" },
          { label: '6', value: "SIX" },
          { label: '5', value: "FIVE" },
          { label: '4', value: "FOUR" },
          { label: 'M,0-3', value: "THREE" },
        ]);
        setReadingItems([
          { label: '10-12', value: "TEN_OR_TEN_PLUS" },
          { label: '9', value: "NINE" },
          { label: '8', value: "EIGHT" },
          { label: '7', value: "SEVEN" },
          { label: '6', value: "SIX" },
          { label: '5', value: "FIVE" },
          { label: '4', value: "FOUR" },
          { label: 'M,0-3', value: "THREE" },
        ]);
        setWritingItems([
          { label: '10-12', value: "TEN_OR_TEN_PLUS" },
          { label: '9', value: "NINE" },
          { label: '8', value: "EIGHT" },
          { label: '7', value: "SEVEN" },
          { label: '6', value: "SIX" },
          { label: '5', value: "FIVE" },
          { label: '4', value: "FOUR" },
          { label: 'M,0-3', value: "THREE" },
        ]);
        break;

      case 'IELTS':
        setSpeakingItems([
          { label: '7.5-9.0', value: "TEN_OR_TEN_PLUS" },
          { label: '7.0', value: "NINE" },
          { label: '6.5', value: "EIGHT" },
          { label: '6.0', value: "SEVEN" },
          { label: '5.5', value: "SIX" },
          { label: '5.0', value: "FIVE" },
          { label: '4.0-4.5', value: "FOUR" },
          { label: '0-3.5', value: "THREE" },
        ]);
        setListeningItems([
          { label: '8.5-9.0', value: "TEN_OR_TEN_PLUS" },
          { label: '8.0', value: "NINE" },
          { label: '7.5', value: "EIGHT" },
          { label: '6.0-7.0', value: "SEVEN" },
          { label: '5.5', value: "SIX" },
          { label: '5.0', value: "FIVE" },
          { label: '4.5', value: "FOUR" },
          { label: '0-4.0', value: "THREE" },
        ]);
        setReadingItems([
          { label: '8.0-9.0', value: "TEN_OR_TEN_PLUS" },
          { label: '7.0-7.5', value: "NINE" },
          { label: '6.5', value: "EIGHT" },
          { label: '6.0', value: "SEVEN" },
          { label: '5.0-5.5', value: "SIX" },
          { label: '4.0-4.5', value: "FIVE" },
          { label: '3.5', value: "FOUR" },
          { label: '0-3.0', value: "THREE" },
        ]);
        setWritingItems([
          { label: '7.5-9.0', value: "TEN_OR_TEN_PLUS" },
          { label: '7.0', value: "NINE" },
          { label: '6.5', value: "EIGHT" },
          { label: '6.0', value: "SEVEN" },
          { label: '5.5', value: "SIX" },
          { label: '5.0', value: "FIVE" },
          { label: '4.0-4.5', value: "FOUR" },
          { label: '0-3.5', value: "THREE" },
        ]);
        break;

      case 'PTE_CORE':
        setSpeakingItems([
          { label: '89-90', value: "TEN_OR_TEN_PLUS" },
          { label: '84-88', value: "NINE" },
          { label: '76-83', value: "EIGHT" },
          { label: '68-75', value: "SEVEN" },
          { label: '59-67', value: "SIX" },
          { label: '51-58', value: "FIVE" },
          { label: '42-50', value: "FOUR" },
          { label: '0-41', value: "THREE" },
        ]);
        setListeningItems([
          { label: '89-90', value: "TEN_OR_TEN_PLUS" },
          { label: '82-88', value: "NINE" },
          { label: '71-81', value: "EIGHT" },
          { label: '60-70', value: "SEVEN" },
          { label: '50-59', value: "SIX" },
          { label: '39-49', value: "FIVE" },
          { label: '28-38', value: "FOUR" },
          { label: '0-27', value: "THREE" },
        ]);
        setReadingItems([
          { label: '88-90', value: "TEN_OR_TEN_PLUS" },
          { label: '78-87', value: "NINE" },
          { label: '69-77', value: "EIGHT" },
          { label: '60-68', value: "SEVEN" },
          { label: '51-59', value: "SIX" },
          { label: '42-50', value: "FIVE" },
          { label: '33-41', value: "FOUR" },
          { label: '0-32', value: "THREE" },
        ]);
        setWritingItems([
          { label: '90', value: "TEN_OR_TEN_PLUS" },
          { label: '88-89', value: "NINE" },
          { label: '79-87', value: "EIGHT" },
          { label: '69-78', value: "SEVEN" },
          { label: '60-68', value: "SIX" },
          { label: '51-59', value: "FIVE" },
          { label: '41-50', value: "FOUR" },
          { label: '0-40', value: "THREE" },
        ]);
        break;

      default:
        setSpeakingItems([]);
        setListeningItems([]);
        setReadingItems([]);
        setWritingItems([]);
        break;
    }

    // Reset scores when a new option is selected
    setSpeakingScore(null);
    setListeningScore(null);
    setReadingScore(null);
    setWritingScore(null);
  };

  const handleScoreChange = (type, selected) => {
    switch (type) {
      case 'speaking': setSpeakingScore(selected); break;
      case 'listening': setListeningScore(selected); break;
      case 'reading': setReadingScore(selected); break;
      case 'writing': setWritingScore(selected); break;
      default: break;
    }
  };

  const isAllScoresSelected = () => {
    return speakingScore && listeningScore && readingScore && writingScore;
  };

  const secondLanguageData = {
    selectedOption,
    speakingItems,
    listeningItems,
    readingItems,
    writingItems,
    speakingScore,
    listeningScore,
    readingScore,
    writingScore,
  };

  return (
    <OtherSecondLanguageTestContext.Provider value={secondLanguageData}>
      <div>
        <h2 className="p-2 mt-3 font-semibold md:w-96">Do you have other language results?</h2>
        <div className="md:w-72 w-48">
          <Select
            options={options}
            onChange={handleDropdownChange}
            value={selectedOption}
            placeholder="Select..."
            isClearable
          />
        </div>

        {selectedOption.value === "NOT_SELECTED" ? null : selectedOption.value === "NOT_APPLICABLE" ? (
          <CanadaWorkExperience yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} />
        ) : (
          <div className="md:w-72 w-48">
            <h4>Speaking:</h4>
            <Select
              options={speakingItems}
              onChange={selected => handleScoreChange('speaking', selected)}
              placeholder="Select Speaking Level"
            />
            <h4>Listening:</h4>
            <Select
              options={listeningItems}
              onChange={selected => handleScoreChange('listening', selected)}
              placeholder="Select Listening Level"
            />
            <h4>Reading:</h4>
            <Select
              options={readingItems}
              onChange={selected => handleScoreChange('reading', selected)}
              placeholder="Select Reading Level"
            />
            <h4>Writing:</h4>
            <Select
              options={writingItems}
              onChange={selected => handleScoreChange('writing', selected)}
              placeholder="Select Writing Level"
            />
          </div>
        )}

        {isAllScoresSelected() && (
          <CanadaWorkExperience yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} />
        )}
      </div>
    </OtherSecondLanguageTestContext.Provider>
  );
};

export default OtherLanguageResultSecond;
export { OtherSecondLanguageTestContext };
