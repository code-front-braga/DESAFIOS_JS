const greaterNote = () => {
  const students = [
    { name: 'Leo', note: 10 },
    { name: 'Iza', note: 20 },
    { name: 'Liz', note: 30 },
  ];

  let maxNote = students[0];

  students.forEach(student => {
    if (student.note > maxNote.note) {
      maxNote = student;
    }
  });
  return maxNote;
};
console.log(greaterNote());

const greaterNoteB = () => {
  const students = [
    { name: 'Leo', note: 10 },
    { name: 'Iza', note: 20 },
    { name: 'Liz', note: 30 },
  ];

  const maxNote = students.reduce((max, student) => {
    return student.note > max.note ? student : max;
  }).name;

  return maxNote;
};
console.log(greaterNoteB())
