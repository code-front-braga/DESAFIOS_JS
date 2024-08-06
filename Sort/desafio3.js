const orderedByNote = () => {
  const students = [
    { name: 'Leo', note: 10 },
    { name: 'Iza', note: 20 },
    { name: 'Liz', note: 30 },
    { name: 'Kim', note: 35 },
  ];
  // let acc = 0;
  let notes = students.sort((a,b) => b.note - a.note, 0);
  return notes
};

console.log(orderedByNote());
