

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
};
module.exports =host;

