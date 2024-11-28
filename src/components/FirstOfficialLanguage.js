import React, { useState, createContext } from 'react';
import Select from "react-select";
import OtherLanguageResultFirst from "./OtherLanguageResultFirst";
import OtherLanguageResultSecond from "./OtherLanguageResultSecond";

export const LanguageTestContext = createContext();

const FirstOfficialLanguage = (props) => {
  const options = [
    { value: "SELECT", label: "Select..." },
    { value: "CELPIP_G", label: "CELPIP-G" },
    { value: "IELTS", label: "IELTS" },
    { value: "PTE_CORE", label: "PTE Core" },
    { value: "TEF_CANADA", label: "TEF Canada" },
    { value: "TCF_CANADA", label: "TCF Canada" },
  ];

  const languageTestValues = {
    CELPIP_G: {
      speaking: [
        { value: "TEN_OR_TEN_PLUS", label: "10-12" },
        { value: "NINE", label: "9" },
        { value: "EIGHT", label: "8" },
        { value: "SEVEN", label: "7" },
        { value: "SIX", label: "6" },
        { value: "FIVE", label: "5" },
        { value: "FOUR", label: "4" },
        { value: "THREE", label: "M,0-3" },
      ],
      listening: [
        { value: "TEN_OR_TEN_PLUS", label: "10-12" },
        { value: "NINE", label: "9" },
        { value: "EIGHT", label: "8" },
        { value: "SEVEN", label: "7" },
        { value: "SIX", label: "6" },
        { value: "FIVE", label: "5" },
        { value: "FOUR", label: "4" },
        { value: "THREE", label: "M,0-3" },
      ],
      reading: [
        { value: "TEN_OR_TEN_PLUS", label: "10-12" },
        { value: "NINE", label: "9" },
        { value: "EIGHT", label: "8" },
        { value: "SEVEN", label: "7" },
        { value: "SIX", label: "6" },
        { value: "FIVE", label: "5" },
        { value: "FOUR", label: "4" },
        { value: "THREE", label: "M,0-3" },
      ],
      writing: [
        { value: "TEN_OR_TEN_PLUS", label: "10-12" },
        { value: "NINE", label: "9" },
        { value: "EIGHT", label: "8" },
        { value: "SEVEN", label: "7" },
        { value: "SIX", label: "6" },
        { value: "FIVE", label: "5" },
        { value: "FOUR", label: "4" },
        { value: "THREE", label: "M,0-3" },
      ],
    },
    IELTS: {
      speaking: [
        { value: "TEN_OR_TEN_PLUS", label: "7.5-9.0" },
        { value: "NINE", label: "7.0" },
        { value: "EIGHT", label: "6.5" },
        { value: "SEVEN", label: "6.0" },
        { value: "SIX", label: "5.5" },
        { value: "FIVE", label: "5.0" },
        { value: "FOUR", label: "4.0-4.5" },
        { value: "THREE", label: "0-3.5" },
      ],
      listening: [
        { value: "TEN_OR_TEN_PLUS", label: "8.5-9.0" },
        { value: "NINE", label: "8.0" },
        { value: "EIGHT", label: "7.5" },
        { value: "SEVEN", label: "6.0-7.0" },
        { value: "SIX", label: "5.5" },
        { value: "FIVE", label: "5.0" },
        { value: "FOUR", label: "4.5" },
        { value: "THREE", label: "0-4.0" },
      ],
      reading: [
        { value: "TEN_OR_TEN_PLUS", label: "8.0-9.0" },
        { value: "NINE", label: "7.0-7.5" },
        { value: "EIGHT", label: "6.5" },
        { value: "SEVEN", label: "6.0" },
        { value: "SIX", label: "5.0-5.5" },
        { value: "FIVE", label: "4.0-4.5" },
        { value: "FOUR", label: "3.5" },
        { value: "THREE", label: "0-3.0" },
      ],
      writing: [
        { value: "TEN_OR_TEN_PLUS", label: "7.5-9.0" },
        { value: "NINE", label: "7.0" },
        { value: "EIGHT", label: "6.5" },
        { value: "SEVEN", label: "6.0" },
        { value: "SIX", label: "5.5" },
        { value: "FIVE", label: "5.0" },
        { value: "FOUR", label: "4.0-4.5" },
        { value: "THREE", label: "0-3.5" },
      ],
    },

    PTE_CORE: {
      speaking: [
        { value: "TEN_OR_TEN_PLUS", label: "89-90" },
        { value: "NINE", label: "84-88" },
        { value: "EIGHT", label: "76-83" },
        { value: "SEVEN", label: "68-75" },
        { value: "SIX", label: "59-67" },
        { value: "FIVE", label: "51-58" },
        { value: "FOUR", label: "42-50" },
        { value: "THREE", label: "0-41" },
      ],
      listening: [
        { value: "TEN_OR_TEN_PLUS", label: "89-90" },
        { value: "NINE", label: "82-88" },
        { value: "EIGHT", label: "71-81" },
        { value: "SEVEN", label: "60-70" },
        { value: "SIX", label: "50-59" },
        { value: "FIVE", label: "39-49" },
        { value: "FOUR", label: "28-38" },
        { value: "THREE", label: "0-27" },
      ],
      reading: [
        { value: "TEN_OR_TEN_PLUS", label: "88-90" },
        { value: "NINE", label: "78-87" },
        { value: "EIGHT", label: "69-77" },
        { value: "SEVEN", label: "60-68" },
        { value: "SIX", label: "51-59" },
        { value: "FIVE", label: "42-50" },
        { value: "FOUR", label: "33-41" },
        { value: "THREE", label: "0-32" },
      ],
      writing: [
        { value: "TEN_OR_TEN_PLUS", label: "90" },
        { value: "NINE", label: "88-89" },
        { value: "EIGHT", label: "79-87" },
        { value: "SEVEN", label: "69-78" },
        { value: "SIX", label: "60-68" },
        { value: "FIVE", label: "51-59" },
        { value: "FOUR", label: "41-50" },
        { value: "THREE", label: "0-40" },
      ],
    },

    TEF_CANADA: {
      speaking: [
        { value: "TEN_OR_TEN_PLUS", label: "393-450" },
        { value: "NINE", label: "371-392" },
        { value: "EIGHT", label: "349-370" },
        { value: "SEVEN", label: "310-348" },
        { value: "SIX", label: "271-309" },
        { value: "FIVE", label: "226-270" },
        { value: "FOUR", label: "181-225" },
        { value: "THREE", label: "0-180" },
      ],
      listening: [
        { value: "TEN_OR_TEN_PLUS", label: "316-360" },
        { value: "NINE", label: "298-315" },
        { value: "EIGHT", label: "280-297" },
        { value: "SEVEN", label: "249-279" },
        { value: "SIX", label: "217-248" },
        { value: "FIVE", label: "181-216" },
        { value: "FOUR", label: "145-180" },
        { value: "THREE", label: "0-144" },
      ],
      reading: [
        { value: "TEN_OR_TEN_PLUS", label: "263-300" },
        { value: "NINE", label: "242-268" },
        { value: "EIGHT", label: "233-247" },
        { value: "SEVEN", label: "207-232" },
        { value: "SIX", label: "181-206" },
        { value: "FIVE", label: "151-180" },
        { value: "FOUR", label: "121-150" },
        { value: "THREE", label: "0-120" },
      ],
      writing: [
        { value: "TEN_OR_TEN_PLUS", label: "393-450" },
        { value: "NINE", label: "371-392" },
        { value: "EIGHT", label: "349-370" },
        { value: "SEVEN", label: "310-348" },
        { value: "SIX", label: "271-309" },
        { value: "FIVE", label: "226-270" },
        { value: "FOUR", label: "181-225" },
        { value: "THREE", label: "0-180" },
      ],
    },

    TCF_CANADA: {
      speaking: [
        { value: "TEN_OR_TEN_PLUS", label: "16-20" },
        { value: "NINE", label: "14-15" },
        { value: "EIGHT", label: "12-13" },
        { value: "SEVEN", label: "10-11" },
        { value: "SIX", label: "7-9" },
        { value: "FIVE", label: "6" },
        { value: "FOUR", label: "4-5" },
        { value: "THREE", label: "0-3" },
      ],
      listening: [
        { value: "TEN_OR_TEN_PLUS", label: "549-699" },
        { value: "NINE", label: "523-548" },
        { value: "EIGHT", label: "503-522" },
        { value: "SEVEN", label: "458-502" },
        { value: "SIX", label: "398-457" },
        { value: "FIVE", label: "369-397" },
        { value: "FOUR", label: "331-368" },
        { value: "THREE", label: "0-330" },
      ],
      reading: [
        { value: "TEN_OR_TEN_PLUS", label: "549-699" },
        { value: "NINE", label: "524-548" },
        { value: "EIGHT", label: "499-523" },
        { value: "SEVEN", label: "453-498" },
        { value: "SIX", label: "406-452" },
        { value: "FIVE", label: "375-405" },
        { value: "FOUR", label: "342-374" },
        { value: "THREE", label: "0-341" },
      ],
      writing: [
        { value: "TEN_OR_TEN_PLUS", label: "16-20" },
        { value: "NINE", label: "14-15" },
        { value: "EIGHT", label: "12-13" },
        { value: "SEVEN", label: "10-11" },
        { value: "SIX", label: "7-9" },
        { value: "FIVE", label: "6" },
        { value: "FOUR", label: "4-5" },
        { value: "THREE", label: "0-3" },
      ],
    },


  };

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [speakingScore, setSpeakingScore] = useState(null);
  const [listeningScore, setListeningScore] = useState(null);
  const [readingScore, setReadingScore] = useState(null);
  const [writingScore, setWritingScore] = useState(null);

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
    setShowAdditionalOptions(selected.value !== "SELECT");
  };

  const handleScoreChange = (setter) => (selected) => {
    setter(selected);
  };

  const getTestValues = (testType) => {
    return languageTestValues[selectedOption.value]?.[testType] || [];
  };

  // Function to check if all four scores have been selected
  const allScoresSelected = speakingScore && listeningScore && readingScore && writingScore;

  return (
    <LanguageTestContext.Provider value={{ selectedOption, speakingScore, listeningScore, readingScore, writingScore }}>
      <div>
        <h2 className="p-2 mt-3 font-semibold md:w-96">Which language test did you take for your first official language?</h2>
        <div className="md:w-72 w-48">
          <Select
            options={options}
            onChange={handleDropdownChange}
            value={selectedOption}
            placeholder="Select..."
            isClearable
          />

          {showAdditionalOptions && (
            <>
              <h4>Speaking:</h4>
              <Select options={getTestValues('speaking')} onChange={handleScoreChange(setSpeakingScore)} placeholder="Select Speaking Level" isClearable />
              <h4>Listening:</h4>
              <Select options={getTestValues('listening')} onChange={handleScoreChange(setListeningScore)} placeholder="Select Listening Level" isClearable />
              <h4>Reading:</h4>
              <Select options={getTestValues('reading')} onChange={handleScoreChange(setReadingScore)} placeholder="Select Reading Level" isClearable />
              <h4>Writing:</h4>
              <Select options={getTestValues('writing')} onChange={handleScoreChange(setWritingScore)} placeholder="Select Writing Level" isClearable />
            </>
          )}
        </div>

        {/* Render additional results only if all scores are selected */}
        {showAdditionalOptions && allScoresSelected && (
          <>
            {["CELPIP_G", "IELTS", "PTE_CORE"].includes(selectedOption.value) ? (
              <OtherLanguageResultFirst yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} />
            ) : ["TEF_CANADA", "TCF_CANADA"].includes(selectedOption.value) ? (
              <OtherLanguageResultSecond yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} />
            ) : null}
          </>
        )}
      </div>
    </LanguageTestContext.Provider>
  );
};

export default FirstOfficialLanguage;