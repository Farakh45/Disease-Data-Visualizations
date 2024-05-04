// src/data/diseases.js
const prefixes = [
    "Acute",
    "Chronic",
    "Infectious",
    "Viral",
    "Bacterial",
    "Fungal",
    "Parasitic",
    "Autoimmune",
    "Respiratory",
    "Neurological",
    "Cardiovascular",
    "Dermatological",
    "Gastrointestinal",
    "Hematological",
    "Oncological",
  ];
  
  const suffixes = [
    "Syndrome",
    "Disease",
    "Infection",
    "Disorder",
    "Illness",
    "Condition",
    "Malady",
    "Pathology",
    "Virus",
    "Bacteria",
    "Inflammation",
  ];
  
  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const generateRandomName = () => {
    const prefix = getRandomItem(prefixes);
    const suffix = getRandomItem(suffixes);
    return `${prefix} ${suffix}`;
  };
  
  const generateRandomData = (numDiseases) => {
    const diseases = [];
    for (let i = 1; i <= numDiseases; i++) {
      const diseaseName = generateRandomName();
      const cases = Math.floor(Math.random() * 1000) + 1; // Random number between 1 and 1000
      const deaths = Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
      diseases.push({
        name: diseaseName,
        data: [
          { label: 'Cases', value: cases },
          { label: 'Deaths', value: deaths },
        ],
      });
    }
    return diseases;
  };
  
  // Generate a dataset with 500 random diseases
  const diseases = generateRandomData(500);
  
  export default diseases;
  