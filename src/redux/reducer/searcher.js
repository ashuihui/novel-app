import type from '../action/type';


const searcher = (state = [], action) => {
    switch (action.type) {
        case type.getSearcher:
            const result = [
                ...action.novelData
            ];
            return result;
        default:
            return state
    }
};

export default searcher;

