import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text,value}) => {
  return(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
  
}

const Statistics = (props) => {
    if(props.total==0){
      return(
        <p>no ratings yet</p>
      )
    }else{
      return(
        <table>
          <tbody>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="total" value ={props.total} />
          <StatisticLine text="average" value ={(props.good-props.bad)/(props.total)} />
          <StatisticLine text="positive" value ={props.good/props.total*100} />
          </tbody>
        </table>
      )
  }
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increment = (value,func) => {
    const handler = () => {
      setTotal(total+1)
      func(value+1)
    }
    return handler
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increment(good,setGood)} text="good" />
      <Button handleClick={increment(neutral,setNeutral)} text="neutral" />
      <Button handleClick={increment(bad,setBad)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App