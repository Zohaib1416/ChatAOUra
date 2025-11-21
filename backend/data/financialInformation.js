const financialInformation = {
  refundPolicy: {
    generalRule: {
      english: "According to the University's rules and regulations, tuition fees are not refunded in case of complete withdrawal from University in all circumstances.",
      arabic: "لا يسترجع الرسوم الدراسية في حالة الانسحاب الكامل من الجامعة في جميع الظروف الخاصة بجامع الدراسة"
    },
    
    beforeSemesterStart: {
      timeFrame: {
        english: "Before the beginning of the Semester, until the last day of withdrawal",
        arabic: "قبل بداية الدراسة وحتى آخر يوم للانسحاب"
      },
      refundPolicy: "No Refund",
      percentageRecovered: "0%",
      calculation: {
        english: "Fees are not refundable",
        arabic: "الرسوم غير مستردة"
      }
    },

    firstAndSecondSemesters: {
      title: {
        english: "Withdrawal from Courses during the First and Second Semesters",
        arabic: "الانسحاب من المواد (المقررات) خلال الفصل الأول والثاني"
      },
      periods: [
        {
          timeFrame: {
            english: "If the course is withdrawn before the beginning of the semester until the end of the Add/Drop period. *Excepted are the Education Package (if delivered) and Registration fees, which are not refundable",
            arabic: "إذا تم الانسحاب من المادة قبل بدء الدراسة في المادة و حتى نهاية فترة الحذف والإضافة (عدا عن رسوم التسجيل ورسوم الكتب غير مستردة)"
          },
          refundPolicy: "Full refund",
          percentageRecovered: "100%",
          calculation: {
            english: "Full refund of course fees",
            arabic: "استرجاع رسوم المادة كاملة"
          }
        },
        {
          timeFrame: {
            english: "If the course is withdrawn during the second week of the semester",
            arabic: "إذا تم الانسحاب من المادة خلال الأسبوع الثاني من بداية الدراسة"
          },
          refundPolicy: "Partial refund from Credit hour fees only",
          percentageRecovered: "70%",
          calculation: {
            english: "70% refund of course fees from credit hours only",
            arabic: "استرجاع نسبة من رسوم الساعات الدراسية فقط"
          }
        },
        {
          timeFrame: {
            english: "If the course is withdrawn during the third week of the semester",
            arabic: "إذا تم الانسحاب من المادة خلال الأسبوع الثالث من بداية الدراسة"
          },
          refundPolicy: "Partial refund from Credit hour fees only",
          percentageRecovered: "50%",
          calculation: {
            english: "50% refund of course fees from credit hours only",
            arabic: "استرجاع نسبة من رسوم الساعات الدراسية فقط"
          }
        },
        {
          timeFrame: {
            english: "If the withdrawal takes place from the fourth week of the semester until the last day of withdrawal",
            arabic: "إذا تم الانسحاب من المقرر ابتداء من الأسبوع الرابع من بداية الدراسة وحتى آخر يوم للانسحاب حسب التقويم الجامعي المعلن عليه"
          },
          refundPolicy: "No Refund",
          percentageRecovered: "0%",
          calculation: {
            english: "Fees are not refundable",
            arabic: "الرسوم غير مستردة"
          }
        }
      ]
    },

    summerSemester: {
      title: {
        english: "Withdrawal from Courses during the Summer Semester",
        arabic: "الانسحاب من المواد (المقررات) خلال الفصل الصيفي"
      },
      periods: [
        {
          timeFrame: {
            english: "If the course is withdrawn before the beginning of the semester until the end of the Add/Drop period. *Excepted are the Education Package (if delivered) and Registration fees, which are not refundable",
            arabic: "إذا تم الانسحاب من المادة قبل بدء الدراسة في المادة و حتى نهاية فترة الحذف والإضافة (عدا عن رسوم التسجيل ورسوم الكتب غير مستردة)"
          },
          refundPolicy: "Full refund",
          percentageRecovered: "100%",
          calculation: {
            english: "Full refund of course fees",
            arabic: "استرجاع رسوم المادة كاملة"
          }
        },
        {
          timeFrame: {
            english: "If the course is withdrawn during the first week of the semester",
            arabic: "إذا تم الانسحاب من المادة خلال الأسبوع الأول من بداية الدراسة"
          },
          refundPolicy: "Partial refund from Credit hour fees only",
          percentageRecovered: "70%",
          calculation: {
            english: "70% refund of course fees from credit hours only",
            arabic: "استرجاع نسبة من رسوم الساعات الدراسية فقط"
          }
        },
        {
          timeFrame: {
            english: "If the course is withdrawn during the second week of the semester",
            arabic: "إذا تم الانسحاب من المادة خلال الأسبوع الثاني من بداية الدراسة"
          },
          refundPolicy: "Partial refund from Credit hour fees only",
          percentageRecovered: "50%",
          calculation: {
            english: "50% refund of course fees from credit hours only",
            arabic: "استرجاع نسبة من رسوم الساعات الدراسية فقط"
          }
        },
        {
          timeFrame: {
            english: "If the withdrawal takes place from the third week of the semester until the last day of withdrawal",
            arabic: "إذا تم الانسحاب من المقرر ابتداء من الأسبوع الثالث من بداية الدراسة وحتى آخر يوم للانسحاب حسب التقويم الجامعي المعلن عليه"
          },
          refundPolicy: "No Refund",
          percentageRecovered: "0%",
          calculation: {
            english: "Fees are not refundable",
            arabic: "الرسوم غير مستردة"
          }
        }
      ]
    }
  },

  administrativeFees: {
    publicationDate: "05-AUG-2025",
    documentCode: "AOUBH FIN-001.AD v.0",
    title: {
      english: "Administrative Fees and Other Fees for Arab Open University",
      arabic: "الرسوم الإدارية و الرسوم الأخرى في الجامعة العربية المفتوحة"
    },

    hecServices: {
      title: "HEC Services",
      fees: [
        {
          description: {
            english: "HEC- Student Enrollment Statement",
            arabic: "رسوم التصديق على إفادة قيد طالب"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Student Withdrawal Statement with Transcript",
            arabic: "رسوم التصديق على إفادة الانسحاب وكشف الدرجات"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Endorsement of Visitor Student Statement",
            arabic: "رسوم التصديق على إفادة الطالب الزائر"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Dismissed Student's Transcript",
            arabic: "رسوم التصديق على كشف درجات طالب مفصول"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Students' Transcripts (from Suspended Prog.)",
            arabic: "رسوم التصديق على كشف درجات طلبة الجامعات المسجدون برنامجهم والموقوفين برنامجهم"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC-Certification of 'Unified Student File' (new students) and providing HEC number",
            arabic: "رسوم اعتماد ملف الطالب الموحد (للطلبة المستجدين) ومنح رقم التعليم العالي"
          },
          bachelorFee: 20,
          masterFee: 20,
          currency: "BHD"
        }
      ]
    },

    generalAdministrativeFees: {
      title: "General Administrative Fees",
      fees: [
        {
          description: {
            english: "Postponement of Enrollment Fees",
            arabic: "رسوم وقف القيد"
          },
          bachelorFee: 32,
          masterFee: 32,
          currency: "BHD"
        },
        {
          description: {
            english: "Makeup Exam Fees",
            arabic: "رسوم الامتحان التعويضي"
          },
          bachelorFee: 50,
          masterFee: 100,
          currency: "BHD"
        },
        {
          description: {
            english: "Amendment of Graduation Certificate Fees",
            arabic: "رسوم تعديل/تعديل الشهادة الجدارية"
          },
          bachelorFee: 40,
          masterFee: 40,
          currency: "BHD"
        },
        {
          description: {
            english: "To whom it may concern Fees",
            arabic: "رسوم خطاب إلى من يهمه الأمر"
          },
          bachelorFee: 4,
          masterFee: 4,
          currency: "BHD"
        },
        {
          description: {
            english: "Transcript Attestation Fees",
            arabic: "رسوم تصديق كشف الدرجات"
          },
          bachelorFee: 4,
          masterFee: 4,
          currency: "BHD"
        },
        {
          description: {
            english: "Course Equalization Fees",
            arabic: "رسوم معادلة مواد"
          },
          bachelorFee: 10,
          masterFee: 10,
          currency: "BHD"
        },
        {
          description: {
            english: "Wall Certificate Replacement Fees",
            arabic: "رسوم بدل فاقد للشهادة الجدارية"
          },
          bachelorFee: 40,
          masterFee: 40,
          currency: "BHD"
        },
        {
          description: {
            english: "Student ID Card Fees",
            arabic: "رسوم إصدار هوية الطالب"
          },
          bachelorFee: 5,
          masterFee: 5,
          currency: "BHD"
        },
        {
          description: {
            english: "Student Fund Fees",
            arabic: "رسوم صندوق الطالب"
          },
          bachelorFee: 2,
          masterFee: 2,
          currency: "BHD"
        },
        {
          description: {
            english: "External Examiner fees",
            arabic: "رسوم الممتحن الخارجي"
          },
          bachelorFee: 0,
          masterFee: 50,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Issue of Endorsement of Graduation Statement",
            arabic: "رسوم إصدار إفادة مصدقة وتصديق على الأصول"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC-Translated Graduation Statement",
            arabic: "رسوم إصدار إفادة مصدقة مترجمة"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Replacement of Graduation Statement",
            arabic: "رسوم إصدار إفادة بدل فاقد/ طبق الأصل"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Amendment of Graduation Statement",
            arabic: "رسوم إصدار إفادة معدلة"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        },
        {
          description: {
            english: "HEC- Attesting Graduation Certificates",
            arabic: "رسوم تصديق الأصول (كشوف الشهادات الجامعية)"
          },
          bachelorFee: 25,
          masterFee: 25,
          currency: "BHD"
        }
      ]
    },

    registrationAndProcessingFees: {
      title: "Registration and Processing Fees",
      fees: [
        {
          description: {
            english: "Registration Fees",
            arabic: "رسوم التسجيل للطالب"
          },
          bachelorFee: 32,
          masterFee: 32,
          currency: "BHD"
        },
        {
          description: {
            english: "Admission Application Fees",
            arabic: "رسوم طلب الالتحاق"
          },
          bachelorFee: 30,
          masterFee: 100,
          currency: "BHD"
        },
        {
          description: {
            english: "Readmission Fees",
            arabic: "رسوم إعادة تقديم الطلب"
          },
          bachelorFee: 30,
          masterFee: 100,
          currency: "BHD"
        },
        {
          description: {
            english: "Graduation Fees",
            arabic: "رسوم التخرج"
          },
          bachelorFee: 150,
          masterFee: 150,
          currency: "BHD"
        },
        {
          description: {
            english: "Placement Test Fees per test",
            arabic: "رسوم امتحان تحديد مستوى لكل امتحان"
          },
          bachelorFee: 12,
          masterFee: 12,
          currency: "BHD"
        },
        {
          description: {
            english: "ID Card Replacement Fees",
            arabic: "رسوم بدل فاقد هوية الطالب"
          },
          bachelorFee: 5,
          masterFee: 5,
          currency: "BHD"
        },
        {
          description: {
            english: "Programme Transfer Fees",
            arabic: "رسوم الانتقال إلى برنامج آخر"
          },
          bachelorFee: 10,
          masterFee: 10,
          currency: "BHD"
        },
        {
          description: {
            english: "ID Card Correction Fees",
            arabic: "رسوم تعديل البطاقة الجامعية"
          },
          bachelorFee: 5,
          masterFee: 5,
          currency: "BHD"
        },
        {
          description: {
            english: "Branch Transfer Fees",
            arabic: "رسوم التحويل بين الفروع"
          },
          bachelorFee: 35,
          masterFee: 35,
          currency: "BHD"
        },
        {
          description: {
            english: "Appeal Fees",
            arabic: "رسوم التظلم"
          },
          bachelorFee: 10,
          masterFee: 10,
          currency: "BHD"
        },
        {
          description: {
            english: "Late Registration Fees",
            arabic: "رسوم التسجيل المتأخر"
          },
          bachelorFee: 20,
          masterFee: 20,
          currency: "BHD"
        },
        {
          description: {
            english: "Value-Added Services Fees",
            arabic: "رسوم خدمات قيمة مضافة VAS"
          },
          bachelorFee: 10,
          masterFee: 10,
          currency: "BHD"
        },
        {
          description: {
            english: "Photocopy Card Fees",
            arabic: "رسوم بطاقة تصوير مستندات"
          },
          bachelorFee: 3,
          masterFee: 3,
          currency: "BHD"
        },
        {
          description: {
            english: "Learning Management System Fees",
            arabic: "رسوم نظام إدارة التعلم"
          },
          bachelorFee: 14,
          masterFee: 14,
          currency: "BHD"
        },
        {
          description: {
            english: "Invitation Card Fees",
            arabic: "رسوم بطاقة الدعوة"
          },
          bachelorFee: 5,
          masterFee: 5,
          currency: "BHD"
        },
        {
          description: {
            english: "Printing Card Fees",
            arabic: "رسوم طباعة بالكمبيوتر"
          },
          bachelorFee: 1,
          masterFee: 1,
          currency: "BHD"
        }
      ]
    }
  },

  paymentTerms: {
    currency: "BHD (Bahraini Dinars)",
    applicability: {
      bachelor: "All Bachelor degree programs",
      master: "All Master degree programs"
    },
    refundConditions: {
      nonRefundableItems: [
        "Education Package (if delivered)",
        "Registration fees"
      ],
      refundableConditions: "Based on withdrawal timing and semester type as per refund policy"
    }
  }
};

module.exports = financialInformation;