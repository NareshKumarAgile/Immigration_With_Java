import React, { useState } from 'react';
import MaritalStatus from './MaritalStatus'; // Import your MaritalStatus component

const Common = () => {
  // Initialize state for all dropdowns
  const [formData, setFormData] = useState({
    maritalStatus: '',
    age: '',
    IsYourSpousePermanentResidentOfCanada: '',
    WillYourSpouseComeWithYouToCanada: '',
    LevelOfEducation: '',
    // Add other fields if necessary
  });

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Log form data to the console
    console.log('Form Data:', formData);
  };

  // Update formData based on dropdown changes
  const handleMaritalStatusChange = (status) => {
    setFormData((prevData) => ({
      ...prevData,
      maritalStatus: status,
    }));
  };

  const handleAgeChange = (age) => {
    setFormData((prevData) => ({
      ...prevData,
      age: age,
    }));
  };

  const handleIsYourSpousePermanentResidentOfCanadaChange = (IsYourSpousePermanentResidentOfCanada) => {
    setFormData((prevData) => ({
      ...prevData,
      IsYourSpousePermanentResidentOfCanada: IsYourSpousePermanentResidentOfCanada,
    }));
  };

  const handleWillYourSpouseComeWithYouToCanadaChange = (WillYourSpouseComeWithYouToCanada) => {
    setFormData((prevData) => ({
      ...prevData,
      WillYourSpouseComeWithYouToCanada: WillYourSpouseComeWithYouToCanada,
    }));
  };

  const handleLevelOfEducationChange = (LevelOfEducation) => {
    setFormData((prevData) => ({
      ...prevData,
      LevelOfEducation: LevelOfEducation,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <MaritalStatus 
        onMaritalStatusChange={handleMaritalStatusChange}
        onAgeChange={handleAgeChange}
        onIsYourSpousePermanentResidentOfCanadaChange={handleIsYourSpousePermanentResidentOfCanadaChange}
        onWillYourSpouseComeWithYouToCanadaChange={handleWillYourSpouseComeWithYouToCanadaChange}
        onLevelOfEducationChange={handleLevelOfEducationChange}
        selectedMaritalStatus={formData.maritalStatus}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Common;

 