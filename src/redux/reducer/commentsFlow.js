import type from '../action/type';


const commentsFlow = (state = [], action) => {
    switch (action.type) {
        case type.fetCommentsFlow:
            const result = [
                ...state,
                ...action.data.comments
            ];
            return result;
        case type.clearCommentsFlow:
            return [];
        default:
            return state
    }
};

export default commentsFlow;

