import { combineReducers, createStore,applyMiddleware,compose } from "redux"
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import  BlogReducer  from "../reducers/BlogReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore=() => {
    const store=createStore(
        combineReducers({
            blogreducer:BlogReducer,
            auth:authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
   )
   return store
}
export default configureStore
