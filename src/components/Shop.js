import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators} from '../state/index' // imported it because in here we have all our actions which we can import
const Shop = () => {
  const amount=useSelector(state=>state.amount)
const dispatch=useDispatch()
// const {action}=bindActionCreators(actionCreators,dispatch) OR use destructuring
const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h3>Deposit / Withdraw Money</h3>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>Update Balance ({amount})
      <button className="btn btn-primary mx-2"onClick={()=>{depositMoney(100)}}>+</button>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{action.withdrawMoney(100)}}>-</button>Update Balance
      <button className="btn btn-primary mx-2"onClick={()=>{action.depositMoney(100)}}>+</button>
     <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>Update Balance
      <button className="btn btn-primary mx-2"onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
    </div>
  )
}
export default Shop
