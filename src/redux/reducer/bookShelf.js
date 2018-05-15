import type from '../action/type';


const bookShelf = (state = [], action) => {
    switch (action.type) {
        case type.getBookShelf:
            const result = [
                ...action.novelData
            ];
            return result;
        case type.registered:
            return [];
        case type.quit:
            return [];
        default:
            return state
    }
};

export default bookShelf;

