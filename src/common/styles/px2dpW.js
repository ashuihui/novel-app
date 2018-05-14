'use strict';


import {Dimensions} from 'react-native';

// device width/height
const deviceWidthDpx = Dimensions.get('window').width;
const deviceHeightDpy = Dimensions.get('window').height;
// design width/height
const uiHeightPx = 375;
const uiHeightPy = 812;

export default function px2dpW(uiElementPx) {
    //console.log(deviceWidthDp);
    //console.log(deviceHeightDp);
    return uiElementPx *  deviceWidthDpx / uiHeightPx;
}

