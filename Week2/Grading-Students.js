/*
Problem: 
HackerLand University has the following grading policy:
- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's  according to these rules:
- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
*/

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  const result = [];
  grades.forEach(grade => {
    const ceilNum = Math.ceil(grade / 5) * 5;

    if (ceilNum >= 40 && ceilNum - grade < 3) {
      result.push(ceilNum);
    } else {
      result.push(grade);
    }
  });
  return result;
}
