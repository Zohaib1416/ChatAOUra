const aiCourses = {
  "BSc (Hons) Artificial Intelligence (AI) - Four Years - (131 CR)": {
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
          courseCode: "MT141",
          courseName: "Introduction to Probability and Statistics",
          credits: 4,
          prerequisite: "EL111 & MT099",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "MT141 is an introductory module in probability and statistics. It is designed to provide Artificial Intelligence students with the basic concepts of data analysis and statistical computing. Topics covered include basic descriptive measures, measures of association, probability theory, measurement error, random variables, probability distributions, confidence intervals, and hypothesis testing. To study this module, students should have a sound knowledge of level 1 mathematics modules MST129, MT131 and MT132.",
          fees: {
            courseFees: 117,
            books: 28,
            lms: 14,
            total: 159
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
          prerequisite: "EL111 & MT099",
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
          courseCode: "TM270",
          courseName: "Artificial intelligence",
          credits: 8,
          prerequisite: "TM112 & MT141",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "Artificial intelligence and Machine learning skills are becoming more and more essential in the modern job market. Machine Learning Engineer was ranked as one of the top most demanded employees based on the incredible growth of job openings and the average base salary. In this module the student will learn what Artificial Intelligence (AI) is, explore use cases and applications of AI, understand AI basic concepts and terms like symbolic AI, optimization and neural networks.",
          fees: {
            courseFees: 117,
            books: 16,
            lms: 14,
            total: 147
          }
        },
        {
          courseCode: "TM275",
          courseName: "Parallel and Distributed Systems",
          credits: 4,
          prerequisite: "TM103",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "This course introduces students to the fundamentals and techniques of parallel and distributed computing. Topics to be covered include: parallel and distributed computing, concurrency, distributed computing paradigms, inter-process communications, operating system support, client server model, and models of parallel machines. This course has either a direct or indirect links with other courses, including: Introduction to computing and information technology (TM112), Computer Architecture and Organization (TM103), and Python Programming (M110). In addition, students will be capable to choose the proper environments of their final year projects based on the knowledge and skills they gain from this course. Understanding issues like processors capabilities and intercommunication between cores and processors are essential for building high performance systems.",
          fees: {
            courseFees: 234,
            books: 7,
            lms: 14,
            total: 255
          }
        },
        {
           courseCode: "TM276",
          courseName: "Software Development Processes and Methodologies",
          credits: 4,
          prerequisite: "TM112",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "Software is quickly becoming integral part of human life as we see more and more automation and technical advancements. Just like we expect car to work all the time and can't afford to break or reboot unexpectedly, software industry needs to continue to learn better way to build software if it were to become integral part of human life. In this course, you will get an overview of how software teams work? What processes they use? What are some of the industry standard methodologies? What are pros and cons of each? You will learn enough to have meaningful conversation around software development processes. The module covers the importance of developing software in an iterative process by means of established methods.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "Faculty Elective 1",
          courseName: "Faculty Requirements/ Elective 1",
          credits: 3,
          prerequisite: "Level 2",
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
          courseCode: "TM271",
          courseName: "Machine Learning and Deep learning",
          credits: 8,
          prerequisite: "MT141 & TM270",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "TM271 is a compulsory module in the BSc (Hons) Artificial Intelligence qualification. Machine Learning and Deep Learning techniques are essential for regression and classification tasks and for extracting meaningful insights from data. Students will also study the important techniques of Deep Learning and the strengths and limitations of Machine Learning and AI systems in this module. This module aims to provide students with an in-depth introduction to two main- areas of Machine Learning: supervised and unsupervised. That covers the basics of ML and the deep learning approaches.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM351",
          courseName: "Data Management and Analysis",
          credits: 8,
          prerequisite: "M269",
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
           courseCode: "TM340",
          courseName: "Natural Language Processing",
          credits: 8,
          prerequisite: "TM271",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "Natural Language Processing (NLP) is a cognitive science sub-discipline drawing on linguistics, computer science, and psycholinguistics. Recent strides in this area have already begun to influence how human beings interact with computers. NLP is a field located at the intersection of data science and Artificial Intelligence (AI) that is all about teaching machines how to understand human languages and extract meaning from text. This is also why machine learning is often part of NLP projects.",
          fees: {
            courseFees: 234,
            books: 8,
            lms: 14,
            total: 256
          }
        },
        {
          courseCode: "TM471-I",
          courseName: "AI Graduation Project-A",
          credits: 4,
          prerequisite: "TM351 or TM340 or TM341",
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
          prerequisite: "TM271",
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
          prerequisite: "Completed ≥ 90",
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
         courseCode: "TM341",
          courseName: "Computer Vision",
          credits: 8,
          prerequisite: "TM271",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "This module provides an introduction to computer vision, including basic methods from image processing techniques and deep learning with neural networks to solve high level vision tasks. It helps to the student to develop the practical skills necessary to build computer vision applications.",
          fees: {
            courseFees: 234,
            books: 25,
            lms: 14,
            total: 273
          }
        },
        {
          courseCode: "TM471-II",
          courseName: "AI Graduation Project-B",
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
          ccourseCode: "M109",
          courseName: "NIT Programming",
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
          courseCode: "TM280",
          courseName: "Smart IOT Systems",
          credits: 3,
          prerequisite: "TM112",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "Internet of Things (IoT) is presently a trending technology worldwide. Government, academia, and industry are involved in different aspects of research, implementation, and business with IoT. IoT is taking part of different application domains, including: agriculture, space, healthcare, manufacturing, construction, water, and mining. IoT-based applications such as innovative shopping system, infrastructure management in both urban and rural areas, remote health monitoring and emergency notification systems, and transportation systems, are gradually relying on IoT based systems. Therefore, it is very important to learn the fundamentals of this emerging technology. Other modules in the taught module component of the qualification have a relation to this course, including TM270 (Artificial Intelligence); TM271 (Machine Learning and Deep learning); TM112 (Introduction to computing and information technology) TM471 (The computing and IT project).",
          fees: {
            courseFees: 88,
            books: 33,
            lms: 14,
            total: 135
          }
        },
        {
          courseCode: "TM380",
          courseName: "Autonomous Robotic Systems",
          credits: 3,
          prerequisite: "TM271",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
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

module.exports = aiCourses;