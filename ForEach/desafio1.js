// //forma A #example1:
const calcAverageSalary = () => {
  const employers = [
    { nome: 'Iza', salary: 2500, department: 'RH' },
    { nome: 'Leo', salary: 2000, department: 'TI' },
    { nome: 'Liz', salary: 5000, department: 'MARKETING' },
    { nome: 'Vinicius', salary: 2200, department: 'TI' },
    { nome: 'Bernardo', salary: 2000, department: 'MARKETING' },
    { nome: 'Joaquim', salary: 1500, department: 'RH' },
  ];
  let departmentInfo = {};

  employers.forEach(employer => {
    if (!departmentInfo[employer.department]) {
      departmentInfo[employer.department] = {
        totalSalary: 0,
        count: 0,
      };
    }
    departmentInfo[employer.department].totalSalary += employer.salary;
    departmentInfo[employer.department].count++;
  });
  for (let department in departmentInfo) {
    departmentInfo[department].averageSalary =
      departmentInfo[department].totalSalary / departmentInfo[department].count;
  }
  return departmentInfo;
};
console.log(calcAverageSalary());

//forma A #example2:
const calcAverageSubjects = () => {
  const students = [
    { name: 'Leo', nota: 10, subject: 'Matemática' },
    { name: 'Leo', nota: 5, subject: 'Português' },
    { name: 'Leo', nota: 10, subject: 'Português' },
    { name: 'Leo', nota: 20, subject: 'Matemática' },
    { name: 'Leo', nota: 5, subject: 'Matemática' },
    { name: 'Leo', nota: 15, subject: 'Português' },
  ];
  let subjectInfo = {};
  for (const student of students) {
    if (!subjectInfo[student.subject]) {
      subjectInfo[student.subject] = {
        totalNotas: 0,
        count: 0,
      };
    }
    subjectInfo[student.subject].totalNotas += student.nota;
    subjectInfo[student.subject].count++;
  }
  for (const subject in subjectInfo) {
    subjectInfo[subject].averageSubject = (subjectInfo[subject].totalNotas / subjectInfo[subject].count).toFixed(2);
  }
  return subjectInfo;
};
console.log(calcAverageSubjects());
