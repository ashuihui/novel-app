

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
    }
};
module.exports =host;

