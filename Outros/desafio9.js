// forma A #example1:
const calculateAverageOfStudents = () => {
  const students = [
    { name: 'Leo', note: 10, subject: 'Matemática' },
    { name: 'Leo', note: 5, subject: 'Português' },
    { name: 'Ana', note: 10, subject: 'Português' },
    { name: 'Ana', note: 20, subject: 'Matemática' },
    { name: 'Pedro', note: 5, subject: 'Matemática' },
    { name: 'Pedro', note: 15, subject: 'Português' },
  ];
  let studentsInfo = {};
  for (const student of students) {
    if (!studentsInfo[student.name]) {
      studentsInfo[student.name] = {
        totalNotes: 0,
        count: 0,
      };
    }
    studentsInfo[student.name].totalNotes += student.note;
    studentsInfo[student.name].count++;
  }
  for (const student in studentsInfo) {
    studentsInfo[student].averageStudent = Number(
      (studentsInfo[student].totalNotes / studentsInfo[student].count).toFixed(2)
    );
  }
  return studentsInfo;
};
console.log(calculateAverageOfStudents());

// forma A #example2:
const newCalculateAverageOfNotes = () => {
  const newStudents = [
    { name: 'Leonardo', note: 10, subject: 'Português' },
    { name: 'Adailza', note: 20, subject: 'Matemática' },
    { name: 'Liz', note: 30, subject: 'Matemática' },
    { name: 'Vinicius', note: 15, subject: 'Português' },
    { name: 'Adailza', note: 12, subject: 'Português' },
    { name: 'Liz', note: 20, subject: 'Português' },
    { name: 'Leonardo', note: 27, subject: 'Matemática' },
    { name: 'Vinicius', note: 23, subject: 'Matemática' },
    { name: 'Vinicius', note: 23, subject: 'Matemática' },
  ];
  let studentAndSubjectInfo = {};
  for (const student of newStudents) {
    if (!studentAndSubjectInfo[student.name]) {
      studentAndSubjectInfo[student.name] = {
        totalNotes: 0,
        count: 0,
        subjects: {},
      };
    }
    if (!studentAndSubjectInfo[student.name].subjects[student.subject]) {
      studentAndSubjectInfo[student.name].subjects[student.subject] = {
        totalNotes: 0,
        count: 0,
      };
    }
    studentAndSubjectInfo[student.name].totalNotes += student.note;
    studentAndSubjectInfo[student.name].count++;
    studentAndSubjectInfo[student.name].subjects[student.subject].totalNotes += student.note;
    studentAndSubjectInfo[student.name].subjects[student.subject].count++;
  }
  for (const student in studentAndSubjectInfo) {
    studentAndSubjectInfo[student].averageStudent = Number(
      (studentAndSubjectInfo[student].totalNotes / studentAndSubjectInfo[student].count).toFixed(2)
    );
    for (const subject in studentAndSubjectInfo[student].subjects) {
      studentAndSubjectInfo[student].subjects[subject].averageSubject = Number(
        (
          studentAndSubjectInfo[student].subjects[subject].totalNotes /
          studentAndSubjectInfo[student].subjects[subject].count
        ).toFixed(2)
      );
    }
  }
  return studentAndSubjectInfo;
};
console.log(JSON.stringify(newCalculateAverageOfNotes(), null, 2));