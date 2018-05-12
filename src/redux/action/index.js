
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
                    const rankData=resObj.data.novelArr;
                    dispatch({
                        type: type.getTotalRank,
                        rankData
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