const getAllNotes = (arrayOfObjects) => {
  const newArray = [];

  let mapNotesOnly = arrayOfObjects.map(obj => obj.note)
  // newArray.push(mapNotesOnly);

  return mapNotesOnly;
}
const array = [
  { name: 'Leo', note: 10 },
  { name: 'Iza', note: 20 },
  { name: 'Liz', note: 30 },
]
console.log(getAllNotes(array))