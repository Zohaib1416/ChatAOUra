// Data Loader Utility - Aggregates all university data
const academicCalenders = require('../data/academicCalenders');
const admissionDetails = require('../data/admissionDetails');
const aiCourses = require('../data/aiCourses');
const aouSocialMedia = require('../data/aouSocialMedia');
const boardOfTrustees = require('../data/boardOfTrustees');
const businessCourses = require('../data/businessCourses');
const campusFacilities = require('../data/campusFacilities');
const csCourses = require('../data/csCources');
const dsCourses = require('../data/dsCourses');
const elCourses = require('../data/elCourses');
const elMasterCourses = require('../data/elMasterCourses');
const examinationGuidelines = require('../data/examinationGuidelines');
const facultyMembers = require('../data/facultyMembers');
const faqData = require('../data/faqS');
const financialInformation = require('../data/financialInformation');
const gdCourses = require('../data/gdCources');
const itcCourses = require('../data/itcCourses');
const onlinePlatformInfo = require('../data/onlinePlatformInfo');
const studentGuide = require('../data/studentGuide');
const topManagement = require('../data/topManagement');
const unitsAndDepartments = require('../data/unitsAndDepartments');

// Aggregate all university data
const universityData = {
  academicCalenders,
  admissionDetails,
  aiCourses,
  aouSocialMedia,
  boardOfTrustees,
  businessCourses,
  campusFacilities,
  csCourses,
  dsCourses,
  elCourses,
  elMasterCourses,
  examinationGuidelines,
  facultyMembers,
  faqData,
  financialInformation,
  gdCourses,
  itcCourses,
  onlinePlatformInfo,
  studentGuide,
  topManagement,
  unitsAndDepartments
};

// Determine which data files are relevant based on keywords in the question
const getRelevantData = (question) => {
  const lowerQuestion = question.toLowerCase();
  const relevantData = {};

  // Keywords mapping to data files
  const keywordMap = {
    // Admission related
    admission: ['admissionDetails'],
    apply: ['admissionDetails'],
    requirement: ['admissionDetails'],
    enroll: ['admissionDetails'],
    'english test': ['admissionDetails'],
    toefl: ['admissionDetails'],
    ielts: ['admissionDetails'],
    fees: ['admissionDetails', 'financialInformation'],
    
    // Courses related
    'artificial intelligence': ['aiCourses'],
    'ai program': ['aiCourses'],
    'ai course': ['aiCourses'],
    'cyber security': ['csCourses'],
    'cybersecurity': ['csCourses'],
    'data science': ['dsCourses'],
    'business': ['businessCourses'],
    'english language': ['elCourses'],
    'english literature': ['elCourses'],
    'tefl': ['elMasterCourses'],
    'master': ['elMasterCourses'],
    'graphic': ['gdCourses'],
    'multimedia': ['gdCourses'],
    'design': ['gdCourses'],
    'information technology': ['itcCourses'],
    'computing': ['itcCourses'],
    'itc': ['itcCourses'],
    
    // Campus and facilities
    campus: ['campusFacilities'],
    library: ['campusFacilities'],
    facility: ['campusFacilities'],
    'computer lab': ['campusFacilities'],
    classroom: ['campusFacilities'],
    
    // People
    faculty: ['facultyMembers'],
    professor: ['facultyMembers'],
    teacher: ['facultyMembers'],
    dean: ['topManagement'],
    director: ['topManagement'],
    management: ['topManagement'],
    trustee: ['boardOfTrustees'],
    board: ['boardOfTrustees'],
    
    // Academic information
    calendar: ['academicCalenders'],
    semester: ['academicCalenders'],
    'exam': ['examinationGuidelines'],
    examination: ['examinationGuidelines'],
    gpa: ['faqData'],
    grade: ['faqData'],
    registration: ['faqData'],
    register: ['faqData'],
    
    // Student services
    'student guide': ['studentGuide'],
    'how to': ['studentGuide', 'faqData'],
    
    // Financial
    tuition: ['financialInformation', 'admissionDetails'],
    payment: ['financialInformation'],
    scholarship: ['financialInformation'],
    fee: ['admissionDetails', 'financialInformation'],
    cost: ['admissionDetails', 'financialInformation'],
    price: ['admissionDetails', 'financialInformation'],
    refund: ['financialInformation'],
    
    // Online platforms
    lms: ['onlinePlatformInfo'],
    moodle: ['onlinePlatformInfo'],
    sis: ['onlinePlatformInfo'],
    'online platform': ['onlinePlatformInfo'],
    
    // Social media and contact
    contact: ['aouSocialMedia'],
    email: ['aouSocialMedia'],
    phone: ['aouSocialMedia'],
    instagram: ['aouSocialMedia'],
    facebook: ['aouSocialMedia'],
    twitter: ['aouSocialMedia'],
    
    // Departments
    department: ['unitsAndDepartments'],
    unit: ['unitsAndDepartments']
  };

  // Check for keywords and add relevant data
  Object.entries(keywordMap).forEach(([keyword, dataFiles]) => {
    if (lowerQuestion.includes(keyword)) {
      dataFiles.forEach(dataFile => {
        if (!relevantData[dataFile]) {
          relevantData[dataFile] = universityData[dataFile];
        }
      });
    }
  });

  // If no specific keywords found, include general information
  if (Object.keys(relevantData).length === 0) {
    relevantData.admissionDetails = universityData.admissionDetails;
    relevantData.faqData = universityData.faqData;
  }

  return relevantData;
};

// Format data as a readable string for the LLM
const formatDataForPrompt = (data) => {
  return JSON.stringify(data, null, 2);
};

// Get all university data
const getAllData = () => {
  return universityData;
};

module.exports = {
  universityData,
  getRelevantData,
  formatDataForPrompt,
  getAllData
};
