import type from '../action/type';


const novelComments = (state = [], action) => {
    switch (action.type) {
        case type.getNovelComments:
            const result = [
                ...state,
                ...action.data.comments
            ];
            return result;
        case type.clearNovelComments:
            return [];
        default:
            return state
    }
};

export default novelComments;

