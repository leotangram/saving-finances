import React from 'react'
import { useForm } from '../../hook/useForm'
import { addData } from '../../services/services'

const GoalForm = ({ getGoal }) => {
  const [{ amount }, handleInputChange, reset] = useForm({
    amount: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    addData({ amount }, 'goal')
    setTimeout(() => {
      getGoal()
    }, 300)
    reset()
  }

  const disabled = amount <= 0 || amount === ''

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="number"
        name="amount"
        placeholder="Ingresa tu meta"
        autoComplete="off"
        className="input-form"
        onChange={handleInputChange}
        value={amount}
      />
      <button className="button-form" type="submit" disabled={disabled}>
        Agregar
      </button>
    </form>
  )
}

export default GoalForm
