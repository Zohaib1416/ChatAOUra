const dsCourses = {
  "BSc (Hons) Data Science (DS) - 131 Cr.": {
    totalCredits: 131,
    duration: "Four Years",
    planYear: "Four Years' Study Plan - Plan of 2021",
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
          courseName: "Arabic Communication Skills III",
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
          courseName: "History and Civilization of the Kingdom of Bahrain",
          credits: 3,
          prerequisite: null,
          category: "University Requirements/Local Requirements",
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
          courseCode: "GR102",
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
          courseCode: "LAW107",
          courseName: "Human Rights",
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
          courseCode: "MT140",
          courseName: "Introducing Statistics",
          credits: 4,
          prerequisite: "EL111 & MT099",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "This module gives you an introductory knowledge and understanding of statistical ideas and methods and their applications. Statistical skills are increasingly important in many areas of employment and study. This module will help you to understand statistical ideas that you encounter in your work or daily life, improve your ability to reason with uncertainty and variability, and provide you with a foundation for further study in statistics. The module materials teach statistical concepts through a combination of theory, real examples, activities and computer-based work.",
          fees: {
            courseFees: 117,
            books: 28,
            lms: 14,
            total: 159
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
          courseCode: "TM112",
          courseName: "Introduction to Computing and Information",
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
          courseCode: "M269",
          courseName: "Algorithms, Data structures and Computability",
          credits: 8,
          prerequisite: "M110 & MT131",
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
           courseCode: "MT248",
          courseName: "Analysing data",
          credits: 4,
          prerequisite: "MT140",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "MT248 teaches you to be an effective data analyst. You'll learn to use the statistical programming language R to import, explore, analyse and present data. You'll study modern statistical and data science techniques for extracting insight from data. These include regression, classification, resampling, regularization, trees, clustering and network analysis. You'll see how statistics and data science are used in a wide variety of application areas. At the end of the module you'll complete a substantial project analysing a real data set.",
          fees: {
            courseFees: 88,
            books: 30,
            lms: 14,
            total: 132
          }
        }
      ],
      "Third Year - First Semester": [
        {
          courseCode: "M218",
          courseName: "Relational Databases",
          credits: 4,
          prerequisite: "M110 & MT131",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "M218 provides a practical introduction to relational databases and SQL. As well as learning to write SQL queries, students will learn about data modelling and database design. There will be opportunities to practice all of these skills by working on typical database problems.",
          fees: {
            courseFees: 234,
            books: 5,
            lms: 14,
            total: 253
          }
        },
        {
          courseCode: "M238",
          courseName: "Data Visualization",
          credits: 4,
          prerequisite: "M110",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "This module builds on what students learned about data analysis and introduces the complementary topic of data visualization, showing learners how to effectively combine words, numbers and graphics to present insights from data. Students will learn the fundamentals of good statistical graphic design and practice implementing visualizations, both by creating statistical graphics using ggplot2 (part of the tidyverse in R), and by creating data-driven visualizations for the web using D3.js.",
          fees: {
            courseFees: 88,
            books: 27,
            lms: 14,
            total: 129
          }
        },
        {
          courseCode: "MT249",
          courseName: "Practical Modern Statistics",
          credits: 8,
          prerequisite: "MT248",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "Statistics is the science of collecting, exploring and drawing conclusions from data. Statistical techniques are used in a huge range of areas including opinion polling, medical trials, quality control, economics, psychology, computing, biology and geography – and many more. MT249 builds on the foundation laid in MT248 Analysing data to give you a broad understanding of the principles and practice of statistics. You'll learn to think statistically, to appreciate what statistics can and cannot do, and to apply statistical thinking to problems in your own areas of interest.",
          fees: {
            courseFees: 146,
            books: 20,
            lms: 14,
            total: 180
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
          courseCode: "MST224",
          courseName: "Mathematical Methods",
          credits: 8,
          prerequisite: "MST129 & MT132",
          category: "Faculty Requirements/Mandatory",
          points: 0,
          courseDescription: "This module will extend your knowledge of mathematics by introducing you to some important mathematical techniques and showing you how they can be applied to solve problems. You will see how mathematics can be used to model real-world situations, and you will use both analytical and numerical methods to obtain solutions. The emphasis is on techniques and their applications, rather than on rigorous mathematical analysis.",
          fees: {
            courseFees: 88,
            books: 28,
            lms: 14,
            total: 130
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
           courseCode: "M348",
          courseName: "Applied Statistical Modelling",
          credits: 8,
          prerequisite: "MT248",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "M348 Applied statistical modelling deals with linear modelling and generalised linear modelling (GLM), a widely used class of models that underlies regression, analysis of variance, logistic regression and log-linear models. You'll see how these are part of a unified framework and you'll learn the skills and techniques you need to be a competent statistical modeller.",
          fees: {
            courseFees: 234,
            books: 46,
            lms: 14,
            total: 294
          }
        },
        {
          courseCode: "TM471-I",
          courseName: "Graduation Project",
          credits: 4,
          prerequisite: "M348 or TM351 or TM358",
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
          prerequisite: "M110",
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
      "Fourth Year - Second Semester": [
        {
          courseCode: "TM358",
          courseName: "Machine learning & Artificial Intelligence",
          credits: 8,
          prerequisite: "M269",
          category: "Specialisation/Core Requirements",
          points: 0,
          courseDescription: "This course provides an opportunity to study artificial intelligence and machine learning within the broader context of computing and IT. The course introduces the use of algorithmic techniques that can assist with recognition, classification and decision-making problems. You will learn how to model problems and apply relevant techniques to provide solutions. All areas of artificial intelligence and machine learning are practical, so the course is hands-on and takes an applied approach.",
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
          courseCode: "INT300",
          courseName: "Internship",
          credits: 1,
          prerequisite: "Completed 100 Cr & GPA > 2.0",
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
      ]
    },
    facultyRequirements: {
      description: "Faculty Requirements / Elective Courses (Minimum of 6 Cr.)",
      courses: [
        {
          courseCode: "M102",
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
          courseCode: "M115",
          courseName: "Python for Machine Learning and Data Science",
          credits: 3,
          prerequisite: "M110",
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
          courseCode: "TM338",
          courseName: "Data Mining",
          credits: 3,
          prerequisite: "MT248",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: "This course introduces students to theoretical foundations, major techniques, and applications of data mining. Preparing students to apply data mining techniques on real-life applications and to pursue advanced graduate studies in related areas (databases, machine learning, statistics, and web search). This module teaches students data mining techniques to deal with diverse forms of data; and machine learning perspective and statistical foundations behind these data mining algorithms.",
          fees: {
            courseFees: 234,
            books: 20,
            lms: 14,
            total: 268
          }
        },
        {
          courseCode: "TM339",
          courseName: "Big Data Analytics",
          credits: 3,
          prerequisite: "MT248",
          category: "Faculty Requirements/Elective",
          points: 0,
          courseDescription: null,
          fees: {
            courseFees: 234,
            books: 20,
            lms: 14,
            total: 268
          }
        }
      ]
    }
  }
};

module.exports = dsCourses;