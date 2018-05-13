import type from '../action/type';


const newRank = (state = [], action) => {
    switch (action.type) {
        case type.getNewRank:
            const result = [
                ...state,
                ...action.novelData
            ];
            return result;
        default:
            return state
    }
};

export default newRank;

