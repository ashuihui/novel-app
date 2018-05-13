import type from '../action/type';


const bookShelf = (state = [], action) => {
    switch (action.type) {
        case type.getBookShelf:
            const result = [
                ...state,
                ...action.novelData
            ];
            return result;
        default:
            return state
    }
};

export default bookShelf;

