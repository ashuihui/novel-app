import type from '../action/type';
import storage from '../../util/storage';


const user =  (state = {
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
             storage.setToken(action.loginData.token);
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
                userName:null,
                userId:null,
                password:null,
                passwordTwo:null,
                token:null,
                isLogin:false,
                isReg:false,
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
                isLogin:true,
                isReg:false,
                testCode:null,
            };
            return isLoginResult;
        default:
            return state
    }
};

export default user;

