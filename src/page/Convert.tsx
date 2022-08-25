import { useDispatch, useSelector } from 'react-redux'
import { IDefaultStore } from '../types/IDefaaultStore'

const Convert = () => {
  const dispatch = useDispatch()
  const cash = useSelector((state: IDefaultStore) => state?.cash)

  const addCash = () => {
    dispatch({ type: 'ADD_CASH', payload: 5 })
  }
  const getCash = () => {
    dispatch({ type: 'GET_CASH', payload: 5 })
  }

  return (
    <div>
      <h1>{cash}</h1>
      <div className="d-flex">
        <button className="btn btn-primary" onClick={() => addCash()}>
          Add cash
        </button>
        <button className="btn btn-primary" onClick={() => getCash()}>
          Get Cash
        </button>
      </div>
    </div>
  )
}

export default Convert
