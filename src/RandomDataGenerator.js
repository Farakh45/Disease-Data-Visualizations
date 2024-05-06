// Helper function to pick a random item from an array
const randomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

// Helper function to generate a random alphanumeric ID
const randomId = () => {
  return Math.random().toString(36).substring(2, 15);
};

// Helper function to generate a random disease name
const randomDiseaseName = () => {
  const prefixes = ["Acute", "Chronic", "Viral", "Bacterial", "Autoimmune"];
  const conditions = ["Inflammation", "Syndrome", "Disorder", "Malady", "Condition"];
  return `${randomItem(prefixes)} ${randomItem(conditions)}`;
};

// Function to generate a set of random diseases
const generateRandomDiseases = (count) => {
  const severityLevels = ["Mild", "Moderate", "Severe"];
  const clinicalStatuses = ["active", "remission", "resolved"];
  const verificationStatuses = ["confirmed", "unconfirmed", "provisional"];

  const diseases = [];
  for (let i = 0; i < count; i++) {
    diseases.push({
      resource: {
        resourceType: "Condition",
        id: randomId(),
        severity: {
          coding: [{ display: randomItem(severityLevels) }],
        },
        clinicalStatus: {
          coding: [{ code: randomItem(clinicalStatuses) }],
        },
        verificationStatus: {
          coding: [{ code: randomItem(verificationStatuses) }],
        },
        code: { text: randomDiseaseName() },
      },
    });
  }

  return { entry: diseases };
};

// Generate 50 random diseases
const fiftyRandomDiseases = generateRandomDiseases(50);

export { generateRandomDiseases, fiftyRandomDiseases };
