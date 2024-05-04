import React, { useState } from 'react';
import DiseaseList from './DiseaseList';
import DiseaseGraph from './DiseaseGraph';
import Home from './Pages/Home';
import './App.css';
import diseases from './diseases';

const App = () => {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [selectedNestedData, setSelectedNestedData] = useState(null); // New state for nested data

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease);
  };

  const handleNestedDataChange = (data) => {
    setSelectedNestedData(data); // Update the state with the selected nested data
  };

  return (
    <div>
      <Home />
      <h1 className='apph' style={{ textAlign: 'center' }}>
        Disease Data Visualizations
      </h1>
      <DiseaseList
        diseases={diseases}
        onDiseaseClick={handleDiseaseClick}
        onNestedDataChange={handleNestedDataChange}
      />
      <DiseaseGraph
        disease={selectedDisease}
        selectedNestedData={selectedNestedData} // Pass the new state
      />
    </div>
  );
};

export default App;
