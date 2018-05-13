import type from '../action/type';


const recommendation = (state = [], action) => {
    switch (action.type) {
        case type.getRecommendation:
            const result = [
                ...action.novelData
            ];
            return result;
        default:
            return state
    }
};

export default recommendation;
