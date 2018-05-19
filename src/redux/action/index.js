
import type from './type';
import host from '../../util/host';
import toast from '../../util/toast';


export const fetchTotalRank = (num) => {
    let apiUrl= host.totalRankHost(num);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const novelData=resObj.data.novelArr;
                    dispatch({
                        type: type.getTotalRank,
                        novelData
                    })
                }else{
                    toast.toastShort(resObj.msg);
                }
            })
        .catch(function(err) {
            toast.toastShort('无网络')
        })
    }
};
export const fetchNewRank = (num) => {
    let apiUrl= host.newRankHost(num);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const novelData=resObj.data.novelArr;
                    dispatch({
                        type: type.getNewRank,
                        novelData
                    })
                }else{
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const fetchBookShelf = (token) => {
    let apiUrl= host.userInterest(token);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
            credentials: 'include'
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const novelData=resObj.data.novelArr;
                    dispatch({
                        type: type.getBookShelf,
                        novelData
                    })
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const fetchSearcher = (word) => {
    let apiUrl= host.searcherHost(word);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const novelData=resObj.data.novelArr;
                    dispatch({
                        type: type.getSearcher,
                        novelData
                    })
                }else{
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const fetchRecommendation = (nid) => {
    let apiUrl= host.novelHost(nid);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const novelData=resObj.data.recommendation;
                    dispatch({
                        type: type.getRecommendation,
                        novelData
                    })
                }else{
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const login = (user) => {
    let apiUrl= host.userLoginHost(user);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const loginData=resObj.data;
                    dispatch({
                        type: type.login,
                        loginData
                    })
                }else{
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const registered = (user) => {
    let apiUrl= host.userRegisteredHost(user);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const regData=resObj.data;
                    dispatch({
                        type: type.registered,
                        regData
                    });
                    toast.toastShort(resObj.msg);
                }else {
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const quit = (user) => {
    return {
        type: type.quit,
        user
    }
};
export const isLogin =  (localToken) => {
    let apiUrl= host.userIsLogin(localToken);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
            credentials: 'include'
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const isLoginData=resObj.data;
                    dispatch({
                        type: type.isLogin,
                        isLoginData
                    })
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const addInterest = (token,nid) => {
    let apiUrl= host.addInterest(token,nid);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const addInterestData=resObj.data;
                    dispatch({
                        type: type.addInterest,
                        addInterestData
                    })
                }else {
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const deleteInterest = (token,nid) => {
    let apiUrl= host.deleteInterest(token,nid);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const deleteInterestData=resObj.data;
                    dispatch({
                        type: type.deleteInterest,
                        deleteInterestData
                    })
                }else {
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const addComment = (token,commentObj) => {
    let apiUrl= host.addComment(token,commentObj);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const msg=resObj.data.msg;
                    dispatch({
                        type: type.addComment,
                        msg
                    })
                }else {
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const fetNovelComments = (nid,num=0) => {
    let apiUrl= host.fetNovelComments(nid,num);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json();
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const data=resObj.data;
                    dispatch({
                        type: type.getNovelComments,
                        data
                    })
                }else {
                    toast.toastShort('获取评论失败');
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const clearNovelComments = () => {
    return {
        type: type.clearNovelComments,
        data:null
    }
};
export const fetCommentsFlow = (num=0) => {
    let apiUrl= host.fetCommentsFlow(num);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json();
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const data=resObj.data;
                    dispatch({
                        type: type.fetCommentsFlow,
                        data
                    })
                }else {
                    toast.toastShort('获取信息流失败');
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};
export const clearCommentsFlow = () => {
    return {
        type: type.clearCommentsFlow,
        data:null
    }
};
export const getUserRecommendation = (token) => {
    let apiUrl= host.userRecommendationHost(token);
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                const resObj=res;
                if(resObj.success){
                    const novelData=resObj.data.recommendation;
                    dispatch({
                        type: type.getRecommendation,
                        novelData
                    })
                }else{
                    toast.toastShort(resObj.msg);
                }
            })
            .catch(function(err) {
                toast.toastShort('无网络')
            })
    }
};







