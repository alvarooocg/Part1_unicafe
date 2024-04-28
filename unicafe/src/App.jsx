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
      <Statistic name="good" count={good}/>
      <Statistic name="neutral" count={neutral}/>
      <Statistic name="bad" count={bad}/>
      <Statistic name="all" count={all}/>
      <Statistic name="average" count={average}/>
      <Statistic name="positive" count={positive + " %"}/>
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

const Statistic = (props) => (
  <div>
    {props.name} {props.count}
  </div>
)

export default App
