const elMasterCourses = {
  "MA in Teaching English as a Foreign Language (MA in TEFL) - 48 CR": {
    totalCredits: 48,
    duration: "Two Years",
    planYear: "MA in TEFL Quotation - Plan of 2020",
    curriculum: {
      "First Year - First Semester": [
        {
          courseCode: "EFL501",
          courseName: "Theories of Foreign Language Learning",
          credits: 4,
          prerequisite: "None",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 565,
            books: 0,
            lms: 0,
            total: 565
          }
        },
        {
          courseCode: "EFL502",
          courseName: "Research Methods",
          credits: 4,
          prerequisite: "None",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 551,
            books: 0,
            lms: 0,
            total: 551
          }
        },
        {
          courseCode: "EFL503",
          courseName: "English Language Teaching Methods: Receptive Skills (I)",
          credits: 4,
          prerequisite: "None",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 593,
            books: 0,
            lms: 0,
            total: 593
          }
        }
      ],
      "First Year - Second Semester": [
        {
          courseCode: "EFL504",
          courseName: "English Language Teaching Methods: Productive Skills (II)",
          credits: 4,
          prerequisite: "EFL501, EFL502",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 514,
            books: 0,
            lms: 0,
            total: 514
          }
        },
        {
          courseCode: "EFL505",
          courseName: "Technology in the Classroom",
          credits: 4,
          prerequisite: "EFL501, EFL502",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 548,
            books: 0,
            lms: 0,
            total: 548
          }
        },
        {
          courseCode: "EFL506",
          courseName: "Classroom Management",
          credits: 4,
          prerequisite: "EFL501, EFL502",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 531,
            books: 0,
            lms: 0,
            total: 531
          }
        }
      ],
      "Second Year - First Semester": [
        {
          courseCode: "EFL507",
          courseName: "Foreign Language Testing",
          credits: 4,
          prerequisite: "EFL501, EFL502",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 532,
            books: 0,
            lms: 0,
            total: 532
          }
        },
        {
          courseCode: "EFL508",
          courseName: "Practicum",
          credits: 4,
          prerequisite: "EFL503, EFL504, EFL505, EFL506",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 533,
            books: 0,
            lms: 0,
            total: 533
          }
        },
        {
          courseCode: "EFL529",
          courseName: "Proposal Prep.",
          credits: 4,
          prerequisite: "EFL501, EFL502",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 529,
            books: 0,
            lms: 0,
            total: 529
          }
        }
      ],
      "Second Year - Second Semester": [
        {
          courseCode: "EFL531",
          courseName: "Thesis Module",
          credits: 12,
          prerequisite: "EFL529",
          category: "Core Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 1614,
            books: 0,
            lms: 0,
            total: 1614
          }
        }
      ]
    },
    additionalFees: {
      description: "Other Fees",
      fees: [
        {
          item: "Registration Fees (32 BD) * 4 semesters",
          amount: 128,
          currency: "Bahraini Dinars"
        },
        {
          item: "Value Added Service Fees (10 BD) * 4 semesters",
          amount: 40,
          currency: "Bahraini Dinars"
        },
        {
          item: "Application Fees and HEC - Unified Student File",
          amount: 120,
          currency: "Bahraini Dinars"
        },
        {
          item: "Student Fund Fees (2 BD) * 4 semesters",
          amount: 8,
          currency: "Bahraini Dinars"
        },
        {
          item: "Student ID Card Fees",
          amount: 5,
          currency: "Bahraini Dinars"
        },
        {
          item: "Graduation Fees",
          amount: 150,
          currency: "Bahraini Dinars"
        }
      ],
      totalAdditionalFees: 451,
      totalProgramFees: 6510,
      grandTotal: 6961
    }
  }
};

module.exports = elMasterCourses;