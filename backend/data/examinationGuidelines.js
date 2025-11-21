const examinationGuidelines = {
  courseAssessment: {
    totalMarks: 100,
    distribution: {
      finalExamination: {
        marks: 50,
        percentage: "50%"
      },
      continuousAssessment: {
        marks: 50,
        percentage: "50%",
        breakdown: {
          tutorMarkedAssignments: {
            marks: 20,
            percentage: "20%",
            abbreviation: "TMAs"
          },
          midTermExamination: {
            marks: 30,
            percentage: "30%",
            abbreviation: "MTA"
          }
        }
      }
    }
  },

  tutorMarkedAssignments: {
    name: "Tutor Marked Assignments (TMAs)",
    marks: 20,
    requirements: {
      submission: "Student must submit course assignment before corresponding deadline date decided on approved academic calendar",
      penalty: "Student will be given zero mark for every non-submitted assignment before deadline unless valid excuse is presented"
    },
    excusePolicy: {
      gracePeriod: "7 days maximum from deadline date",
      condition: "Valid excuse must be presented",
      penalty: "Grades will be deducted from total TMA mark even with valid excuse"
    }
  },

  examinations: {
    midTermAndFinalExams: {
      scheduling: {
        uniformity: "Held at same time and same date in all Branches",
        announcement: "Unified Exam Schedules posted at beginning of each semester by Examination Department"
      },
      absenteePolicy: {
        defaultMark: "Zero mark for absent students",
        excuseSubmission: {
          timeLimit: "Within 3 days from examination date",
          method: "Online through Exam Postponed System"
        },
        excuseProcess: {
          authority: "Branch Examination Committee (BEC)",
          decision: "Study submitted exam excuses and decide acceptance or rejection"
        },
        acceptedExcuse: {
          grade: "Letter (I) for Incomplete",
          opportunity: "Allowed to sit for makeup exam in first subsequent session"
        },
        failedMakeup: {
          consequence: "Symbol (I) replaced by letter (F) Fail in the course"
        }
      }
    }
  },

  failureConditions: {
    continuousAssessmentFailure: {
      condition: "Mark in Continuous Assessment (TMA and MTA) less than 15 out of 50 marks",
      grade: "FC",
      description: "Failed in Continuous Assessment"
    },
    finalExamAbsence: {
      condition: "Student absent in Final exam with no valid excuse",
      grade: "FA",
      description: "Fail due absence in Final exam"
    },
    finalExamFailure: {
      condition: "Student marks in Final Examination less than 20 out of 50 marks",
      grade: "FF",
      description: "Failed in the Final Exam"
    },
    overallFailure: {
      condition: "Student final mark (total of Continuous Assessments and Final Examination) below 50",
      grade: "F",
      description: "Fail"
    }
  },

  gradingSystem: {
    letterGrades: [
      { letter: "A", points: 4.0 },
      { letter: "B+", points: 3.5 },
      { letter: "B", points: 3.0 },
      { letter: "C+", points: 2.5 },
      { letter: "C", points: 2.0 },
      { letter: "D", points: 1.5 },
      { letter: "F", points: 0.0 }
    ],
    minimumPassingGrade: {
      grade: "D",
      description: "Minimum passing grade for all courses"
    }
  },

  appealSystem: {
    definition: {
      description: "Formal request for review of grades scored in continuous assessment (MTA, TMA) and final exam",
      scope: "Student may appeal against grades awarded in assessment as per formal procedures set by university"
    },
    
    appealPeriod: {
      duration: "One week",
      startDate: "After posting the approved results",
      applicableFor: ["MTA", "TMA", "Final exam"]
    },

    appealProcedure: {
      initialAppeal: {
        timeframe: "Within one week from posting approved results",
        method: "Fill online appeals form",
        documentation: "Student can attach any relevant documents",
        authority: "Program Appeal Committee",
        process: [
          "Study student's appeal",
          "Check for errors in entering course marks",
          "Verify absence of unmarked questions"
        ],
        notification: "Student notified during second week from date of posting approved results"
      },
      
      reAppeal: {
        condition: "If student not satisfied with appeal results",
        timeframe: "During third week from date of posting approved results",
        authority: "Program Re-appeal Committee",
        process: [
          "Study student's appeal",
          "Review scientific content of appeal",
          "Take final decision"
        ],
        notification: "Student notified during fourth week from date of posting approved results"
      }
    },

    appealRestrictions: {
      timeLimit: "No right to appeal if not committed to decided timeframe",
      finality: "Student result considered final after one semester and cannot be modified"
    }
  },

  examinationGuidelines: {
    documentCode: "AOUBH EX-001K Ver.1",
    title: "Examination Guidelines for Students",
    
    preExamRequirements: [
      "Carefully review examination instructions and guidelines on university website, notice boards, and in exam halls",
      "Make sure to be on campus half hour before exam starting time",
      "Not allowed to enter exam hall 15 minutes after beginning of exam",
      "Must contact Examination office in case of delay",
      "Not allowed to enter examination hall without presenting Student ID",
      "Forbidden to leave exam hall unless half the time specified for exam has passed"
    ],

    allowedItems: [
      "Stationery and calculator (if needed)",
      "Borrowing stationery items during exams is prohibited"
    ],

    prohibitedItems: [
      "Books, notes related to exams and dictionaries",
      "Mobile phones and any electronic devices",
      "Keeping mobile phones inside exam hall even if switched off"
    ],

    examConductRules: [
      "Ensure accurate data on answer booklet",
      "Sign in front of name on attendance sheet",
      "Any cheating or disturbance will be recorded and transferred to disciplinary committees",
      "Hand over answer booklet and questions paper to invigilator before leaving",
      "If violation committed, allowed to complete exam but must visit exam office after",
      "Must sign incident minutes and write down statement"
    ],

    specialCircumstances: {
      majorCircumstances: {
        requirement: "Submit official excuse on SIS website",
        timeLimit: "Within 3 days of exam",
        consequence: "Receive mark of (0) if excuse not accepted",
        makeupExam: "Allowed if excuse accepted by Branch Examination Committee (BEC)"
      },
      appealDeadlines: "Appeal period starts after announcement of approved results and lasts for one week"
    },

    computerBasedExams: {
      location: "Conducted on AOU campus on batches",
      scheduling: "Batches within period mentioned on schedule",
      posting: "Will be posted on SIS later on"
    }
  },

  examinationSchedules: {
    "2025-2026": {
      firstSemester: {
        midtermExamination: {
          period: "November 2025",
          dates: [
            { 
              date: "9/11/2025", 
              day: "Sunday", 
              courses: [
                { course: "AR113", time: "9:00-14:00" },
                { course: "AFL113", time: "9:00-14:00" }
              ]
            },
            { 
              date: "10/11/2025", 
              day: "Monday", 
              courses: [
                { course: "EL111", time: "9:00-14:00" },
                { course: "EL112", time: "9:00-14:00" }
              ]
            },
            { 
              date: "11/11/2025", 
              day: "Tuesday", 
              courses: [
                { course: "GR131", time: "9:00-12:00" },
                { course: "GR131EL", time: "9:00-12:00" }
              ]
            },
            { 
              date: "12/11/2025", 
              day: "Wednesday", 
              courses: [
                { course: "GT101", time: "9:00-13:00" },
                { course: "EL118", time: "9:00-13:00" }
              ]
            },
            { 
              date: "13/11/2025", 
              day: "Thursday", 
              courses: [
                { course: "GR101", time: "9:00-12:00" },
                { course: "GR101EL", time: "9:00-12:00" },
                { course: "GB102", time: "9:00-12:00" },
                { course: "GB102E", time: "9:00-12:00" }
              ]
            },
            { 
              date: "15/11/2025", 
              day: "Saturday", 
              courses: [
                { course: "BUS310", time: "9:30-11:30" },
                { course: "M251", time: "9:30-11:30" },
                { course: "TM354", time: "9:30-11:30" },
                { course: "TM270", time: "9:30-11:30" },
                { course: "MGT111", time: "12:00-1:30" },
                { course: "EA300B", time: "12:00-2:00" },
                { course: "TM359", time: "12:00-2:00" },
                { course: "SYS380", time: "12:00-2:00" },
                { course: "T318", time: "12:00-1:30" },
                { course: "EL330", time: "2:30-4:00" },
                { course: "TM105", time: "2:30-4:00" },
                { course: "BUS102", time: "2:30-4:00" },
                { course: "A230A", time: "5:00-7:00" },
                { course: "BUS101", time: "5:00-6:30" },
                { course: "B329", time: "5:00-7:00" },
                { course: "MT141", time: "5:00-6:30" }
              ]
            },
            { 
              date: "16/11/2025", 
              day: "Sunday", 
              courses: [
                { course: "EL099", time: "9:00-14:00" },
                { course: "EL20", time: "9:00-14:00" },
                { course: "LAW107", time: "9:00-12:00" },
                { course: "LAW107EL", time: "9:00-12:00" }
              ]
            },
            { 
              date: "17/11/2025", 
              day: "Monday", 
              courses: [
                { course: "L201A", time: "9:30-11:30" },
                { course: "TM129", time: "9:30-11:30" },
                { course: "ECO101", time: "2:30-4:00" },
                { course: "TM291", time: "2:30-4:00" },
                { course: "TM276", time: "2:30-4:00" },
                { course: "MT132", time: "5:00-6:30" }
              ]
            },
            { 
              date: "18/11/2025", 
              day: "Tuesday", 
              courses: [
                { course: "MT099", time: "9:30-11:00" },
                { course: "MKT112", time: "9:30-11:00" },
                { course: "TM351", time: "9:30-11:30" },
                { course: "EA300A", time: "12:00-2:00" },
                { course: "SYS210", time: "12:00-2:00" },
                { course: "TM291", time: "12:00-2:00" },
                { course: "M269", time: "12:00-2:00" },
                { course: "TM275", time: "12:00-1:30" },
                { course: "BUC112", time: "12:00-1:30" },
                { course: "EL117", time: "2:30-4:00" },
                { course: "M109", time: "2:30-4:00" },
                { course: "ACT111", time: "2:30-4:00" },
                { course: "A112B", time: "5:00-7:00" },
                { course: "MT131", time: "5:00-6:30" }
              ]
            },
            { 
              date: "19/11/2025", 
              day: "Wednesday", 
              courses: [
                { course: "EL122", time: "9:30-11:00" },
                { course: "B208", time: "9:30-11:30" },
                { course: "B207B", time: "9:30-11:30" },
                { course: "BUS110", time: "9:30-11:30" },
                { course: "SYS111", time: "9:30-11:00" }
              ]
            },
            { 
              date: "20/11/2025", 
              day: "Thursday", 
              courses: [
                { course: "A230B", time: "9:30-11:30" },
                { course: "B327", time: "9:30-11:30" },
                { course: "SYS280", time: "9:30-11:30" },
                { course: "TM112", time: "9:30-11:30" },
                { course: "T216B", time: "9:30-11:30" },
                { course: "MT395", time: "9:30-11:30" },
                { course: "L201B", time: "12:00-2:00" },
                { course: "MKT111", time: "12:00-1:30" },
                { course: "TT284", time: "12:00-2:00" },
                { course: "TM255", time: "12:00-2:00" },
                { course: "GM102", time: "12:00-1:30" },
                { course: "ECO102", time: "2:30-4:00" },
                { course: "TM355", time: "2:30-4:30" },
                { course: "BUC111", time: "2:30-4:00" },
                { course: "BUS115", time: "5:00-6:30" },
                { course: "EL121", time: "5:00-6:30" },
                { course: "MT132", time: "5:00-6:30" }
              ]
            }
          ]
        },

        makeupMidtermExamination: {
          period: "December 2025",
          dates: [
            { 
              date: "02-Dec-25", 
              day: "Tuesday", 
              courses: [
                { course: "GR131", time: "9:00-10:00" },
                { course: "GR131EL", time: "9:00-10:00" },
                { course: "AR113", time: "9:00-10:00" },
                { course: "AFL113", time: "9:00-10:00" },
                { course: "GT101", time: "9:00-10:00" },
                { course: "EL118", time: "9:00-10:00" },
                { course: "A230A", time: "9:30-11:30" },
                { course: "T318", time: "9:30-11:30" },
                { course: "BUS310", time: "9:30-11:30" },
                { course: "TM354", time: "9:30-11:30" },
                { course: "B327", time: "9:30-11:30" },
                { course: "SYS280", time: "9:30-11:30" },
                { course: "TM112", time: "9:30-11:30" },
                { course: "T216B", time: "9:30-11:30" },
                { course: "EA300B", time: "12:00-2:00" },
                { course: "TM359", time: "12:00-2:00" },
                { course: "MKT111", time: "12:00-1:30" },
                { course: "SYS380", time: "12:00-2:00" },
                { course: "M251", time: "12:00-2:00" },
                { course: "TM355", time: "12:00-2:00" },
                { course: "TT284", time: "12:00-2:00" },
                { course: "EL330", time: "12:00-1:30" },
                { course: "BUS102", time: "2:30-4:00" },
                { course: "TM105", time: "2:30-4:00" },
                { course: "ECO102", time: "2:30-4:00" },
                { course: "BUS115", time: "2:30-4:00" },
                { course: "EL121", time: "2:30-4:00" },
                { course: "TR102", time: "5:00-6:30" },
                { course: "IM270", time: "5:00-7:00" },
                { course: "GM101", time: "5:00-6:30" }
              ]
            },
            { 
              date: "03-Dec-25", 
              day: "Wednesday", 
              courses: [
                { course: "BUC111", time: "9:30-11:00" },
                { course: "E304B", time: "12:00-2:00" },
                { course: "L201A", time: "12:00-2:00" },
                { course: "MT132", time: "12:00-1:30" },
                { course: "B207A", time: "12:00-2:00" },
                { course: "B207B", time: "12:00-2:00" },
                { course: "TM280", time: "12:00-2:00" },
                { course: "TM255", time: "12:00-2:00" },
                { course: "T215B", time: "12:00-2:00" },
                { course: "SYS111", time: "12:00-1:30" },
                { course: "TM275", time: "2:30-4:00" },
                { course: "BUS101", time: "2:30-4:00" },
                { course: "MKT112", time: "2:30-4:00" },
                { course: "TM291", time: "2:30-4:00" },
                { course: "MT141", time: "5:00-6:30" },
                { course: "MST129", time: "5:00-6:30" },
                { course: "ECO101", time: "5:00-6:30" },
                { course: "GR101", time: "9:00-10:00" },
                { course: "GR101EL", time: "9:00-10:00" },
                { course: "EL111", time: "9:00-10:00" },
                { course: "EL112", time: "9:00-10:00" },
                { course: "M109", time: "9:30-11:30" },
                { course: "MT099", time: "9:30-11:30" },
                { course: "TM125", time: "9:30-11:30" },
                { course: "T216A", time: "9:30-11:30" },
                { course: "E304A", time: "9:30-11:30" },
                { course: "TM311", time: "9:30-11:30" }
              ]
            },
            { 
              date: "04-Dec-25", 
              day: "Thursday", 
              courses: [
                { course: "A112A", time: "2:30-4:30" },
                { course: "ACT111", time: "2:30-4:00" },
                { course: "A112B", time: "5:00-7:00" },
                { course: "MGT111", time: "5:00-6:30" },
                { course: "B329", time: "5:00-7:00" },
                { course: "TM131", time: "5:00-6:30" }
              ]
            }
          ]
        },

        finalExamination: {
          period: "January 2026",
          dates: [
            { 
              date: "4/1/2026", 
              day: "Sunday", 
              courses: [
                { course: "AR113", time: "9:00-13:00" },
                { course: "AFL113", time: "9:00-13:00" }
              ]
            },
            { 
              date: "5/1/2026", 
              day: "Monday", 
              courses: [
                { course: "LAW107", time: "9:00-12:00" },
                { course: "LAW107EL", time: "9:00-12:00" }
              ]
            },
            { 
              date: "6/1/2026", 
              day: "Tuesday", 
              courses: [
                { course: "GR131", time: "9:00-12:00" },
                { course: "GR131EL", time: "9:00-12:00" }
              ]
            },
            { 
              date: "7/1/2026", 
              day: "Wednesday", 
              courses: [
                { course: "GR101", time: "9:00-13:00" },
                { course: "GR101EL", time: "9:00-13:00" },
                { course: "GB102", time: "9:00-13:00" },
                { course: "GB102E", time: "9:00-13:00" }
              ]
            },
            { 
              date: "8/1/2026", 
              day: "Thursday", 
              courses: [
                { course: "GT101", time: "9:00-13:00" },
                { course: "EL118", time: "9:00-13:00" }
              ]
            },
            { 
              date: "11/1/2026", 
              day: "Sunday", 
              courses: [
                { course: "EL099", time: "9:00-15:00" },
                { course: "EL20", time: "9:00-15:00" },
                { course: "EL111", time: "9:00-15:00" },
                { course: "EL112", time: "9:00-15:00" }
              ]
            },
            { 
              date: "8/1/2026", 
              day: "Thursday", 
              courses: [
                { course: "EL119", time: "10:00-11:00" },
                { course: "BUS310", time: "9:30-12:30" },
                { course: "TM351", time: "9:30-12:30" },
                { course: "EA300B", time: "13:00-16:00" },
                { course: "TM270", time: "13:00-16:00" },
                { course: "MGT111", time: "13:00-15:00" },
                { course: "M251", time: "13:00-16:00" },
                { course: "BUS102", time: "16:30-18:30" },
                { course: "A230A", time: "16:30-19:30" }
              ]
            },
            { 
              date: "12/1/2026", 
              day: "Monday", 
              courses: [
                { course: "EL330", time: "9:30-11:30" },
                { course: "TM102", time: "9:30-11:30" },
                { course: "TM105", time: "9:30-11:30" },
                { course: "M269", time: "13:00-16:00" },
                { course: "A230B", time: "13:00-16:00" },
                { course: "TM130", time: "13:00-16:00" },
                { course: "MGT112", time: "16:30-18:30" },
                { course: "TM354", time: "16:30-18:30" }
              ]
            },
            { 
              date: "13/1/2026", 
              day: "Tuesday", 
              courses: [
                { course: "MT141", time: "16:30-13:30" },
                { course: "E304A", time: "9:30-12:30" },
                { course: "B327", time: "9:30-12:30" },
                { course: "TM355", time: "9:30-12:30" },
                { course: "T216B", time: "9:30-12:30" },
                { course: "BUC111", time: "9:30-11:30" },
                { course: "A112A", time: "13:00-16:00" },
                { course: "TT284", time: "16:30-19:30" }
              ]
            },
            { 
              date: "15/1/2026", 
              day: "Thursday", 
              courses: [
                { course: "SYS210", time: "16:30-19:30" },
                { course: "MT395", time: "16:30-19:30" },
                { course: "EL117", time: "9:30-11:30" },
                { course: "BUS101", time: "9:30-11:30" },
                { course: "L201B", time: "13:00-16:00" },
                { course: "B207A", time: "13:00-16:00" },
                { course: "M110", time: "13:00-16:00" },
                { course: "TM255", time: "16:30-19:30" },
                { course: "ECO101", time: "16:30-18:30" },
                { course: "E304B", time: "16:30-19:30" }
              ]
            },
            { 
              date: "19/1/2026", 
              day: "Monday", 
              courses: [
                { course: "T216A", time: "9:30-12:30" },
                { course: "TM271", time: "9:30-12:30" },
                { course: "MGT112", time: "9:30-11:30" },
                { course: "BUS110", time: "13:00-16:00" },
                { course: "B329", time: "13:00-16:00" },
                { course: "TM311", time: "13:00-16:00" },
                { course: "A112B", time: "16:30-19:30" },
                { course: "BUS115", time: "16:30-18:30" },
                { course: "TM112", time: "16:30-19:30" },
                { course: "EL21", time: "9:30-11:30" }
              ]
            },
            { 
              date: "20/1/2026", 
              day: "Tuesday", 
              courses: [
                { course: "SYS280", time: "9:30-12:30" },
                { course: "T318", time: "9:30-12:30" },
                { course: "MKT111", time: "9:30-11:30" },
                { course: "TM103", time: "13:00-15:00" },
                { course: "TM129", time: "13:00-16:00" },
                { course: "TM276", time: "16:30-18:30" },
                { course: "ECO102", time: "16:30-18:30" }
              ]
            },
            { 
              date: "21/1/2026", 
              day: "Wednesday", 
              courses: [
                { course: "M109", time: "9:30-11:30" },
                { course: "TM260", time: "13:00-15:00" },
                { course: "GM101", time: "13:00-15:00" }
              ]
            },
            { 
              date: "22/1/2026", 
              day: "Thursday", 
              courses: [
                { course: "SYS380", time: "9:30-12:30" },
                { course: "MT131", time: "13:00-15:00" },
                { course: "GM102", time: "13:00-15:00" }
              ]
            }
          ]
        }
      }
    }
  }
};

module.exports = examinationGuidelines;