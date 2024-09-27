const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <>
        <p>{props.part} {props.exercises}</p>
      </>
    )
  }
  
  const Content = (props) => {
    return (
      <>
        {props.parts.map(part =>
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
      </>
    )
  }
  
  const Total = (props) => {
    const total = props.parts.map(part => part.exercises).reduce((a, b) => a + b)
    return (
      <>
        <strong>Number of exercises {total} </strong>
      </>
    )
  }
  
  const Course = (props) => {
    return (
      <>
        {props.course.map(course => 
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
        )}
      </>
    )
  }

export default Course