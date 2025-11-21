const admissionDetails = {
  universityOverview: {
    mission: "To provide high-quality flexible education to all segments of society; through a professionally attractive technical learning environment, which incubates scientific research, innovation and community service, provides graduates with labour market skills and, ultimately contributes to the sustainable development of the Kingdom of Bahrain.",
    characteristics: [
      "Is licensed by the Higher Education Council",
      "Has a scientific partnership with the Open University in the United Kingdom (OU-UK)",
      "A Dual Award; one from Arab Open University, Bahrain, and the other from The Open University, UK",
      "Non-profit institution that offers affordable tuition fees",
      "Has a flexible educational system which allows students to study and work at the same time",
      "Adopts English medium instruction"
    ]
  },
  
  undergraduatePrograms: {
    applicationUrl: "https://sisksa.aou.edu.kw/OnlineApplicationBAH/",
    
    availablePrograms: {
      "Faculty of Business Studies": [
        {
          degree: "Bachelor",
          programme: "BA (Hons) Business Studies (Systems Practice)",
          validation: "OU Validated"
        }
      ],
      "Faculty of Computer Studies": [
        {
          degree: "Bachelor",
          programme: "BSc (Hons) Artificial Intelligence",
          validation: "OU Validated"
        },
        {
          degree: "Bachelor",
          programme: "BSc (Hons) Cyber Security",
          validation: "OU Validated"
        },
        {
          degree: "Bachelor",
          programme: "BSc (Hons) Data Science",
          validation: "OU Validated"
        },
        {
          degree: "Bachelor",
          programme: "BSc in Graphic and Multimedia Design Technology",
          validation: null
        },
        {
          degree: "Bachelor",
          programme: "BSc. Hons in Information Technology and Computing",
          validation: "OU Validated"
        }
      ],
      "Faculty of Language Studies": [
        {
          degree: "Bachelor",
          programme: "BA (Hons) English Language and Literature",
          validation: "OU Validated"
        }
      ]
    },

    admissionRequirements: {
      documents: [
        "The application number you received after completing the admission process online",
        "One personal photo",
        "Copy of Valid Passport",
        "Copy of personal identification card",
        "Valid residence (for non-Bahrainis)",
        "Admission fees",
        "Accredited official secondary school certificate"
      ],
      
      academicRequirements: [
        "Obtain a general secondary school certificate or equivalent, which must be approved by the Ministry of Education in Bahrain",
        "Completing the English Placement Test of Arab Open University or submitting internationally accredited English language examination results"
      ],
      
      englishLanguageRequirements: {
        TOEFL: {
          paperBased: 477,
          computerBased: 153,
          internetBased: 53
        },
        IELTS: 4.5,
        validityPeriod: "2 years",
        note: "If the student doesn't have any of the above mentioned test scores, s/he will have to take the English placement test provided by AOU and must get a good score to be admitted in the chosen program directly. Otherwise, students will have to take the English Orientation course to improve their language proficiency before starting the program."
      }
    },

    admissionFees: {
      "BA (Hons) Business Studies (Systems Practice)": {
        admissionApplicationFees: 30,
        placementTestEnglish: 12,
        placementTestMath: 0,
        hecFees: 20,
        totalFees: 62,
        currency: "BHD"
      },
      "BSc (Hons) Information Technology & Computing": {
        admissionApplicationFees: 30,
        placementTestEnglish: 12,
        placementTestMath: 12,
        hecFees: 20,
        totalFees: 74,
        currency: "BHD"
      },
      "BA (Hons) English Language and Literature": {
        admissionApplicationFees: 30,
        placementTestEnglish: 12,
        placementTestMath: 0,
        hecFees: 20,
        totalFees: 62,
        currency: "BHD"
      },
      "BSc in Graphics and Multimedia Design / Technology": {
        admissionApplicationFees: 30,
        placementTestEnglish: 12,
        placementTestMath: 0,
        hecFees: 20,
        totalFees: 62,
        currency: "BHD"
      },
      "BSc (Hons) Artificial Intelligence": {
        admissionApplicationFees: 30,
        placementTestEnglish: 12,
        placementTestMath: 12,
        hecFees: 20,
        totalFees: 74,
        currency: "BHD"
      },
      "BSc (Hons) Cyber Security": {
        admissionApplicationFees: 30,
        placementTestEnglish: 12,
        placementTestMath: 12,
        hecFees: 20,
        totalFees: 74,
        currency: "BHD"
      }
    },

    certificateAttestation: {
      bahrain: {
        privateSchool: "Submit the certificate and transcript of all semesters attested by the Directorate of Private Education in the Ministry of Education along with an equalization letter issued by them"
      },
      gccCountries: {
        governmentSchool: "Submit the certificate and transcript of all semesters attested by the Ministry of Foreign Affairs in the country of origin, the country's embassy in Bahrain, and the Ministry of Foreign Affairs in Bahrain",
        privateSchool: "Refer to the university's registration department to receive a letter requesting to equalized your secondary school certificate, then take this letter along with your original certificate and transcript (attested by Ministry of Foreign Affairs in country of origin, country's embassy in Bahrain, and Ministry of Foreign Affairs in Bahrain) to the Directorate of Examination in the Ministry of Education"
      },
      otherCountries: {
        arabAndNonArab: "Refer to the university's registration department to receive a letter requesting to equalized your secondary school certificate, then take this letter along with your original certificate and transcript (attested by Ministry of Foreign Affairs in country of origin, country's embassy in Bahrain, and Ministry of Foreign Affairs in Bahrain) to the Credentials Evaluation Section in the Ministry of Education in Bahrain"
      }
    },

    transferRequirements: {
      documents: [
        "Graduation certificate or withdrawal letter from the previous university",
        "Transcript and courses descriptions"
      ],
      attestationRequirements: {
        bahrainPrivateUniversity: "Copy of graduation certificate or withdrawal letter from previous university along with transcript attested by the Higher Education Council in Bahrain",
        gccCountries: "Documents should be attested by the higher education council in the country of origin, the country's embassy in Bahrain, and the Ministry of Foreign Affairs in Bahrain",
        otherCountries: "Documents should be attested by the higher education council in the country of origin, country's embassy in Bahrain, and the Ministry of Foreign Affairs in Bahrain with an equivalence letter issued by the ministry of education in Bahrain"
      }
    },

    cancellationConditions: [
      "Violation of any of the admission's terms and conditions",
      "If the accepted student did not register any course during his/her first semester in the university"
    ]
  },

  postgraduatePrograms: {
    applicationUrl: "https://sisksa.aou.edu.kw/OnlineApplicationBAH/",
    
    availablePrograms: {
      "Faculty of Language Studies": [
        {
          degree: "Master",
          programme: "Master in Teaching English as a Foreign language (MA in TEFL)",
          validation: "OU Validated"
        }
      ]
    },

    admissionRequirements: {
      documents: [
        "The application number you received after completing your online application",
        "Three personal photos",
        "Copy of Valid Passport",
        "Copy of personal identification card",
        "Valid residence (for non-Bahrainis)",
        "Admission fees",
        "A copy of Medical Fitness certificate issued from an accredited health center/hospital",
        "A copy of the bachelor's degree in English Language and Literature, or any related programme",
        "A copy of the Graduation Letter from the Bachelor's program in English Language and Literature, or any related programme",
        "A copy of the official academic transcript of the Bachelor's Degree",
        "Accredited official secondary school certificate"
      ],
      
      academicRequirements: [
        "The applicant must hold a bachelor's degree in English Language and Literature, or a related discipline, with a cumulative GPA of GOOD or higher",
        "The BA certificate needs to be approved by the Ministry of Education in the Kingdom of Bahrain",
        "The applicant must submit evidence of passing one of the internationally accredited English language tests"
      ],
      
      englishLanguageRequirements: {
        TOEFL: {
          paperBased: 550
        },
        IELTS: 6.0,
        validityPeriod: "2 years",
        note: "Expired scores cannot be accepted"
      }
    },

    admissionFees: {
      "MA in Teaching English as a Foreign Language (MA in TEFL)": {
        admissionApplicationFees: 100,
        placementTestEnglish: 0,
        placementTestMath: 0,
        hecFees: 20,
        totalFees: 120,
        currency: "BHD"
      }
    },

    certificateAttestation: {
      bahrainPrivateUniversity: "Certificates must be attested by the Secretariat General of the Higher Education Council if they are issued by a private university in the Kingdom of Bahrain",
      outsideBahrain: "All university graduates from outside the Kingdom of Bahrain must attest the Bachelor's Degree and the last page of the transcript from the Ministry of Foreign Affairs in the country from where the BA degree was obtained, the country's embassy in the Kingdom of Bahrain, and the Ministry of Foreign Affairs in the Kingdom of Bahrain",
      secondarySchoolCertificate: {
        bahrain: {
          privateSchool: "Submit the certificate and transcript of all semesters attested by the Directorate of Private Education in the Ministry of Education along with an equalization letter issued by them"
        },
        gccCountries: {
          governmentSchool: "Submit the certificate and transcript of all semesters attested by the Ministry of Foreign Affairs in the country of origin, the country's embassy in The Kingdom of Bahrain, and the Ministry of Foreign Affairs in The Kingdom of Bahrain",
          privateSchool: "Refer to the university's registration department to receive a letter requesting to equalize your secondary school certificate, then take this letter along with your original certificate and transcript (attested by Ministry of Foreign Affairs in country of origin, country's embassy in The Kingdom of Bahrain, and Ministry of Foreign Affairs in The Kingdom of Bahrain) to the Directorate of Examination in the Ministry of Education"
        },
        otherCountries: {
          arabAndNonArab: "Refer to the university's registration department to receive a letter requesting to equalize your secondary school certificate, then take this letter along with your original certificate and transcript (attested by Ministry of Foreign Affairs in country of origin, country's embassy in The Kingdom of Bahrain, and Ministry of Foreign Affairs in Bahrain) to the Credentials Evaluation Section in the Ministry of Education in The Kingdom of Bahrain"
        }
      }
    },

    cancellationConditions: [
      "Violation of any of the admission's terms and conditions",
      "If the accepted student did not register any course during his/her first semester at University"
    ]
  },

  additionalInformation: {
    admissionPolicyLink: "Link", // Placeholder as actual link not provided
    notes: [
      "University enrollment fee is non-refundable",
      "All scores for English language tests expire in 2 years",
      "Names on certificates must match exactly the name in the passport"
    ]
  }
};

module.exports = admissionDetails;