
import type from './type';

export const fetchTotalRank = (apiUrl) => {
    return dispatch => {
        fetch( apiUrl , {
            method: 'GET',
        })
            .then((response) =>{
                return response.json()
            })
            .then((res)=>{
                // const resObj=JSON.parse(res);
                const resObj=res;
                console.log(resObj);
                if(resObj.success){
                    const rankData=resObj.data.novelArr;
                    dispatch({
                        type: type.getTotalRank,
                        rankData
                    })
                }else {
                    alert('date err:'+resObj);
                    // const msg=resp.msg;
                    // dispatch({
                    //     type:type.err,
                    //     msg
                    // })
                }

            })
        .catch(function(err) {
            alert('no get :'+ err)
        })
    }

};