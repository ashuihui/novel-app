
import React, {
    AsyncStorage
}from 'react-native';

let storage={
    setToken:async function(token){
        try {
            await AsyncStorage.setItem('token',token);
        } catch (error) {
            console.log('存储token失败');
        }
    },
    getToken:async function(){
        try {
            const value = await AsyncStorage.getItem('token',(err,result)=>{
                if(err){
                    console.log('get err :'+err+'-----\n'+result)
                }
            });
            if (value !== null){
                return value;
            }else{
                return null;
            }
        } catch (error) {
            console.log('获取token失败');
        }
    },
    removeToken:async function () {
        try {
            const value = await AsyncStorage.removeItem('token');
        } catch (error) {
            console.log('删除token失败');
        }
    }
}
module.exports = storage;