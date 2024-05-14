import express from 'express'
import cors from 'cors'
const app=express();
app.use(cors()); // Enable CORS for all routes

app.get('/',(req,res)=>{
    res.send("server is ready")
});
// get a 5 jokes    
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            "resourceType": "Bundle",
            "id": "6acc8757-84dc-4d9d-ac71-f07d85e4bd02",
            "meta": {
                "lastUpdated": "2024-05-04T20:23:50.288+00:00"
            },
            "type": "searchset",
            "link": [
                {
                    "relation": "self",
                    "url": "https://hapi.fhir.org/baseR4/Condition"
                },
                {
                    "relation": "next",
                    "url": "https://hapi.fhir.org/baseR4?_getpages=6acc8757-84dc-4d9d-ac71-f07d85e4bd02&_getpagesoffset=20&_count=20&_pretty=true&_bundletype=searchset"
                }
            ],
            "entry": [
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/000000000-0000000000001-OPD-1-condition-1",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "000000000-0000000000001-OPD-1-condition-1",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-05-11T04:59:37.989+00:00",
                            "source": "#i7DWQu21YfVKUMBf",
                            "profile": [
                                "https://www.healthlink.go.th/fhir/StructureDefinition/HealthLinkCondition"
                            ]
                        },
                        "identifier": [
                            {
                                "use": "official",
                                "system": "http://203.157.10.8/hcode_2020/query_set.php",
                                "value": "000000000"
                            }
                        ],
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "active",
                                    "display": "Active"
                                }
                            ]
                        },
                        "verificationStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                                    "code": "unconfirmed",
                                    "display": "Unconfirmed"
                                }
                            ]
                        },
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "problem-list-item",
                                        "display": "Problem List Item"
                                    }
                                ]
                            }
                        ],
                        "severity": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "255604002",
                                    "display": "Mild"
                                }
                            ]
                        },
                        "code": {
                            "text": "Asthma"
                        },
                        "subject": {
                            "reference": "Patient/c0000000000001"
                        },
                        "encounter": {
                            "reference": "Encounter/000000000-0000000000001-OPD-1"
                        },
                        "onsetString": "childhood",
                        "recordedDate": "2021-04-30"
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0002fff8-11c5-5d6d-975a-b926a13bb02b",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0002fff8-11c5-5d6d-975a-b926a13bb02b",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:54:46.141+00:00",
                            "source": "#y74eY8SopQxzhuW3",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "28108313-4-Z8546"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd10",
                                    "code": "Z8546",
                                    "display": "Personal history of malignant neoplasm of prostate"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/b410dd44-7d65-56f9-974f-2751e8aa80e2"
                        },
                        "encounter": {
                            "reference": "Encounter/ca52755d-7780-524a-a5f8-6c5d2fc2136a"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/00104b3b-d606-4352-b522-720ffb3a62c0",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "00104b3b-d606-4352-b522-720ffb3a62c0",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-11-18T22:50:13.850+00:00",
                            "source": "#MkRh9TSHoYvo54hZ"
                        },
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "active"
                                }
                            ]
                        },
                        "verificationStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                                    "code": "confirmed"
                                }
                            ]
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "7200002",
                                    "display": "Alcoholism"
                                }
                            ],
                            "text": "Alcoholism"
                        },
                        "subject": {
                            "reference": "Patient/baaff588-1dd1-4a57-b6e9-f1f286d667ab"
                        },
                        "encounter": {
                            "reference": "Encounter/9b08f76e-f6f3-4458-bf29-b8f69e43ec8b"
                        },
                        "onsetDateTime": "2013-05-31T11:49:16+08:00",
                        "recordedDate": "2013-05-31T11:49:16+08:00"
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/001381400-0000000000003-OPD-1-condition-1",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "001381400-0000000000003-OPD-1-condition-1",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2021-01-18T03:13:34.926+00:00",
                            "source": "#nvfRvIy7IVpGOzjh"
                        },
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "active",
                                    "display": "Active"
                                }
                            ]
                        },
                        "verificationStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                                    "code": "unconfirmed",
                                    "display": "Unconfirmed"
                                }
                            ]
                        },
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "75326-9",
                                        "display": "Problem"
                                    }
                                ]
                            }
                        ],
                        "severity": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "255604002",
                                    "display": "Mild"
                                }
                            ]
                        },
                        "code": {
                            "text": "Asthma"
                        },
                        "subject": {
                            "reference": "Patient/c0000000000003"
                        },
                        "encounter": {
                            "reference": "Encounter/001381400-0000000000003-OPD-1"
                        },
                        "onsetString": "childhood",
                        "recordedDate": "2020-07-08"
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0014d847-44bd-5bfa-ac44-f411071c1e72",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0014d847-44bd-5bfa-ac44-f411071c1e72",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:21.863+00:00",
                            "source": "#6Nu9k8KJkFogAMAm",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "21457723-17-F329"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd10",
                                    "code": "F329",
                                    "display": "Major depressive disorder, single episode, unspecified"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/91f25704-6153-5259-bdd7-2ca6478de14a"
                        },
                        "encounter": {
                            "reference": "Encounter/10281e22-4197-5100-a745-8fa0f6afd023"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/00226598-3cca-4ac2-8f14-f26c1d6f9813",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "00226598-3cca-4ac2-8f14-f26c1d6f9813",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2022-10-11T01:53:52.444+00:00",
                            "source": "#cBw9YSCqSQFNQttM"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "73211009",
                                    "display": "Diabetes mellitus (disorder)"
                                }
                            ],
                            "text": "糖尿病"
                        },
                        "subject": {
                            "reference": "Patient/126c148e-e4b5-4b01-80fc-ed4baf0623a1"
                        },
                        "encounter": {
                            "reference": "Encounter/1448f187-7f1c-4850-a21b-ad1e7afa690a"
                        },
                        "recorder": {
                            "reference": "Practitioner/5e8b18b7-f921-40c0-93ee-e763fb62bdb5"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/00368789-723d-37f4-9768-abd29b985b24",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "00368789-723d-37f4-9768-abd29b985b24",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2022-02-10T15:09:13.014+00:00",
                            "source": "#n8q9QO1PBPXsQcxE"
                        },
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "active"
                                }
                            ]
                        },
                        "code": {
                            "text": "Virusinfektion"
                        },
                        "subject": {
                            "reference": "Patient/7b2230e5-b935-3009-a19d-125e257b96e9"
                        },
                        "encounter": {
                            "reference": "Encounter/a76642a4-6cfd-388d-82a1-b6482f3f8dcd"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/00368789-723d-37f4-9768-abd29b985b25",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "00368789-723d-37f4-9768-abd29b985b25",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2022-02-10T15:10:05.331+00:00",
                            "source": "#IgCAb9jyWZkOxlAb"
                        },
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "active"
                                }
                            ]
                        },
                        "code": {
                            "text": "Virusinfektion"
                        },
                        "subject": {
                            "reference": "Patient/7b2230e5-b935-3009-a19d-125e257b96e8"
                        },
                        "encounter": {
                            "reference": "Encounter/a76642a4-6cfd-388d-82a1-b6482f3f8dcd"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/003ea728-0e89-5fd8-959e-7c2997609c80",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "003ea728-0e89-5fd8-959e-7c2997609c80",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:22.861+00:00",
                            "source": "#kdvualnjcwNW2wUW",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "29654498-4-20500"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd9",
                                    "code": "20500",
                                    "display": "Acute myeloid leukemia, without mention of having achieved remission"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/4f773083-7f4d-5378-b839-c24ca1e15434"
                        },
                        "encounter": {
                            "reference": "Encounter/9d7fe19e-49db-5340-8738-284196dfb4c6"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0045ea6b-813d-4879-a67b-0de7c1662811",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0045ea6b-813d-4879-a67b-0de7c1662811",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2020-03-24T19:15:12.708+00:00",
                            "source": "#sKOzyK14sW8DTGbQ",
                            "profile": [
                                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
                            ],
                            "tag": [
                                {
                                    "system": "https://smarthealthit.org/tags",
                                    "code": "Covid19 synthetic population from Synthea"
                                }
                            ]
                        },
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "active"
                                }
                            ]
                        },
                        "verificationStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                                    "code": "confirmed"
                                }
                            ]
                        },
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis",
                                        "display": "Encounter Diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "88805009",
                                    "display": "Chronic congestive heart failure (disorder)"
                                }
                            ],
                            "text": "Chronic congestive heart failure (disorder)"
                        },
                        "subject": {
                            "reference": "Patient/0c0835e0-1b1c-4ede-9e0f-bd7a7da15fbd"
                        },
                        "encounter": {
                            "reference": "Encounter/15471605-7642-4c1b-af0e-35910081bd6c"
                        },
                        "onsetDateTime": "2010-04-05T13:44:18-05:00",
                        "recordedDate": "2010-04-05T13:44:18-05:00"
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0050bab7-39ba-54af-bf98-7944c462f593",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0050bab7-39ba-54af-bf98-7944c462f593",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:23.862+00:00",
                            "source": "#LXVUqgVDDTPoqqtQ",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "20973395-4-2720"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd9",
                                    "code": "2720",
                                    "display": "Pure hypercholesterolemia"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/8c3ba37b-ba80-576a-8028-5a58eccb6156"
                        },
                        "encounter": {
                            "reference": "Encounter/038cba12-ed35-511b-a58c-d6a4b6f06a3d"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/005132a9-1cd6-53ed-a5b1-8fe05c734cb2",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "005132a9-1cd6-53ed-a5b1-8fe05c734cb2",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:24.863+00:00",
                            "source": "#hbsc8tL4nk6il7cg",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "21101111-2-40391"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd9",
                                    "code": "40391",
                                    "display": "Hypertensive chronic kidney disease, unspecified, with chronic kidney disease stage V or end stage renal disease"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/72d56b49-a7ee-5b9a-a679-25d1c836d3c3"
                        },
                        "encounter": {
                            "reference": "Encounter/18069616-a400-571e-8922-2c8673abe464"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/005751b1-07af-5e55-ab40-d90368b60c31",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "005751b1-07af-5e55-ab40-d90368b60c31",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:25.860+00:00",
                            "source": "#H81KjzVwW0uZ7DLb",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "24357615-21-E669"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd10",
                                    "code": "E669",
                                    "display": "Obesity, unspecified"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/cb70e6ae-90b1-562b-8ab0-467c65d18d5e"
                        },
                        "encounter": {
                            "reference": "Encounter/6837ee12-5814-5f82-9160-061c84ac0385"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0059dd4a-3f11-58c9-96ed-cb3c0028f932",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0059dd4a-3f11-58c9-96ed-cb3c0028f932",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:26.862+00:00",
                            "source": "#gLo3N06bZqX2DLTP",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "23831430-5-5849"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd9",
                                    "code": "5849",
                                    "display": "Acute kidney failure, unspecified"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/8adbf3e4-47ff-561e-b1b6-746ee32e056d"
                        },
                        "encounter": {
                            "reference": "Encounter/43b5d98a-4915-5e13-8e0c-151755dd9e70"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0065020c-dca2-46ec-80aa-77ef0bce112a",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0065020c-dca2-46ec-80aa-77ef0bce112a",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-12-07T08:41:16.339+00:00",
                            "source": "#spNJc0sLQa8VqtUQ",
                            "profile": [
                                "https://hitstdio.ntunhs.edu.tw/insurance-claim/StructureDefinition/condition-iclaim"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.csh.org.tw/",
                                "value": "J14022039F"
                            }
                        ],
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "remission"
                                }
                            ]
                        },
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-cm-2014-tw"
                                },
                                {
                                    "system": "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-9-cm-2001-tw",
                                    "code": "G463",
                                    "display": "腦幹中風症候群"
                                }
                            ],
                            "text": "肢體變形"
                        },
                        "subject": {
                            "reference": "Patient/7c61b9db-ad37-4021-8fa2-eaabf1476958"
                        },
                        "encounter": {
                            "reference": "Encounter/109f38e3-66b3-4f7b-8d6b-10bc17268321"
                        },
                        "recordedDate": "2023-10-25",
                        "recorder": {
                            "display": "王OO"
                        },
                        "note": [
                            {
                                "text": "多休息"
                            }
                        ]
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0069b200-1f68-45d5-81ed-83ccd7bc34b0",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0069b200-1f68-45d5-81ed-83ccd7bc34b0",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2022-01-20T09:25:21.354+00:00",
                            "source": "#K18GUzf4ehSle1MM"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "56265001",
                                    "display": "Heart disease"
                                }
                            ],
                            "text": "Heart disease"
                        },
                        "subject": {
                            "reference": "Patient/88676507-9eb7-4fa1-b0a7-19ef8f8e98b5"
                        },
                        "encounter": {
                            "reference": "Encounter/4ba977ff-72ef-4d0b-8b6d-e048fef110a9"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0074f147-57c1-5047-80c8-41b01e6b1306",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0074f147-57c1-5047-80c8-41b01e6b1306",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:27.862+00:00",
                            "source": "#yrFIh3WUu6TxPGzh",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "27487226-1-J189"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd10",
                                    "code": "J189",
                                    "display": "Pneumonia, unspecified organism"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/cb70e6ae-90b1-562b-8ab0-467c65d18d5e"
                        },
                        "encounter": {
                            "reference": "Encounter/85949830-1cbc-596c-8af3-ad5e449cb958"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/00871735-b6ff-55e7-8653-98183f1cff74",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "00871735-b6ff-55e7-8653-98183f1cff74",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2023-08-18T03:57:28.861+00:00",
                            "source": "#2UsE68IWrpXVRsEn",
                            "profile": [
                                "http://fhir.mimic.mit.edu/StructureDefinition/mimic-condition"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://fhir.mimic.mit.edu/identifier/condition",
                                "value": "22416954-4-I120"
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://fhir.mimic.mit.edu/CodeSystem/diagnosis-icd10",
                                    "code": "I120",
                                    "display": "Hypertensive chronic kidney disease with stage 5 chronic kidney disease or end stage renal disease"
                                }
                            ]
                        },
                        "subject": {
                            "reference": "Patient/1cf9e585-806c-513b-80af-4ca565a28231"
                        },
                        "encounter": {
                            "reference": "Encounter/fc592968-a40f-536f-b0a3-66389966524d"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/008731f9-9be9-4ce2-864c-e662417b8973",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "008731f9-9be9-4ce2-864c-e662417b8973",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2022-10-25T09:54:45.305+00:00",
                            "source": "#pHZwPpihwr4liE5p"
                        },
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                    "code": "problem-list-item",
                                    "display": "Problem List Item"
                                }
                            ]
                        },
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "problem-list-item",
                                        "display": "Problem List Item"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "https://www.nfa.gov.tw",
                                    "code": "110005",
                                    "display": "Stomach ache"
                                }
                            ],
                            "text": "腹痛"
                        },
                        "subject": {
                            "reference": "Patient/43245fc2-e0d6-4aa2-8fa7-9f99b081d887"
                        },
                        "encounter": {
                            "reference": "Encounter/0ce88870-f4df-4e10-8eab-ea8af2dbb11a"
                        },
                        "recorder": {
                            "reference": "Practitioner/ce935a04-4d6a-470f-894b-6c717f692308"
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                },
                {
                    "fullUrl": "https://hapi.fhir.org/baseR4/Condition/0088162a-1a4f-4cb8-831c-f7dea2c902ec",
                    "resource": {
                        "resourceType": "Condition",
                        "id": "0088162a-1a4f-4cb8-831c-f7dea2c902ec",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2020-03-24T19:59:09.423+00:00",
                            "source": "#ucOHM3WYOTjaM0BL",
                            "profile": [
                                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
                            ],
                            "tag": [
                                {
                                    "system": "https://smarthealthit.org/tags",
                                    "code": "Covid19 synthetic population from Synthea"
                                }
                            ]
                        },
                        "clinicalStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                                    "code": "active"
                                }
                            ]
                        },
                        "verificationStatus": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                                    "code": "confirmed"
                                }
                            ]
                        },
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                        "code": "encounter-diagnosis",
                                        "display": "Encounter Diagnosis"
                                    }
                                ]
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "429007001",
                                    "display": "History of cardiac arrest (situation)"
                                }
                            ],
                            "text": "History of cardiac arrest (situation)"
                        },
                        "subject": {
                            "reference": "Patient/274bcd07-abbd-4197-842d-61d36e8f7f39"
                        },
                        "encounter": {
                            "reference": "Encounter/0855569f-976c-4fbc-915e-55c45df52ef7"
                        },
                        "onsetDateTime": "2008-03-05T10:45:54-06:00",
                        "recordedDate": "2008-03-05T10:45:54-06:00"
                    },
                    "search": {
                        "mode": "match"
                    }
                }
            ]
        }
    ]
    res.send(jokes);
})

const port=process.env.Port || 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})