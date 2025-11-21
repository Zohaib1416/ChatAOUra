const campusFacilities = {
  classrooms: {
    description: "Arab Open University has four different types of classes. Each type is different from the other in terms of the area and techniques used to meet the requirements of each course.",
    types: {
      type1: {
        name: "Seminar Rooms",
        description: "Designed for seminar-style learning and discussions"
      },
      type2: {
        name: "Class Rooms",
        description: "Standard classroom setup for regular courses"
      },
      type3: {
        name: "Language Labs",
        description: "Specialized laboratories equipped for language learning"
      },
      type4: {
        name: "Computer Labs",
        description: "Technology-equipped laboratories for computer-based courses"
      }
    }
  },

  library: {
    name: "Library",
    location: {
      floor: "First floor",
      room: "FF-029"
    },
    accessibility: ["Faculty", "Students", "Staff"],
    services: [
      "Services to researchers and visitors",
      "Access to different types of information resources and references covering all fields of knowledge",
      "Self-study area"
    ],
    capacity: {
      seats: 74,
      description: "Self-study area that accommodates 74 seats"
    },
    environment: "Absolute quiet environment for individual study and research"
  },

  kuwaitELibraryHall: {
    name: "Kuwait E-Library Hall",
    location: {
      floor: "First floor",
      room: "FF-029"
    },
    accessibility: ["Faculty", "Students", "Staff"],
    services: [
      "Services to researchers and visitors",
      "Access to different types of information resources and references covering all fields of knowledge",
      "Self-study area"
    ],
    capacity: {
      seats: 74,
      description: "Self-study area that accommodates 74 seats"
    },
    environment: "Absolute quiet environment for individual study and research"
  },

  multipurposeRoom: {
    name: "Multipurpose Room",
    location: {
      floor: "Ground floor",
      description: "Distinct view and location close to all vital facilities"
    },
    area: "200 square meters",
    facilities: [
      "Tennis table",
      "Billiard table", 
      "Foosball table",
      "PlayStation 4",
      "Intelligent interaction system"
    ]
  },

  clinic: {
    name: "Clinic",
    location: {
      floor: "Ground floor"
    },
    equipment: "Necessary medical equipment and a nurse",
    workingHours: {
      days: "Sunday to Thursday",
      time: "10 A.M. to 7 P.M."
    },
    contact: {
      phone: "17407551"
    }
  },

  outdoorPlaygrounds: {
    name: "Featured Outdoor Playgrounds",
    description: "The university has two playgrounds for outdoor games",
    facilities: [
      {
        type: "Padel court",
        quantity: 1
      },
      {
        type: "Football field", 
        quantity: 1
      }
    ]
  },

  auditorium: {
    name: "Arab Open University Auditorium",
    design: {
      shape: "Amphitheater",
      capacity: "Around 300 people"
    },
    features: [
      "Sound insulation theater",
      "Interaction smart system"
    ],
    seatingArea: {
      style: "Modern seating area with Dilmun style",
      inspiration: "Inspired by the history of Bahrain"
    }
  }
};

module.exports = campusFacilities;