
import type from './type';
import host from '../../util/host';
import storage from '../../util/storage';


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
                }else {
                    alert('date err:'+resObj);
                }
            })
        .catch(function(err) {
            alert('no get :'+ err)
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
                }else {
                    alert('date err:'+resObj);
                }
            })
            .catch(function(err) {
                alert('no get :'+ err)
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
                alert('no get :'+ err)
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
                }else {
                    alert('date err:'+resObj);
                }
            })
            .catch(function(err) {
                alert('no get :'+ err)
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
                }else {
                    alert('date err:'+resObj);
                }
            })
            .catch(function(err) {
                alert('no get :'+ err)
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
                }else {
                    alert('date err:'+resObj);
                }
            })
            .catch(function(err) {
                alert('no get :'+ err)
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
                    alert(resObj.msg);
                    dispatch({
                        type: type.registered,
                        regData
                    })
                }else {
                    alert('注册失败：'+resObj.msg);
                }
            })
            .catch(function(err) {
                alert('no get :'+ err)
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
                }else{
                    storage
                }
            })
            .catch(function(err) {
                alert('no get :'+ err)
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
                    alert('添加失败'+resObj.msg);
                }
            })
            .catch(function(err) {
                alert('添加失败'+err);
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
                    alert('删除失败'+resObj.msg);
                }
            })
            .catch(function(err) {
                alert('删除失败'+err);
            })
    }
};





