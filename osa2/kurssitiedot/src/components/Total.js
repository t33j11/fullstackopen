import Course from './Course'

const Total = ({ course }) => {
  const exercisesArray = course.parts.map((part) => {
        return (
          part.exercises
        )
      })
  const exercisesTotal = exercisesArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0)
      return(
        <div>
          <b>Total of {exercisesTotal} exercises</b>
        </div>
      )
    }

  export default Total