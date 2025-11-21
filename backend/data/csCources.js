const csCourses = {
  "BSc Cyber Security (CyS) - Four Years - (131 CR)": {
    totalCredits: 131,
    duration: "Four Years",
    planYear: "The New Plan Starting From Second Semester 2022-2023",
    curriculum: {
      "First Year - First Semester": [
        {
           courseCode: "GT101",
          courseName: "Learning and Information Technology",
          credits: 3,
          prerequisite: null,
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
          courseCode: "EL111",
          courseName: "English Communication Skills I",
          credits: 3,
          prerequisite: "EL099",
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 31,
            lms: 14,
            total: 110
          }
        },
        {
          courseCode: "AR113",
          courseName: "Arabic Communication Skills",
          credits: 3,
          prerequisite: null,
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 9,
            lms: 14,
            total: 88
          }
        },
        {
          courseCode: "GR131",
          courseName: "General Branch Requirement",
          credits: 3,
          prerequisite: null,
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 10,
            lms: 14,
            total: 89
          }
        }
      ],
      "First Year - Second Semester": [
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
          courseCode: "LAW107",
          courseName: "Human Rights (Branch Requirement)",
          credits: 2,
          prerequisite: null,
          category: "University Requirements/Local Requirements",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 43,
            books: 0,
            lms: 14,
            total: 57
          }
        },
        {
          courseCode: "MST129",
          courseName: "Applied Calculus",
          credits: 4,
          prerequisite: "EL099 & MT099",
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
            books: 9,
            lms: 14,
            total: 88
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
        },
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
          courseCode: "EL112",
          courseName: "English Communication Skills II",
          credits: 3,
          prerequisite: "EL111",
          category: "General University Requirements/Mandatory",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 65,
            books: 31,
            lms: 14,
            total: 110
          }
        }
      ],
      "Second Year - Second Semester": [
        {
          courseCode: "T1284",
          courseName: "Web technologies",
          credits: 8,
          prerequisite: "TM112",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "The Web technologies module provides students with a comprehensive survey of the technologies currently used to deliver content and services via the World Wide Web. The module is practical in its approach and students will develop personal and professional web sites to practise the technologies they encounter.",
          fees: {
            courseFees: 234,
            books: 15,
            lms: 14,
            total: 263
          }
        },
        {
          courseCode: "TM129",
          courseName: "Technologies in practice",
          credits: 8,
          prerequisite: "M110",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "Technologies in Practice, is primarily focused around three main themes: robotics, networks and the Linux operating system. It focuses on the practical aspects of computing topics while at the same time further developing conceptual understanding and confidence in computational thinking. It draws heavily on previous studies with a focus on practical application and making things work.",
          fees: {
            courseFees: 88,
            books: 28,
            lms: 14,
            total: 130
          }
        }
      ],
      "Third Year - First Semester": [
        {
          courseCode: "TM256",
          courseName: "Cyber Security",
          credits: 8,
          prerequisite: "TM129",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "In TM256 Cyber Security you'll investigate the fundamentals of cyber security from an applied perspective. You'll examine the technologies and processes needed to secure systems and learn techniques to assess information security. Through this module you'll develop practical skills to do security testing and evaluation. As part of the assessment you'll create a report based on a practical security assessment using some of the industry standard tools.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "T216A",
          courseName: "Cisco networking (CCNA) part1",
          credits: 8,
          prerequisite: "TM112",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 234,
            books: 0,
            lms: 14,
            total: 248
          }
        },
        {
          courseCode: "Faculty Elective 1",
          courseName: "Faculty Requirements/ Elective 1",
          credits: 3,
          prerequisite: null,
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 117,
            books: 15,
            lms: 14,
            total: 146
          }
        }
      ],
      "Third Year - Second Semester": [
        {
          courseCode: "T216B",
          courseName: "Cisco networking (CCNA) part2",
          credits: 8,
          prerequisite: "T216A",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "T216 (CCNA) provides students with classroom and hands-on learning experiences. This module teaches students to install, operate, and troubleshoot a small branch office Enterprise network, including configuring several switches and routers, connecting to a WAN and implementing network security. The curriculum covers small-network installation and support, enhanced switching technologies, router and routing protocol configuration, troubleshooting, wide area networking, and network security concepts. Hands-on exercises include configuration, installation, and troubleshooting.",
          fees: {
            courseFees: 234,
            books: 0,
            lms: 14,
            total: 248
          }
        },
        {
          courseCode: "TM311",
          courseName: "Information security",
          credits: 8,
          prerequisite: "T216A",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "Information security covers the theory and practice required to secure information systems from threats and to recover from problems. The module takes a practical approach to security by combining an understanding of the principles involved with hands-on experience of implementing solutions.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "Faculty Elective 2",
          courseName: "Faculty Requirements/ Elective 2",
          credits: 3,
          prerequisite: null,
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 117,
            books: 15,
            lms: 14,
            total: 146
          }
        }
      ],
      "Fourth Year - First Semester": [
        {
          courseCode: "TM359",
          courseName: "System penetration testing",
          credits: 8,
          prerequisite: "TM256",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "The ability to think like an attacker – and see computer systems from that perspective – is an essential capability for anyone responsible for the security of systems and networks. This level 3 module focuses on the practical skills needed to perform ethical penetration testing in a professional capacity.",
          fees: {
            courseFees: 234,
            books: 46,
            lms: 14,
            total: 294
          }
        },
        {
          courseCode: "TM471-I",
          courseName: "CyS. Graduation Project-A",
          credits: 4,
          prerequisite: "TM311 or TM359 or T318",
          category: "Mandatory University Courses",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 117,
            books: 31,
            lms: 14,
            total: 162
          }
        },
        {
          courseCode: "TM260",
          courseName: "Ethics, Law and the Governance in IT",
          credits: 4,
          prerequisite: "TM256",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "The ITC specialists must conduct ethically by adhering to the ITC code of conduct and understand the social, professional and legal context of IT and computing,",
          fees: {
            courseFees: 117,
            books: 16,
            lms: 14,
            total: 147
          }
        },
        {
          courseCode: "INT300",
          courseName: "Industrial Training",
          credits: 1,
          prerequisite: "Completed >= 80",
          category: "Mandatory University Courses",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 43,
            books: 0,
            lms: 14,
            total: 57
          }
        }
      ],
      "Fourth Year - Second Semester": [
        {
          courseCode: "TM471-II",
          courseName: "CyS. Graduation Project-B",
          credits: 4,
          prerequisite: "TM471-I",
          category: "Mandatory University Courses",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 117,
            books: 31,
            lms: 14,
            total: 162
          }
        },
        {
          courseCode: "T318",
          courseName: "Applied Network Security",
          credits: 8,
          prerequisite: "T216B",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "T318 Applied network security builds on the concepts and practical skills relating to network security. The module aims to develop the knowledge and practical skills required to assess the security of systems and design mitigating solutions.",
          fees: {
            courseFees: 234,
            books: 20,
            lms: 14,
            total: 268
          }
        }
      ]
    },
    facultyRequirements: {
      description: "Faculty Requirements / Elective Courses (Minimum of 6 Cr.)",
      courses: [
        {
          courseCode: "MS102",
          courseName: "Physics",
          credits: 3,
          prerequisite: "EL111 & MT099",
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
          courseCode: "M109",
          courseName: "NET Programming",
          credits: 3,
          prerequisite: "EL111 & MT099",
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
          courseCode: "MT101",
          courseName: "General Mathematics",
          credits: 3,
          prerequisite: "MT099",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 88,
            books: 17,
            lms: 14,
            total: 119
          }
        },
        {
          courseCode: "TM290",
          courseName: "Cryptography and Internet Security",
          credits: 3,
          prerequisite: "TM112",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 88,
            books: 32,
            lms: 14,
            total: 134
          }
        },
        {
          courseCode: "MT395",
          courseName: "Applied Cyber Security",
          credits: 3,
          prerequisite: "TM260",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 234,
            books: 42,
            lms: 14,
            total: 290
          }
        }
      ]
    }
  }
};

module.exports = csCourses;