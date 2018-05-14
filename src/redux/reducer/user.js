import type from '../action/type';


const user = (state = {
    userName:null,
    userId:null,
    password:null,
    passwordTwo:null,
    token:null,
    isLogin:false,
    isReg:false,
    testCode:null,
}, action) => {
    switch (action.type) {
        case type.login:
            const loginResult = {
                userName:action.loginData.user.userName,
                userId:action.loginData.user.userId,
                password:null,
                passwordTwo:null,
                token:action.loginData.token,
                isLogin:true,
                isReg:false,
                testCode:null,
            };
            return loginResult;
        case type.registered:
            const regResult = {
                userName:action.regData.user.userName,
                userId:action.regData.user.userId,
                password:null,
                passwordTwo:null,
                token:action.loginData.token,
                isLogin:false,
                isReg:true,
                testCode:null,
            };
            return regResult;
        default:
            return state
    }
};

export default user;

