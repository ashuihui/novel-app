import type from '../action/type';


const totalRank = (state = [], action) => {
    switch (action.type) {
        case type.getTotalRank:
            const result = [
                ...state,
                ...action.novelData
            ];
            return result;
        default:
            return state
    }
};

export default totalRank;

