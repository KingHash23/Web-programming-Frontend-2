export interface CourseResult {
  course: string;
  mark: number;
  cu: number;
  gp: number;
}

export interface SemesterResult {
  year: number;
  semester: number;
  gpa: number;
  courses: CourseResult[];
}

export const academicResults: SemesterResult[] = [
  {
    year: 1,
    semester: 1,
    gpa: 4.50,
    courses: [
      { course: "Essential Hardware and Software Concepts", mark: 83, cu: 4, gp: 5 },
      { course: "Fundamentals of Computing", mark: 74, cu: 4, gp: 4 },
      { course: "Structured Programming", mark: 79, cu: 4, gp: 4.5 },
      { course: "Discrete Mathematics", mark: 70, cu: 3, gp: 4 },
      { course: "Writing and Study Skills", mark: 87, cu: 3, gp: 5 },
      { course: "Understanding the Old Testament", mark: 76, cu: 3, gp: 4.5 }
    ]
  },
  {
    year: 1,
    semester: 2,
    gpa: 4.30,
    courses: [
      { course: "Data Structures and Algorithms", mark: 79, cu: 4, gp: 4.5 },
      { course: "Computer Organisation and Architecture", mark: 76, cu: 3, gp: 4.5 },
      { course: "Probability and Statistics", mark: 79, cu: 3, gp: 4.5 },
      { course: "Database Design and Applications", mark: 75, cu: 4, gp: 4.5 },
      { course: "Local Area Computer Networking", mark: 76, cu: 3, gp: 4.5 },
      { course: "Understanding The New Testament", mark: 64, cu: 3, gp: 3 },
      { course: "Health and Wholeness", mark: 78, cu: 3, gp: 4.5 }
    ]
  },
  {
    year: 2,
    semester: 1,
    gpa: 4.17,
    courses: [
      { course: "CS Field Attachment I - Workshop Practice", mark: 83, cu: 3, gp: 5 },
      { course: "Object Oriented Programming", mark: 92, cu: 4, gp: 5 },
      { course: "Operating Systems", mark: 61, cu: 3, gp: 3 },
      { course: "Design and Analysis of Algorithms", mark: 58, cu: 3, gp: 2.5 },
      { course: "Calculus", mark: 80, cu: 3, gp: 5 },
      { course: "Data Science", mark: 72, cu: 4, gp: 4 },
      { course: "Understanding Ethics from a Christian Perspective", mark: 78, cu: 3, gp: 4.5 }
    ]
  }
];