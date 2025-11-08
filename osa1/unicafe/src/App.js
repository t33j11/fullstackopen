import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const button_good = () => setGood(good + 1)
  const button_neutral = () => setNeutral(neutral + 1)
  const button_bad = () => setBad(bad + 1)

  if (good===0 & neutral===0 & bad===0) {
    return (
      <div>
        <h1>give feedback</h1>
      <Button func = {button_good} text = {"good"}/>
      <Button func = {button_neutral} text = {"neutral"}/>
      <Button func = {button_bad} text = {"bad"}/>
      <h1>statistics</h1>
      No feedback given</div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button func = {button_good} text = {"good"}/>
      <Button func = {button_neutral} text = {"neutral"}/>
      <Button func = {button_bad} text = {"bad"}/>
      <h1>statistics</h1>
      <table>
        <tbody>
      <StatisticLine text={"good"} value={good}/>
      <StatisticLine text={"neutral"} value={neutral}/>
      <StatisticLine text={"bad"} value={bad}/>
      <StatisticLine text={"all"} value={good+neutral+bad}/>
      <StatisticLine text={"average"} value={((good+(-1)*bad)/(good+neutral+bad))}/>
      <StatisticLine text={"positive %"} value={100*(good/(good+neutral+bad))}/>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({func,text}) => {
  return (
      <button onClick = {func}> {text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <tr><th>{text}</th><th>{value}</th></tr>
  )
}

export default App