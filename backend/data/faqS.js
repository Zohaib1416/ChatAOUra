const faqData = {
  academicStatus: {
    expectedToGraduate: {
      question: "When is a student placed on the 'expected to graduate students' list?",
      answer: "When the student has a maximum of 21 credit hours left for the following semester."
    },
    warnedList: {
      question: "When is a student placed on the warned list?",
      answer: "When the student has a cumulative GPA of less than 2.00."
    },
    studentsAtRisk: {
      question: "When is a student placed on the 'students at-risk' list?",
      answer: "When the student has a GPA between 2.00 and 2.33."
    },
    academicWarning: {
      question: "When is a student placed under an 'academic warning'?",
      answer: "The student is placed under an academic warning if he/she gets a GPA of less than 2.00 out of 4.00 points in a regular semester.",
      startApplication: "The academic warning is applied once the student's GPA goes below 2.",
      maximumWarnings: "Five warnings are allowed at AOU.",
      dismissalConditions: [
        "If warnings reach five during five consecutive regular semesters",
        "If student exceeds the allowed period (8 years) for graduation from university", 
        "When student did not register for any courses for more than 4 consecutive semesters"
      ]
    }
  },

  academicAdvising: {
    checkAdvisor: {
      question: "What are the steps to check my academic advisor?",
      answer: "Academic advisor information details are available on the SIS homepage https://sisksa.aou.edu.kw/OnlineServicesBAH"
    }
  },

  courseRegistration: {
    afterEL099Success: {
      creditHours: {
        question: "If EL099 is successfully completed in the current semester, how many credit hours can I register in the following semester?",
        answer: "You can register 8 to 19 credit hours in any regular semester and up to 9 credit hours in summer"
      },
      eligibleCourses: {
        question: "If (EL099) is successfully completed in the current semester, what courses can I register in the following semester?",
        answer: "You can register any of the following university general mandatory requirements: EL111, EL112 (if EL111 is completed or equalized), GR101, TU170, AR111, AR112 (if AR111 is completed), AR113 (for Cyber security & AI), GT101 (for Cyber security & AI), GB102 (for Cyber security & AI) or university general elective requirements (Local (AOU-Bahrain) mandatory requirements): GR131, LAW107.",
        note: "Please note that EL111 is a prerequisite to most major courses."
      }
    },

    withEL111: {
      question: "What courses am I eligible to register for while doing EL111?",
      answer: {
        FBS: "BUS101",
        "FCS-ITC": "MT129 & TM111",
        "FCS-CyberSecurity": "MT129",
        "FCS-AI": "MT129",
        GMDT: "GM101 & GM102",
        FLS: "NO major courses can be registered along with EL111"
      }
    },

    afterEL099Failure: {
      creditHours: {
        question: "If I fail to complete EL099 successfully in the current semester, how many credit hours can I register in the following semester?",
        answer: "You can register for up to 6 credit hours along with EL099, but if your English language needs improvement, it is advised to register EL099 alone."
      },
      eligibleCourses: {
        question: "What courses can I register along with EL099?",
        answer: "University general mandatory requirements: GR101, TU170, AR111, AR112 (if AR111 is completed) AR113 (for Cyber security & AI), GT101 (for Cyber security & AI), GB102 (for Cyber security & AI) or university general elective requirements (Local (AOU-Bahrain) mandatory requirements): GR131, LAW107."
      },
      majorCourses: {
        question: "What major courses can I register for while doing EL099 in addition to the above courses?",
        answer: "No additional courses can be registered with EL099."
      }
    },

    creditHourLimits: {
      regularSemester: {
        minimum: {
          question: "If I have completed at least 24 credit hours, and my GPA is above 2.00, what are the minimum credit hours to be registered in a regular semester?",
          answer: "8 credit hours."
        },
        maximum: {
          question: "If I completed at least 24 credit hours, and my GPA is above 2.00, what is the maximum credit hours to be registered in a regular semester?",
          answer: "19 credit hours."
        },
        exceeding19: {
          question: "Can I register more than 19 credit hours in a regular semester?",
          answer: "In a regular semester, you can register for a maximum of 21 credit hours if your GPA is above 3, but this not applied during the summer semester."
        }
      },
      underWarning: {
        minimum: {
          question: "If I am under warning, what are the minimum credit hours to be registered?",
          answer: "The minimum credit hours are 8."
        },
        maximum: {
          question: "If I am under warning, what are the maximum credit hours to be registered?",
          answer: "The maximum credit hours are 16."
        },
        onlineRegistration: {
          question: "If I am under warning (my GPA is less than 2.00), can I register online?",
          answer: "You will NOT be able to register online unless you contact your academic advisor, and then the online registration will be activated based on the advised courses."
        }
      }
    },

    expectedGraduates: {
      onlineRegistration: {
        question: "If I am expected to graduate, can I register online?",
        answer: "No, online registration is not available for expected graduate students. To register, you must complete the expected graduate form, and submit it along with a copy of your passport to your academic advisor remotely. Your advisor will review and sign the form before sending it to the Admission, Registration, and Examination Department for verification of your status and course enrollment."
      },
      maximumCredits: {
        question: "As an expected graduate student, what is the maximum number of credit hours I can register for in my final semester?",
        answer: "In your final regular semester, you can register for a maximum of 21 credit hours, and in the summer semester, if it is your final semester, you can register for up to 12 credit hours."
      },
      prerequisiteException: {
        question: "In my final semester, if a course and its prerequisite are the only remaining courses I need to complete, what should I do?",
        answer: "Expected graduate students have the option to register for both the courses and their prerequisites together in the final semester. For example, you can register for both part (A) and part (B) of the same course. The academic advisor must contact the ARE department to ensure that both courses appear on the advising screen.",
        note: "The exception is not applied to register Part A and Part B of project TM471 together in one semester."
      }
    },

    prerequisites: {
      incompleteGrade: {
        question: "If I have received an incomplete grade (I) from the previous semester in a prerequisite course, can I enroll in the course that depends on this prerequisite in the current semester?",
        answer: "You will only be permitted to register for the course that depends on the prerequisite if you have achieved a total coursework score of 30 out of 100 in the prerequisite course. Otherwise, you will need to complete the prerequisite before registering for the subsequent course."
      }
    }
  },

  nonArabicSpeakers: {
    equivalentCourses: {
      question: "If I am a non-Arabic speaker, what are the equivalent courses to be undertaken?",
      answer: [
        { nativeSpeaker: "GR101", equivalent: "GR101EL", creditHours: 3 },
        { nativeSpeaker: "AR111", equivalent: "AFL111", creditHours: 3 },
        { nativeSpeaker: "AR112", equivalent: "AFL112", creditHours: 3 },
        { nativeSpeaker: "AR113", equivalent: "AFL113", creditHours: 3 },
        { nativeSpeaker: "LAW107", equivalent: "LAW107EL", creditHours: 2 },
        { nativeSpeaker: "GR131", equivalent: "GR131EL", creditHours: 3 },
        { nativeSpeaker: "GB102", equivalent: "GB102EL", creditHours: 3 }
      ]
    },
    eligibilityCriteria: {
      question: "As a native speaker, which courses from the selection designed for non-native speakers am I eligible to enroll in?",
      answer: "None. Enrollment in courses for non-native speakers is subject to specific eligibility criteria, including: Non-Arabic citizenship, Lack of Arabic language proficiency, No prior education in Arabic language courses"
    }
  },

  courseEqualization: {
    procedures: {
      question: "What are the procedures to be followed in case of equalization?",
      steps: [
        "Newly Accepted students shall provide the needed equivalency documents during the registration period.",
        "ARE collect all the requests that meets the criteria, and provide them to the Local Deans of the faculties to study the requests and decide on the courses to be approved. This shall be done in consistence with AOU bylaw.",
        "The courses which were approved & equalized for the students shall be entered in the SIS system (T) and the student will be notified by SMS about result of the equalization process."
      ]
    }
  },

  degreeDuration: {
    minimum: {
      question: "What is the minimum duration to earn a bachelor's degree? (the minimum number of academic semesters allowed for graduation)",
      answer: "3 years (6 regular semesters)."
    },
    maximum: {
      question: "What is the maximum duration for completing a bachelor's degree? (the maximum number of academic semesters permitted for graduation)",
      answer: "8 years (16 regular semesters)."
    }
  },

  courseRetaking: {
    eligibility: {
      question: "Can I re-register completed courses for the purpose of GPA improvement? Can I repeat completed courses to improve my GPA?",
      answer: "Yes, you have the option to retake AOU completed courses, as well as first-level OU completed courses with a grade of (B) or lower, and OU second and third-level completed courses with a grade of (D)."
    },
    gradeConsideration: {
      question: "Which grade will be considered in case of repeating a course for the purpose of GPA improvement?",
      answer: "For AOU-completed courses and first-level OU-completed courses, the new grade obtained will be factored into the calculation of your overall grade point average (GPA). However, for OU second and third-level completed courses, the new grade that will be considered in the computation of your overall GPA cannot exceed a (C). For instance, if you achieve an 'A' when retaking a course, the grade that will be factored into your GPA will be 'C.' If you achieve a 'D,' then the grade to be considered in your GPA will also be 'D.'"
    }
  },

  gpaCalculation: {
    question: "How can I calculate my GPA?",
    gradePoints: [
      { letterGrade: "A", points: 4.00 },
      { letterGrade: "B+", points: 3.5 },
      { letterGrade: "B", points: 3.00 },
      { letterGrade: "C+", points: 2.5 },
      { letterGrade: "C", points: 2.00 },
      { letterGrade: "D", points: 1.5 }
    ],
    formula: {
      description: "The basic formula for calculating your overall GPA (cumulative) is to divide the total points earned in a program by the total number of credits attempted.",
      semesterGPA: "To calculate your semester GPA you have to divide the total points earned in a semester by the total number of credits attempted.",
      cumulativeGPA: "To calculate your cumulative GPA, you have to divide your total grade points earned in all semesters by your total credits attempted."
    },
    example: {
      courses: [
        { subject: "XX1", creditHours: 2, grade: "A", gradePoints: 4, pointsEarned: 8 },
        { subject: "XX2", creditHours: 3, grade: "B+", gradePoints: 3.5, pointsEarned: 10.5 },
        { subject: "XX3", creditHours: 4, grade: "C+", gradePoints: 2.5, pointsEarned: 10 },
        { subject: "XX4", creditHours: 8, grade: "D", gradePoints: 1.5, pointsEarned: 12 }
      ],
      totalCreditHours: 17,
      totalPointsEarned: 40.5,
      calculatedGPA: 2.38,
      calculation: "40.5/17 = 2.38"
    }
  }
};

module.exports = faqData;