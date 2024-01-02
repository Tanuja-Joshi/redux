import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducers from './reducers'
import { thunk } from 'redux-thunk'

export const store =createStore(reducers,{}, applyMiddleware(thunk))



//createStore is deprectaed to need to use it like this and it takes all the reducers as 1st param and takes initial state as 2nd param 
// and if you wanna apply any middleware then 3rd param as middleware
//thunk helps in executing the async functions