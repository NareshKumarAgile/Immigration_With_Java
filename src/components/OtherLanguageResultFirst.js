import React, { useState, createContext } from 'react';
import Select from "react-select";
import CanadaWorkExperience from "./CanadaWorkExperience";

// Create context for language test data
const OtherFirstLanguageTestContext = createContext();

const OtherLanguageResultFirst = (props) => {
    const options = [
        { label: "Select...", value: "NOT_SELECTED" },
        { label: "TEF Canada", value: "TEF_CANADA" },
        { label: "TCF Canada", value: "TCF_CANADA" },
        { label: "Not Applicable", value: "NOT_APPLICABLE" }
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
        setSelectedOption(selected);
        // Reset scores when a new option is selected
        setSpeakingScore(null);
        setListeningScore(null);
        setReadingScore(null);
        setWritingScore(null);
        
        switch (selected.value) {
            case "TEF_CANADA":
                setSpeakingItems([
                    { label: "Select...", value: null },
                    { label: "393-450", value: "TEN_OR_TEN_PLUS" },
                    { label: "371-392", value: "NINE" },
                    { label: "349-370", value: "EIGHT" },
                    { label: "310-348", value: "SEVEN" },
                    { label: "271-309", value: "SIX" },
                    { label: "226-270", value: "FIVE" },
                    { label: "181-225", value: "FOUR" },
                    { label: "0-180", value: "THREE" },
                ]);
                setListeningItems([
                    { label: "Select...", value: null },
                    { label: "316-360", value: "TEN_OR_TEN_PLUS" },
                    { label: "298-315", value: "NINE" },
                    { label: "280-297", value: "EIGHT" },
                    { label: "249-279", value: "SEVEN" },
                    { label: "217-248", value: "SIX" },
                    { label: "181-216", value: "FIVE" },
                    { label: "145-180", value: "FOUR" },
                    { label: "0-144", value: "THREE" },
                ]);
                setReadingItems([
                    { label: "Select...", value: null },
                    { label: "263-300", value: "TEN_OR_TEN_PLUS" },
                    { label: "242-268", value: "NINE" },
                    { label: "233-247", value: "EIGHT" },
                    { label: "207-232", value: "SEVEN" },
                    { label: "181-206", value: "SIX" },
                    { label: "151-180", value: "FIVE" },
                    { label: "121-150", value: "FOUR" },
                    { label: "0-120", value: "THREE" },
                ]);
                setWritingItems([
                    { label: "Select...", value: null },
                    { label: "393-450", value: "TEN_OR_TEN_PLUS" },
                    { label: "371-392", value: "NINE" },
                    { label: "349-370", value: "EIGHT" },
                    { label: "310-348", value: "SEVEN" },
                    { label: "271-309", value: "SIX" },
                    { label: "226-270", value: "FIVE" },
                    { label: "181-225", value: "FOUR" },
                    { label: "0-180", value: "THREE" },
                ]);
                break;

            case "TCF_CANADA":
                setSpeakingItems([
                    { label: "Select...", value: null },
                    { label: "16-20", value: "TEN_OR_TEN_PLUS" },
                    { label: "14-15", value: "NINE" },
                    { label: "12-13", value: "EIGHT" },
                    { label: "10-11", value: "SEVEN" },
                    { label: "7-9", value: "SIX" },
                    { label: "6", value: "FIVE" },
                    { label: "4-5", value: "FOUR" },
                    { label: "0-3", value: "THREE" },
                ]);
                setListeningItems([
                    { label: "Select...", value: null },
                    { label: "549-699", value: "TEN_OR_TEN_PLUS" },
                    { label: "523-548", value: "NINE" },
                    { label: "503-522", value: "EIGHT" },
                    { label: "458-502", value: "SEVEN" },
                    { label: "398-457", value: "SIX" },
                    { label: "369-397", value: "FIVE" },
                    { label: "331-368", value: "FOUR" },
                    { label: "0-330", value: "THREE" },
                ]);
                setReadingItems([
                    { label: "Select...", value: null },
                    { label: "549-699", value: "TEN_OR_TEN_PLUS" },
                    { label: "524-548", value: "NINE" },
                    { label: "499-523", value: "EIGHT" },
                    { label: "453-498", value: "SEVEN" },
                    { label: "406-452", value: "SIX" },
                    { label: "375-405", value: "FIVE" },
                    { label: "342-374", value: "FOUR" },
                    { label: "0-341", value: "THREE" },
                ]);
                setWritingItems([
                    { label: "Select...", value: null },
                    { label: "16-20", value: "TEN_OR_TEN_PLUS" },
                    { label: "14-15", value: "NINE" },
                    { label: "12-13", value: "EIGHT" },
                    { label: "10-11", value: "SEVEN" },
                    { label: "7-9", value: "SIX" },
                    { label: "6", value: "FIVE" },
                    { label: "4-5", value: "FOUR" },
                    { label: "0-3", value: "THREE" },
                ]);
                break;

            default:
                setSpeakingItems([]);
                setListeningItems([]);
                setReadingItems([]);
                setWritingItems([]);
                break;
        }
    };

    const handleScoreChange = (type, selected) => {
        switch (type) {
            case 'speaking':
                setSpeakingScore(selected);
                break;
            case 'listening':
                setListeningScore(selected);
                break;
            case 'reading':
                setReadingScore(selected);
                break;
            case 'writing':
                setWritingScore(selected);
                break;
            default:
                break;
        }
    };

    const isAllScoresSelected = () => {
        return speakingScore && listeningScore && readingScore && writingScore;
    };

    const languageData = {
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
        <OtherFirstLanguageTestContext.Provider value={languageData}>
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

                {/* Display message if all language items have been selected */}
                {isAllScoresSelected() && (
                    <CanadaWorkExperience yourSpouseComeWithYouToCanada={props.yourSpouseComeWithYouToCanada} />
                )}
            </div>
        </OtherFirstLanguageTestContext.Provider>
    );
};

export default OtherLanguageResultFirst;
export { OtherFirstLanguageTestContext };
