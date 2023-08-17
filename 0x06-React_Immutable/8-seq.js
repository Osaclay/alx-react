import { Seq } from 'immutable';

export default function printBestStudents(gradesObject) {
  const seq = Seq(gradesObject);

  const filteredStudents = seq.filter((student) => student.score > 70);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const jsObject = filteredStudents.toJS();

  const updatedStudents = Object.keys(jsObject).map((key) => ({
    ...jsObject[key],
    firstName: capitalizeFirstLetter(jsObject[key].firstName),
    lastName: capitalizeFirstLetter(jsObject[key].lastName),
  }));

  console.log(updatedStudents);
}
