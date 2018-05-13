import { combineReducers } from 'redux'
import totalRank from'./totalRank'
import newRank from'./newRank'
import bookShelf from'./bookShelf'
import searcher from'./searcher'
import recommendation from'./recommendation'

const rootReducer = combineReducers({
    totalRank,
    newRank,
    bookShelf,
    searcher,
    recommendation
});

export default rootReducer
