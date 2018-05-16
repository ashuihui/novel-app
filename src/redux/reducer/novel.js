import type from '../action/type';


const novelComments = (state = {}, action) => {
    switch (action.type) {
        case type.getNovelComments:
            const result = {
                ...action.data.novel
            };
            return result;
        default:
            return state
    }
};

export default novelComments;

