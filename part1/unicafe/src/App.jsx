import { useState } from 'react'

const Statistics = (props) => {
  if (props.total == 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <>
      <table>  
        <tbody>
          <tr>
            <StatisticsLine text="good" value={props.good}/>
          </tr>
          <tr>
            <StatisticsLine text="neutral" value={props.neutral}/>
          </tr>
          <tr>
            <StatisticsLine text="bad" value={props.bad}/>
          </tr>
          <tr>
            <StatisticsLine text="total" value={props.total}/>
          </tr>
          <tr>
            <StatisticsLine text="average" value={props.average}/>
          </tr>
          <tr>
            <StatisticsLine text="positive" value={props.positive}/>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const StatisticsLine = (props) => {
  if (props.text == 'positive') {
    return (
      <>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </>
    )  
  }
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = (good + neutral + bad)
  const average = total == 0 ? 0 : (good - bad)/total
  const positive = total == 0 ? 0 : (good/total)*100

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleBadClick} text="bad" />
      <Button handleClick={handleNeutralClick} text="neutral" />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />

    </div>
  )
}

export default App