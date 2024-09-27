import Course from './components/Course'

const App = () => {
  const courses = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id: 4,
        name: 'List Aggregation',
        exercises: 5
      },
      {
        id: 5,
        name: 'Map and Reduce in Depth',
        exercises: 10
      }
    ]},
    {
    id: 2,
    name: 'Node.js',
    parts: [
      {
        id: 1,
        name: 'Routing',
        exercises: 3
      },
      {
        id: 2,
        name: 'Middlewares',
        exercises: 7
      }
    ]
    },
    {
    id: 3,
    name: 'Express or something',
    parts: [
      {
        id: 1,
        name: 'part1',
        exercises: 7
      },
      {
        id: 2,
        name: 'part2',
        exercises: 12
      }
    ]
    }
    ]
  

  return (
    <Course course={courses} />
  )
}

export default App