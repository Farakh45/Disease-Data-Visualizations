import React, { useState } from 'react';
import './DiseaseList.css';

const DiseaseList = ({ diseases, onDiseaseClick, onNestedDataChange }) => {
  // State to keep track of the selected disease
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handlePrimaryChange = (event) => {
    const selectedDiseaseName = event.target.value;
    const disease = diseases.find((d) => d.name === selectedDiseaseName);
    setSelectedDisease(disease);
    onDiseaseClick(disease); // Call parent component's handler
  };

  const handleNestedChange = (event) => {
    const selectedData = event.target.value;
    onNestedDataChange(selectedData); // Communicate to the parent component
  };

  return (
    <div className="disease-list-container">
      <h2 className="title">Choose a Disease to View Graph</h2>

      <select
        onChange={handlePrimaryChange}
        defaultValue=""
        className="disease-dropdown"
      >
        <option value="" disabled>
          Select a disease
        </option>
        {diseases.map((disease, index) => (
          <option key={index} value={disease.name}>
            {disease.name}
          </option>
        ))}
      </select>

      {selectedDisease && (
        <div>
          <h3>{selectedDisease.name} Options</h3> {/* Title for nested dropdown */}
          <select
            className="nested-dropdown"
            onChange={handleNestedChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {selectedDisease.data.map((datum, index) => (
              <option key={index} value={datum.label}>
                {datum.label} - {datum.value}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default DiseaseList;
