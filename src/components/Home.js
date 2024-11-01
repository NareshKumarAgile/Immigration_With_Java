import React, {  } from "react";
// import MaritalStatus from "./MaritalStatus"
import axios from "axios";
import BottomCard from "./BottomCard";
// import Common from "./Common";
import MaritalStatus from "./MaritalStatus";

const Home = () => {

  const inputData = {
    "maritalStatus": "NEVER_MARRIED",
    "age": "20-29",
    "levelOfEducation": "MASTERS_DEGREE",
    "haveYouEarnedDegreeDiplomaCertificate": "Yes",
    "describeLevelEducation": "One- or two-year diploma or certificate",
    "canadaWorkExperience": "ONE_YEAR",
    "foreignWorkExperience": "FIVE_OR_MORE_YEARS",
    "firstOfficialLanguage": {
      "firstOfficialLanguageName": "TEF_CANADA",
      "speakingRating": "NINE",
      "listeningRating": "NINE",
      "readingRating": "NINE",
      "writingRating": "FIVE"
    },
    "secondOfficialLanguage": {
      "secondOfficialLanguageName": "CELPIP_G",
      "speakingRating": "FOUR",
      "listeningRating": "FOUR",
      "readingRating": "FOUR",
      "writingRating": "FOUR"
    },
    "spouseEducation": "BACHELORS_DEGREE",
    "spouseLanguage": {
        "spouseLanguageName": "TEF_CANADA",
        "speakingRating": "FIVE",
        "listeningRating": "FIVE",
        "readingRating": "FIVE",
        "writingRating": "FIVE"
    },
    "spouseWorkExperience": "TWO_YEARS",
    "certificateOfQualification": "YES",
    "provincialNomination": "YES",
    "offerEmploymentFromCanadianCompany": "NOC_TEER_ZERO",
    "educationInCanada": "THREE_YEARS_OR_LONGER_OR_MASTERS",
    "siblingInCanada": "YES"
  }
  const handleSubmit = (e) => {
    // console.log(this.MaritalStatus.value)
    e.preventDefault();
    axios
      .post("http://localhost:8080/calculate-score", inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="py-[5px] bg-gray-100">
      <div className="grid grid-cols-12  md:mx-10 min-h-fit gap-2 mt-28 mb-40">
        <div className="col-span-full lg:col-span-7">
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-semibold">
              Comprehensive Ranking System (CRS) tool: skilled immigrants
              (Express Entry)
            </h2>
          </div>
          <div className="md:pl-20 pl-10">
            <div className="basis-1">
              <div className="">
                <h2 className="p-2 mt-3 font-semibold md:w-96">
                  Marital Status?
                </h2>
                  <MaritalStatus/>
                  {/* <Common/> */}
                  <br/>

                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-5 lg:col-start-8 border-solid border-0 rounded-2xl mt-10">
          <div className="max-w-full shadow-2xl mx-2 rounded-2xl transition-all duration-500 md:hover:scale-110">
            <div className="flex justify-center items-center">
              <img
                className="w-full h-full rounded-t-2xl"
                src={"/images.jpg"}
                alt=""
              />
            </div>
            <h3 className="text-2xl py-2 text-center">Canada PR</h3>
            <p className="py-2 text-center">
              These workshops with field experts are designed to help you
              approach the job search in an efficient and smart way. Your
              Immigration Expert Consultants is one of the few authorized Canada
              immigration consultants in western India. Our director is a
              Canadian Government approved ICCRC member.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-5 px-[20px]">
        <BottomCard
          image={"/images (2).jpg"}
          heading="Canada PR"
          paragraph="Your Immigration Expert Consultants is one of the few authorized Canada immigration consultants in western India. Our director is a Canadian Government approved ICCRC member."
        />
        <BottomCard
          image={"/images (1).jpg"}
          heading="Canada PR Eligibility Check"
          paragraph="Our director is a Canadian Government approved ICCRC member. Get your Canada PR eligibility checked by the experts."
        />
        <BottomCard
          image={"/download.jpg"}
          heading="Job Search - Canada"
          paragraph="These workshops with field experts are designed to help you approach the job search in an efficient and smart way."
        />
      </div>
    </div>
  );
};

export default Home;
