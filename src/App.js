import { useEffect, useState } from 'react'
import './App.scss'
import GoalForm from './components/goal-form/GoalForm'
import { ValuesForm } from './components/values-form/ValuesForm'
import { GOAL, VALUES } from './constants/dataService'
import { getData } from './services/services'

function App() {
  const [goal, setGoal] = useState(0)
  const [values, setValues] = useState([])

  useEffect(() => {
    getGoal()
  }, [])

  const getGoal = async () => {
    const { amount } = await getData(GOAL)
    setGoal(Number(amount))
  }

  const getValues = async () => {
    const values = await getData(VALUES)
    setValues(values)
  }

  return (
    <div className="app">
      <h1>Barra de progreso</h1>
      <h3>Meta a alcanzar: {goal}</h3>
      <GoalForm getGoal={getGoal} />
      <ValuesForm getValues={getValues} />
    </div>
  )
}

export default App
