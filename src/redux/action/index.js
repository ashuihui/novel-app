
import type from './type';
import host from '../../util/host';

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
export const fetchBookShelf = (num) => {
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
                        type: type.getBookShelf,
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
                    dispatch({
                        type: type.registered,
                        regData
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



