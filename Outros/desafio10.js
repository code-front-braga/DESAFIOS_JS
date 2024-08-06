const students = [
  {
    name: 'Leonardo',
    subjects: [
      {
        name: 'Português',
        evaluations: {
          av1: 10,
          av2: 20,
        },
      },
      {
        name: 'Matemática',
        evaluations: {
          av1: 20,
          av2: 60,
        },
      },
    ],
  },
  {
    name: 'Iza',
    subjects: [
      {
        name: 'Português',
        evaluations: {
          av1: 35,
          av2: 45,
        },
      },
      {
        name: 'Matemática',
        evaluations: {
          av1: 15,
          av2: 45,
        },
      },
    ],
  },
];

const sumEvaluationsOfEachSubjects = () => {
  const newObject = {};

  for (const student of students) {
    newObject[student.name] = {
      subjectsInfo: {},
    };
    for (const subject of student.subjects) {
      const total = subject.evaluations.av1 + subject.evaluations.av2;
      const evaluationsLength = Object.keys(subject.evaluations).length;
      const average = total / evaluationsLength;
      newObject[student.name].subjectsInfo[subject.name] = {
        total: total,
        average: average,
        av1: subject.evaluations.av1,
        av2: subject.evaluations.av2,
      };
    }
  }
  return newObject;
};
console.log(sumEvaluationsOfEachSubjects());
