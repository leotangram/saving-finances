import React from 'react'
import { VALUES } from '../../constants/dataService'
import { useForm } from '../../hook/useForm'
import { addData } from '../../services/services'

export const ValuesForm = ({ getValues }) => {
  const [{ amount, type }, handleInputChange, reset] = useForm({
    amount: '',
    type: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    addData({ amount, type }, 'values')
    setTimeout(() => {
      getValues()
    }, 300)
    reset()
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="number"
        name="amount"
        placeholder="Valor"
        autoComplete="off"
        className="input-form"
        onChange={handleInputChange}
        value={amount}
      />
      <select name="type" onChange={handleInputChange} value={type}>
        <option value="">---Tipo---</option>
        <option value="income">Ingreso</option>
        <option value="expensive">Egreso</option>
      </select>
      <button className="button-form" type="submit">
        Agregar
      </button>
    </form>
  )
}
