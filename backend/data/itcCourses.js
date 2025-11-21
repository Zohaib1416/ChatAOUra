const itcCourses = {
  "BA (Hons) Information Technology and Computing (ITC) - 131 CR": {
    totalCredits: 131,
    duration: "Four Years",
    planYear: "Four Years Study Plan - Plan of 2021",
    curriculum: {
      "First Year - First Semester": [
        {
          courseCode: "EL111",
          courseName: "English Communication Skills (I)",
          credits: 3,
          prerequisite: "EL099",
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 22,
            lms: 14,
            total: 101
          }
        },
        {
          courseCode: "GT101",
          courseName: "Learning and Information Technology",
          credits: 3,
          prerequisite: "EL099",
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: "Learning and Information Technology is a fundamental module for all students enrolled in Arab Open University. It provides students a college level academic experiences that develop self-learning skills. It also provides students with a broad introduction to computing and Information Technology concepts and principles.",
          fees: {
            courseFees: 65,
            books: 22,
            lms: 14,
            total: 101
          }
        },
        {
          courseCode: "AR113",
          courseName: "Arabic Communication Skills (I)",
          credits: 3,
          prerequisite: null,
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 22,
            lms: 14,
            total: 101
          }
        },
        {
          courseCode: "GR131",
          courseName: "History and Civilization of the Kingdom of Bahrain",
          credits: 3,
          prerequisite: null,
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 22,
            lms: 14,
            total: 101
          }
        }
      ],
      "First Year - Second Semester": [
        {
          courseCode: "EL112",
          courseName: "English Communication Skills (II)",
          credits: 3,
          prerequisite: "EL111",
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 22,
            lms: 14,
            total: 101
          }
        },
        {
          courseCode: "MST129",
          courseName: "Applied Calculus",
          credits: 4,
          prerequisite: "MT099 & EL111",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "This module introduces some fundamental topics of differential and integral calculus, with an emphasis on applications. Among the topics covered are functions (including exponential and logarithmic), limits, the concept of derivative, computing the derivative, maxima and minima of functions, and integration. Emphasis will be placed upon the use of calculus in defining and solving problems from areas including computing, data science and natural sciences",
          fees: {
            courseFees: 88,
            books: 28,
            lms: 14,
            total: 130
          }
        },
        {
          courseCode: "MT131",
          courseName: "Discrete Mathematics",
          credits: 4,
          prerequisite: "EL111 & MT099",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "This is an elementary level module which introduces various topics in discrete mathematics. It offers a clear and comprehensive survey of logic operations, predicates, quantifiers, sets, functions, relations. Also, the module provides the concept of permutations, combinations and counting techniques which are needed as prerequisite in most of technology and communication modules. Moreover, the module gives some knowledge of relevant algorithmic ideas in number theory and cryptography that are widely used in data structure, data base, programming, data communication and in scientific research.",
          fees: {
            courseFees: 117,
            books: 27,
            lms: 14,
            total: 158
          }
        },
        {
          courseCode: "MT132",
          courseName: "Linear Algebra",
          credits: 4,
          prerequisite: "EL111 & MT099",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "The course introduces a range of ideas concerning matrices and its applications, matrix operations that are widely used in data structure, programming, data communication, digital signal processing and in scientific research. The course shows algorithmic method to solve systems of linear equations. Moreover, it includes concept of vector spaces and subspace that are used to construct algebraic codes. Also, it introduces the meaning of basis and dimension of a subspace the vector space Rn. The concept of linear transformation between two vector spaces together with null space and rank are also included. Finally, the course introduce the idea of characteristic values/vectors and diagonalization.",
          fees: {
            courseFees: 117,
            books: 27,
            lms: 14,
            total: 158
          }
        }
      ],
      "Second Year - First Semester": [
        {
          courseCode: "GB102",
          courseName: "Principles of Entrepreneurship for Non-Specialists",
          credits: 3,
          prerequisite: null,
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 22,
            lms: 14,
            total: 101
          }
        },
        {
          courseCode: "M110",
          courseName: "Python Programming",
          credits: 8,
          prerequisite: "EL111 & MT099",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "This module is an introductory level programming module that is meant to provide a foundation in computer programming to students. Students will learn how to develop solutions (algorithms) using pseudocode to solve problems. Thereafter, students will learn how to implement these solutions using a programming language (Python). This module serves as the foundation for higher-level modules.",
          fees: {
            courseFees: 234,
            books: 0,
            lms: 14,
            total: 248
          }
        },
        {
          courseCode: "LAW107",
          courseName: "Human Rights",
          credits: 2,
          prerequisite: null,
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 43,
            books: 15,
            lms: 14,
            total: 72
          }
        }
      ],
      "Second Year - Second Semester": [
        {
          courseCode: "TM112",
          courseName: "Introduction to Computing and Information Technology",
          credits: 8,
          prerequisite: "M110",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "This module will further develop and extend the skills and knowledge that students will have built up by studying its partner module TM111. The overall focus of TM112 is on developing the students' problem solving skills.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM105",
          courseName: "Introduction to Programming",
          credits: 4,
          prerequisite: "EL111 & MT099",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "TM105 is an introduction to computer programming, demonstrating the essential elements of programming in a procedural language. TM105 uses the block-based language Scratch as the main teaching vehicle, introducing students to commonly used programming structures including repetition, selection and procedural abstraction. The module then goes on to show how the same principles are used in textual programming. The main aim of the module is to teach students how to analyze and solve problems by developing algorithms and implementing them.",
          fees: {
            courseFees: 117,
            books: 27,
            lms: 14,
            total: 158
          }
        },
        {
          courseCode: "TM103",
          courseName: "Computer Organization and Architecture",
          credits: 4,
          prerequisite: "EL111 & MT099",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "This module offers a clear and comprehensive survey about computer organization and architecture. It introduces the inner workings of a modern digital computer through an integrated presentation of fundamental concepts and principles",
          fees: {
            courseFees: 117,
            books: 27,
            lms: 14,
            total: 158
          }
        }
      ],
      "Third Year - First Semester": [
        {
          courseCode: "M251",
          courseName: "Object Oriented Programming using Java",
          credits: 8,
          prerequisite: "TM105",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "M251 Object-oriented programming using Java builds on the programming concepts and skills introduced in TM105 by making use of the object-oriented programming paradigm to solve more complex programming problems. This module introduces object orientation from first principles: how to design appropriate objects, how to use objects and classes provided by others and how to implement your designs as Java programs.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM255",
          courseName: "Communication and Information Technologies",
          credits: 8,
          prerequisite: "TM112",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "This module teaches the concepts, techniques and technologies of computer communication systems and their application in a variety of computing and business contexts. Topics covered include computer networks, wireless and mobile communications, multimedia, the world wide web, compression, and software engineering of internet applications.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        }
      ],
      "Third Year - Second Semester": [
        {
          courseCode: "M269",
          courseName: "Algorithms, Data Structures and Computability",
          credits: 8,
          prerequisite: "TM112 & MT131",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "One of the basic pillars of advanced computing projects consists of the set of proper algorithms used to solve not only traditional but also unconventional IT problems. With the huge amount of data embedding the new data science, being skilled in setting proper data structure, managing and understanding computability techniques become a must nowadays. M269 is one of the most important modules for information technologies and computing related majors and tracks. The underlying concepts of this module are implemented using the python programming language.",
          fees: {
            courseFees: 234,
            books: 0,
            lms: 14,
            total: 248
          }
        },
        {
          courseCode: "T215B",
          courseName: "Communication and Information Technologies - Part B",
          credits: 8,
          prerequisite: "TM255",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "T215B Communication and Information Technologies Part B is the advanced sequel to TM255, covering higher-level concepts in information technology and communications. The module focuses on protocols, internet technologies, security, software development for networked systems, and the application of ICT in business and organizational contexts.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM260",
          courseName: "Ethics, Law and the Governance in IT",
          credits: 4,
          prerequisite: "TM255",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "The ITC specialists must conduct ethically by adhering to the ITC code of conduct and understand the social, professional and legal context of IT and computing,",
          fees: {
            courseFees: 117,
            books: 16,
            lms: 14,
            total: 147
          }
        }
      ],
      "Fourth Year - First Semester": [
        {
          courseCode: "TM351",
          courseName: "Data Management and Analysis",
          credits: 8,
          prerequisite: "M269 or M251",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "Data management and analysis (TM351) – an overview of the concepts, techniques, and tools of modern data management and analysis. The requirements of data management continually evolve. Recently those requirements have surpassed the capabilities of traditional data management. So, in order to better prepare our graduates for the new demands of the job market, it is necessary to address both the traditional concepts of data management as well as the increasingly important area of data analytics.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM354",
          courseName: "Software Engineering",
          credits: 8,
          prerequisite: "M251",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "TM354 Software engineering takes a disciplined approach to the development of software systems. You'll study the software development lifecycle and examine a range of software engineering tools and techniques covering specification, design, implementation, testing and documentation.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM471-I",
          courseName: "Graduation Project",
          credits: 4,
          prerequisite: "TM355 or TM354 or TM351",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 117,
            books: 0,
            lms: 14,
            total: 131
          }
        }
      ],
      "Fourth Year - Second Semester": [
        {
          courseCode: "TM355",
          courseName: "Communications Technology",
          credits: 8,
          prerequisite: "T215B",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "TM355 Communications technology aims to give a deeper understanding of practical communication systems. The module covers important topics including signal analysis, channel modelling, modulation and coding, communication protocols, and emerging communication technologies.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM471-II",
          courseName: "Graduation Project",
          credits: 4,
          prerequisite: "TM471-I",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 117,
            books: 0,
            lms: 14,
            total: 131
          }
        },
        {
          courseCode: "INT300",
          courseName: "Internship",
          credits: 1,
          prerequisite: "Completed Courses ≥ 100 and GPA ≥ 2.0",
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 22,
            books: 0,
            lms: 14,
            total: 36
          }
        }
      ]
    },
    facultyRequirements: {
      description: "Faculty Requirements / Elective Courses (6 Crs.)",
      courses: [
        {
          courseCode: "M109",
          courseName: "NET Programming",
          credits: 3,
          prerequisite: "EL111",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "This module is intended to introduce and present the fundamental skills that are required to design and develop object-oriented programs and applications in .NET Framework",
          fees: {
            courseFees: 88,
            books: 29,
            lms: 14,
            total: 131
          }
        },
        {
          courseCode: "M277",
          courseName: "Competitive Programming",
          credits: 3,
          prerequisite: "M251 & M269",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "This module is designed to prepare students for competitive programming contests. It covers advanced algorithmic techniques, data structures, and problem-solving strategies commonly used in programming competitions.",
          fees: {
            courseFees: 88,
            books: 29,
            lms: 14,
            total: 131
          }
        },
        {
          courseCode: "MS102",
          courseName: "Physics",
          credits: 3,
          prerequisite: "EL111",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "An understanding of the physical phenomena underlying the operation of devices involved in information processing and transmission can lead to better understanding of those devices. In addition, software developers of computer games frequently require knowledge of the behavior of physical objects in order to produce realistic games. Finally, as a fundamental science, a good understanding of physics and its techniques will help students develop a better understanding of nature and how to approach studying it. The module has implicit links to computer communication and software development modules, in addition to the final year project.",
          fees: {
            courseFees: 88,
            books: 33,
            lms: 14,
            total: 135
          }
        },
        {
          courseCode: "MT101",
          courseName: "General Mathematics",
          credits: 3,
          prerequisite: null,
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 88,
            books: 29,
            lms: 14,
            total: 131
          }
        },
        {
          courseCode: "MT390",
          courseName: "Image Processing",
          credits: 3,
          prerequisite: "MT132 & M251",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 88,
            books: 29,
            lms: 14,
            total: 131
          }
        },
        {
          courseCode: "TM297",
          courseName: "Compression Methods for Multimedia",
          credits: 3,
          prerequisite: "TM112 & MT131",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "The aim of this module is to help students understand the concepts, techniques and applications of digital media compression. The module covers various compression algorithms for text, audio, images and video, including both lossless and lossy compression methods.",
          fees: {
            courseFees: 88,
            books: 29,
            lms: 14,
            total: 131
          }
        }
      ]
    }
  }
};

module.exports = itcCourses;