import React, { useEffect, useState } from 'react';
import DiseaseGraph from './DiseaseGraph';
import conditionsData from './data/conditions.json'; // Existing data
import Home from './Pages/Home';
import DiseaseList from './DiseaseList';
import { generateRandomDiseases, fiftyRandomDiseases } from './RandomDataGenerator'; // Imports
import './App.css';

const App = () => {
  const [conditions, setConditions] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState(null);

  useEffect(() => {
    const randomConditions = fiftyRandomDiseases.entry; // 50 random diseases

    // Combine with existing JSON data
    const combinedConditions = [...conditionsData.entry, ...randomConditions];

    setConditions(combinedConditions);
  }, []);

  const handleConditionSelect = (condition) => {
    setSelectedCondition(condition);
  };

  return (
    <div className="app-container">
      <Home />
      <h1 className="header">Condition Data Visualizations</h1>

      <div className="select-container">
        <select
          className="condition-select"
          onChange={(e) => {
            const conditionId = e.target.value;
            const condition = conditions.find((c) => c.resource.id === conditionId);
            handleConditionSelect(condition);
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Select a condition
          </option>
          {conditions.map((condition, index) => (
            <option key={index} value={condition.resource.id}>
              {condition.resource.code.text}
            </option>
          ))}
        </select>
      </div>

      <div className="graph-container">
        {selectedCondition && <DiseaseGraph disease={selectedCondition.resource} />}
      </div>
    </div>
  );
};

export default App;
