const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header name={course} /> </h1>
      <p>
        <Content name={part1} count={exercises1}/>
      </p>
      <p>
      <Content name={part2} count={exercises2}/>
      </p>
      <p>
      <Content name={part3} count={exercises3}/>
      </p>
      <p><Total total={exercises1+exercises2+exercises3}/></p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
        {props.name}
      </p>
    </div>
  )
}

const Content = (props) =>  {
  return (
      <p>
        {props.name} {props.count}
      </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total} </p>
  )
}

export default App