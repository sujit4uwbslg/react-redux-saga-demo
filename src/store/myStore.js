import { buyBook,BUY_BOOK } from "../actions/myactions";
import { createStore,applyMiddleware } from "redux";
import { fetchDetails } from "../sagas/mysaga";
import createSagaMiddleware from 'redux-saga'
const initialvalue={
    numOfBook:10,
    sd:""
}

export const reduce=(state=initialvalue,action)=>{
    if(action.type===BUY_BOOK){
        return{
            ...state,
            numOfBook:state.numOfBook-1
        }
    }
    if(action.type==="USER_SUCCESS"){
        return {
            ...state,
            sd:action.num}
    }
    return state
}

const sagaMiddleware=createSagaMiddleware()
export const myStore=createStore(reduce,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(fetchDetails)

