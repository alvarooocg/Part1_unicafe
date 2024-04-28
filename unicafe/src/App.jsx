import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Header text="statics"/>
      <Data all={all} good={good} neutral={neutral} bad={bad} average={average} positive={positive}/>
    </div>
  )
}

const Header = (props) => (
    <h1>
      {props.text}
    </h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// I already created the statistic component in the previous step (1.8) 
const Statistics = (props) => (
  <div>
    {props.name} {props.count}
  </div>
)

const Data = (props) => {
  if (props.all == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else if (props.all > 0) {
    return (
      <div>
        <Statistics name="good" count={props.good}/>
        <Statistics name="neutral" count={props.neutral}/>
        <Statistics name="bad" count={props.bad}/>
        <Statistics name="all" count={props.all}/>
        <Statistics name="average" count={props.average}/>
        <Statistics name="positive" count={props.positive + " %"}/>
      </div>
    )
  }
}

export default App
