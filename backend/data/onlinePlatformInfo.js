const onlinePlatformInfo = {
  studentInformationSystem: {
    name: "Online Student Services System",
    description: "AOU has implemented an Online Student Services system for the students to complete most of the transactions they need on a 24/7 basis.",
    availability: "24/7",
    
    services: {
      academicAdvising: {
        name: "Academic Advising",
        description: "Allows students to view the academic advisor's name in addition to the semester advising details."
      },
      courseRegistration: {
        name: "Course Registration and Course Schedule",
        description: "Allows students to register courses, confirm, drop, or change section during the registration period. Also, students can view and print out their schedule."
      },
      viewOfferedCourses: {
        name: "View Offered Courses",
        description: "Allows students to view the list of all courses offered in the University during the academic semester."
      },
      examSchedule: {
        name: "Exam Schedule",
        description: "Allows students to view the details of their exams schedules for the registered courses in the semester."
      },
      gradeDetails: {
        name: "Graded Details, Transcript and Academic Plan",
        description: "Allows students to view their marks details, unofficial transcript and their academic plans."
      },
      complaint: {
        name: "Complaint",
        description: "Allows students to file any complaint that is not related to grades."
      },
      appeal: {
        name: "Appeal",
        description: "Allows students to file an appeal for official review of academic decisions regarding the final examination grade or continuous assessment marks of a specific course."
      },
      examPostponement: {
        name: "Exam Postponement",
        description: "Allows students to submit a request to postpone a midterm or final exam."
      },
      studentServices: {
        name: "Students Services",
        description: "Allows students to submit a request for a service from the list of services available in the system; then the concerned department processes the received requests."
      },
      electronicPayment: {
        name: "Electronic Payment",
        description: "Allows students to view and pay the fees online."
      },
      changingPersonalInfo: {
        name: "Changing Personal Information",
        description: "Allows students to update their contact details."
      }
    },
    
    restrictions: {
      note: "Some of the above services are restricted by a timeframe which is usually mentioned in the academic calendar."
    }
  },

  learningManagementSystem: {
    name: "Learning Management System (LMS)",
    description: "The Learning Management System (LMS) offers students a dynamic, engaging, and purposeful learning environment that enhances their knowledge and supports their ability to manage and complete assignments efficiently.",
    type: "Web-based platform",
    purpose: "Designed to plan, implement, and assess the learning process",
    accessUrl: "https://bahlms.arabou.edu.kw/login/index.php",
    
    capabilities: {
      instructorFeatures: [
        "Create and deliver content",
        "Monitor student engagement",
        "Evaluate performance"
      ],
      multiUserSupport: "Multiple users can interact with the LMS simultaneously, ensuring consistent delivery and evaluation as all users view the same material and are assessed through standardized pre- and post-tests"
    },

    features: {
      assignmentSubmission: {
        name: "Assignment Submission",
        description: "Students can submit assignments through TMA submission links."
      },
      discussionForums: {
        name: "Discussion Forums",
        description: "Engage in discussions with other users."
      },
      fileManagement: {
        name: "File Management",
        description: "Download and upload files easily."
      },
      instantMessaging: {
        name: "Instant Messaging",
        description: "Communicate with others via built-in messaging system."
      },
      onlineExams: {
        name: "Online Exams",
        description: "Take midterm and final exams, as well as mock exams, online."
      },
      eLibraryAccess: {
        name: "E-Library Access",
        description: "Access the E-Library for academic resources."
      },
      sisIntegration: {
        name: "SIS Integration",
        description: "Connect to the Student Information System (SIS) directly from LMS."
      },
      plagiarismDetection: {
        name: "Plagiarism Detection Tool",
        description: "Check for similarity percentage on students submitted assignments."
      },
      coursePageStructure: {
        name: "Course Page Structure",
        description: "Includes sections for introductions, communication tools, announcements, grades, and contact information."
      },
      universityAnnouncements: {
        name: "University Announcements",
        description: "Stay informed with updates on the LMS Home Page."
      },
      importantFiles: {
        name: "Important Files",
        description: "Access essential documents such as exam schedules and semester calendars."
      },
      recordedLectures: {
        name: "Recorded Lectures",
        description: "Previous semester recoded lecture available for specific courses."
      },
      calendarTool: {
        name: "Calendar Tool",
        description: "Manage academic deadlines, meetings, and personal events."
      },
      socialMediaIntegration: {
        name: "Social media and YouTube",
        description: "Connect with official social media accounts and the YouTube channel."
      }
    },

    benefits: {
      students: [
        "Stay organized",
        "Stay engaged", 
        "Stay informed throughout academic journey",
        "Comprehensive learning experience",
        "Accessible learning experience"
      ],
      teachers: [
        "Create and deliver content",
        "Monitor student engagement",
        "Evaluate performance"
      ],
      institutions: [
        "Consistent delivery and evaluation",
        "Standardized assessment",
        "Enhanced educational process"
      ]
    }
  },

  studentEmail: {
    name: "Official University Email Accounts",
    description: "All students enrolled at Arab Open University (AOU) are provided with an official university email account.",
    
    purpose: {
      primaryCommunication: "Primary communication channel between students and university staff, including both academic and administrative personnel",
      onlineClassAccess: "Utilized for accessing online classes",
      lmsNotifications: "Receiving notifications related to activities on the Learning Management System (LMS)"
    },

    accountManagement: {
      creation: {
        timing: "New student email accounts are created at the beginning of each semester",
        notification: "The IT department send an SMS containing the email address and password details in addition to other AOU systems credentials"
      },
      accessUrl: "https://outlook.office.com"
    },

    passwordRequirements: {
      minimumLength: 8,
      characterRequirements: {
        description: "Must include characters from at least two of the following categories:",
        categories: [
          "Uppercase letters (A-Z)",
          "Lowercase letters (a-z)",
          "Digits (0-9)",
          "Special characters (e.g., !, $, #, %, etc.)"
        ]
      }
    }
  },

  supportSystem: {
    name: "e-Ticketing Helpdesk System",
    description: "To enhance communication and service delivery, the IT Department has introduced an e-Ticketing Helpdesk system for all AOU stakeholders, including students.",
    
    process: {
      submission: {
        method: "Send an email to 'support@aou.org.bh'",
        automation: "This action automatically generates an e-ticket number and notify both the user and the IT team"
      },
      response: {
        timeframe: "Responses to submitted tickets are expected within 24 hours during business days"
      }
    },
    
    contactEmail: "support@aou.org.bh",
    stakeholders: ["Students", "Faculty", "Staff", "All AOU stakeholders"]
  },

  systemIntegration: {
    description: "All systems work together to provide a comprehensive digital experience for students",
    connectedSystems: [
      "Student Information System (SIS)",
      "Learning Management System (LMS)", 
      "Student Email System",
      "e-Ticketing Helpdesk System"
    ]
  }
};

module.exports = onlinePlatformInfo;