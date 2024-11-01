import React, { useContext, useState } from 'react';
import axios from 'axios';
import { maritalStatusData } from './MaritalStatus';
// import { isYourSpousePermanentResidentOfCanadaChangeData } from './IsYourSpousePermanentResidentOfCanada';
// import { willYourSpouseComeWithYouToCanadaData } from './WillYourSpouseComeWithYouToCanada';
import { howOldAreYouData } from './HowOldAreYou';
import { levelOfEducationData } from './LevelOfEducation';
import { haveYouEarnedDegreeDiplomaCertificateData } from './HaveYouEarnedDegreeDiplomaCertificate';
import { describeLevelEducationData } from './DescribeLevelEducation';
// import { officialLanguagesAreEnglishAndFrenchData } from './OfficialLanguagesAreEnglishAndFrench';
import { canadaWorkExperienceData } from './CanadaWorkExperience';
import { foreignWorkExperienceData } from './ForeignWorkExperience';
import { certificateOfQualificationFromCanadianData } from './CertificateOfQualificationFromCanadian';
// import { validJobOfferSupportedByLabourMarketImpactAssessmentData } from './ValidJobOfferSupportedByLabourMarketImpactAssessment';
import { nominationCertificateFromData } from './NominationCertificateFrom';
import { yourSpouseOrCommonLawPartnerData } from './YourSpouseOrCommonLawPartner';
import { whichNocData } from './WhichNoc';
import { educationForWhichYourSpouseHasData } from './EducationForWhichYourSpouseHas';
import { skilledWorkExperienceInCanadaDoesYourSpouseData } from './SkilledWorkExperienceInCanadaDoesYourSpouse';
import { LanguageTestContext } from './FirstOfficialLanguage';
import { OtherFirstLanguageTestContext } from './OtherLanguageResultFirst'; 
import { OtherSecondLanguageTestContext } from './OtherLanguageResultSecond';
import { SpouseLanguageTestContext } from './DidYourSpouseTakeLanguageTest';

const CommonData = () => {
    const maritalStatus = useContext(maritalStatusData);
    // const isYourSpousePermanentResidentOfCanada = useContext(isYourSpousePermanentResidentOfCanadaChangeData);
    // const willYourSpouseComeWithYouToCanada = useContext(willYourSpouseComeWithYouToCanadaData);
    const howOldAreYou = useContext(howOldAreYouData);
    const levelOfEducation = useContext(levelOfEducationData);
    const haveYouEarnedDegreeDiplomaCertificate = useContext(haveYouEarnedDegreeDiplomaCertificateData);
    const describeLevelEducation = useContext(describeLevelEducationData);
    // const officialLanguagesAreEnglishAndFrench = useContext(officialLanguagesAreEnglishAndFrenchData);
    const firstOfficialLanguage = useContext(LanguageTestContext);
    const languageTestResults = useContext(OtherFirstLanguageTestContext) || {};
    const otherLanguageTestResults = useContext(OtherSecondLanguageTestContext) || {};
    const canadaWorkExperience = useContext(canadaWorkExperienceData);
    const foreignWorkExperience = useContext(foreignWorkExperienceData);
    const certificateOfQualificationFromCanadian = useContext(certificateOfQualificationFromCanadianData);
    // const validJobOfferSupportedByLabourMarketImpactAssessment = useContext(validJobOfferSupportedByLabourMarketImpactAssessmentData);
    const nominationCertificateFrom = useContext(nominationCertificateFromData);
    const yourSpouseOrCommonLawPartner = useContext(yourSpouseOrCommonLawPartnerData);
    const whichNoc = useContext(whichNocData);
    const educationForWhichYourSpouseHas = useContext(educationForWhichYourSpouseHasData);
    const skilledWorkExperienceInCanadaDoesYourSpouse = useContext(skilledWorkExperienceInCanadaDoesYourSpouseData);
    const spouseLanguageTest = useContext(SpouseLanguageTestContext);

    const getLanguageTestResults = (results) => {
        return {
            secondOfficialLanguageName: results.selectedOption?.value || 'NOT_SELECTED',
            speakingRating: results.speakingScore?.value || 'NOT_SELECTED',
            listeningRating: results.listeningScore?.value || 'NOT_SELECTED',
            readingRating: results.readingScore?.value || 'NOT_SELECTED',
            writingRating: results.writingScore?.value || 'NOT_SELECTED'
        };
    };

    const languageResults = (() => {
        const firstLanguage = firstOfficialLanguage.selectedOption?.value;

        if (firstLanguage === 'CELPIP_G' || firstLanguage === 'IELTS' || firstLanguage === 'PTE_CORE') {
            return getLanguageTestResults(languageTestResults);
        } else if (firstLanguage === 'TEF_CANADA' || firstLanguage === 'TCF_CANADA') {
            return getLanguageTestResults(otherLanguageTestResults);
        } else {
            return getLanguageTestResults({}); // Handle invalid selection
        }
    })();
    console.log(languageResults);

    const [userData, setUserData] = useState(null);

    const inputData = {
        maritalStatus: maritalStatus || 'NOT_SELECTED',
        age: howOldAreYou || 'NOT_SELECTED',
        levelOfEducation: levelOfEducation || 'NOT_SELECTED',
        haveYouEarnedDegreeDiplomaCertificate: haveYouEarnedDegreeDiplomaCertificate || 'NOT_SELECTED',
        describeLevelEducation: describeLevelEducation || 'NOT_SELECTED',
        canadaWorkExperience: canadaWorkExperience || 'NOT_SELECTED',
        foreignWorkExperience: foreignWorkExperience || 'NOT_SELECTED',
        firstOfficialLanguage: {
            firstOfficialLanguageName: firstOfficialLanguage.selectedOption?.value || 'NOT_SELECTED',
            speakingRating: firstOfficialLanguage.speakingScore?.value || 'NOT_SELECTED',
            listeningRating: firstOfficialLanguage.listeningScore?.value || 'NOT_SELECTED',
            readingRating: firstOfficialLanguage.readingScore?.value || 'NOT_SELECTED',
            writingRating: firstOfficialLanguage.writingScore?.value || 'NOT_SELECTED'
        },
        spouseEducation: educationForWhichYourSpouseHas || 'NOT_SELECTED',
        spouseLanguage: {
            spouseLanguageName: spouseLanguageTest.selectedOption?.value || 'NOT_SELECTED',
            speakingRating: spouseLanguageTest.speakingScore?.value || 'NOT_SELECTED',
            listeningRating: spouseLanguageTest.listeningScore?.value || 'NOT_SELECTED',
            readingRating: spouseLanguageTest.readingScore?.value || 'NOT_SELECTED',
            writingRating: spouseLanguageTest.writingScore?.value || 'NOT_SELECTED'
        },
        spouseWorkExperience: skilledWorkExperienceInCanadaDoesYourSpouse || 'NOT_SELECTED',
        certificateOfQualification: certificateOfQualificationFromCanadian || 'NOT_SELECTED',
        provincialNomination: nominationCertificateFrom || 'NOT_SELECTED',
        offerEmploymentFromCanadianCompany: whichNoc || 'NOT_SELECTED',
        educationInCanada: canadaWorkExperience || 'NOT_SELECTED',
        siblingInCanada: yourSpouseOrCommonLawPartner || 'NOT_SELECTED',
        secondOfficialLanguage: languageResults,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Input Data:", inputData); // Log the data being sent

        axios.post("http://localhost:8080/calculate-score", inputData)
            .then((response) => {
                console.log(response);
                setUserData(response.data);
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
            });
    };

    return (
        <div>
            <button
                onClick={handleSubmit}
                type="submit"
                className="m-3 text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
            {userData && (
                <div>
                    <h1><b>Core/Human Capital Factors</b></h1>
                    <div>Age = {userData.ageScore}</div>
                    <div>Level of Education = {userData.educationScore}</div>
                    <div>First Official Language = {userData.firstOfficialLanguageScore}</div>
                    <div>Second Official Language = {userData.secondOfficialLanguageScore}</div>
                    <h1>Official Languages = {userData.subtotalOfOfficialLanguage}</h1>
                    <div>Canadian Work Experience = {userData.canadaExperienceScore}</div>
                    <h1><b>Subtotal - Core/Human Capital Factors = {userData.subtotalOfCoreHumanCapitalFactors}</b></h1>
                    <br />
                    <h1><b>Spouse Factors</b></h1>
                    <div>Level of Education = {userData.spouseEducationScore}</div>
                    <div>First Official Languages = {userData.spouseLanguageTestScore}</div>
                    <div>Canadian Work Experience = {userData.spouseWorkExperienceScore}</div>
                    <div><b>Subtotal - Spouse Factors = {userData.subtotalOfSpouseFactors}</b></div>
                    <br />
                    <div><b>Skill Transferability Factors</b></div>
                    <div><b>Education (to a maximum of 50 points)</b></div>
                    <div>A) Official Language Proficiency and Education = {userData.officialLanguageProficiencyAndEducation}</div>
                    <div>B) Canadian Work Experience and Education = {userData.educationAndCanadaWorkExp}</div>
                    <div>Subtotal = {userData.subtotalOfEducation}</div>
                    <div><b>Foreign Work Experience (to a maximum of 50 points)</b></div>
                    <div>A) Official Language Proficiency and Foreign Work Experience = {userData.foreignWorkExperienceAndLanguageScore}</div>
                    <div>B) Canadian and Foreign Work Experience = {userData.foreignAndCanadianWorkExperienceScore}</div>
                    <div>Subtotal = {userData.subtotalOfForeignWorkExp}</div>
                    <div>Certificate of Qualification = {userData.certificateOfQualificationAndLanguageScore}</div>
                    <div><b>Subtotal Skill Transferability Factors = {userData.subtotalSkillTransferabilityFactors}</b></div>
                    <br />
                    <div><b>Additional Points (to a maximum of 600 points)</b></div>
                    <div>Provincial Nomination = {userData.provincialNominationScore}</div>
                    <div>Job Offer = {userData.offerEmploymentFromCanadianCompanyScore}</div>
                    <div>Study in Canada = {userData.diplomaScore}</div>
                    <div>Sibling in Canada = {userData.siblingInCanadaScore}</div>
                    <div>French-language Skills = {userData.additionalPointsForFrenchAndEnglishScore}</div>
                    <div><b>Subtotal Additional Points = {userData.subtotalOfAdditionalPoints}</b></div>
                    <br />
                    <div><b>Comprehensive Ranking System Formula Grand Total = {userData.totalScore}</b></div>
                </div>
            )}
           
        </div>
    );
};

export default CommonData;
