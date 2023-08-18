import { createStore } from 'redux'
import RootReducer from './redux/reducer/RootReducer'
const store = createStore(RootReducer)

export default store