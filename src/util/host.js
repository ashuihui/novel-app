import {deleteInterest} from "../redux/action";


const host ={
    hostPort:'http://118.89.32.47:7280',
    totalRankHost:function (num) {
        let me = this;
        return `${me.hostPort}/rank?num=${num}`;
    },
    newRankHost:function (num) {
        let me = this;
        return `${me.hostPort}/rank?num=${num}`;
    },
    searcherHost:function (word) {
        let me = this;
        return `${me.hostPort}/searcher?word=${word}`;
    },
    novelHost:function (num) {
        let me = this;
        return `${me.hostPort}/novel?nid=${num}`;
    },
    userLoginHost:function (user) {
        let me = this;
        return `${me.hostPort}/user/login?userName=${user.userName}&password=${user.password}`;
    },
    userRegisteredHost:function (user) {
        let me = this;
        return `${me.hostPort}/user/registered?userName=${user.userName}&password=${user.password}&testCode=${user.testCode}`;
    },
    userIsLogin:function (token) {
        let me = this;
        return `${me.hostPort}/user/isLogin?token=${token}`;
    },
    userInterest:function (token) {
        let me = this;
        return `${me.hostPort}/user/interest?token=${token}`;
    },
    addInterest:function (token,nid) {
        let me = this;
        return `${me.hostPort}/user/interest/add?token=${token}&nid=${nid}`;
    },
    deleteInterest:function (token,nid) {
        let me = this;
        return `${me.hostPort}/user/interest/delete?token=${token}&nid=${nid}`;
    },
    addComment:function (token,commentObj) {
        let me = this;
        return `${me.hostPort}/comment/add?token=${token}&nid=${commentObj.nid}&novelName=${commentObj.novelName}&uid=${commentObj.uid}&userName=${commentObj.userName}&comment=${commentObj.comment}&score=${commentObj.score}&updateTime=${commentObj.updateTime}`;
    },
    fetNovelComments:function (nid,num) {
        let me = this;
        return `${me.hostPort}/comment/novel?nid=${nid}&num=${num}`;
    },
    fetCommentsFlow:function (num) {
        let me = this;
        return `${me.hostPort}/comment/flow?num=${num}`;
    },

};
module.exports =host;

