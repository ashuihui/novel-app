import { combineReducers } from 'redux'
import totalRank from'./totalRank'
import newRank from'./newRank'
import bookShelf from'./bookShelf'
import searcher from'./searcher'
import recommendation from'./recommendation'
import user from'./user'
import novel from'./novel'
import novelComments from'./novelComments'
import commentsFlow from'./commentsFlow'

const rootReducer = combineReducers({
    totalRank,
    newRank,
    bookShelf,
    searcher,
    recommendation,
    user,
    novel,
    novelComments,
    commentsFlow
});

export default rootReducer
