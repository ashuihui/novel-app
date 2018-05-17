
import Toast from 'react-native-root-toast';
import color from '../common/styles/color';
import px2dp from '../common/styles/px2dp';

const toastObj = {
    toastShort:(content)=>{
        let toast = Toast.show(content, {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor:color.primaryTextColor,
            textColor:color.primaryColorText,
            textStyle: {fontSize: px2dp(30)},
            onShow: () => {
                // calls on toast\`s appear animation start
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
            }
        });
        setTimeout(function () {
            Toast.hide(toast);
        }, 1500);
    }
};

module.exports = toastObj;