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
        case type.quit:
            const quitResult = {
                userName:null,
                userId:null,
                password:null,
                passwordTwo:null,
                token:null,
                isLogin:false,
                isReg:false,
                testCode:null,
            };
            return quitResult;
        case type.isLogin:
            const isLoginResult = {
                userName:action.isLoginData.user.userName,
                userId:action.isLoginData.user.userId,
                password:null,
                passwordTwo:null,
                token:action.isLoginData.token,
                isLogin:false,
                isReg:true,
                testCode:null,
            };
            return isLoginResult;
        default:
            return state
    }
};

export default user;

