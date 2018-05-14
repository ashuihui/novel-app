import { combineReducers } from 'redux'
import totalRank from'./totalRank'
import newRank from'./newRank'
import bookShelf from'./bookShelf'
import searcher from'./searcher'
import recommendation from'./recommendation'
import user from'./user'

const rootReducer = combineReducers({
    totalRank,
    newRank,
    bookShelf,
    searcher,
    recommendation,
    user
});

export default rootReducer
