import _             from "lodash";
import ObjectManager from "../../framework/ObjectManager";

class NumberHelper {
    getMoneyFormat(number, n, x) {
        if (!_.isNumber(number)) {
            return 0;
        }
        let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return (number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.'));
    };

    formatNumber(number, digits = 1) {
        if (_.isNumber(number)) {
            return number.toFixed(digits);
        }

        return 0;
    }
}

export default ObjectManager.get(NumberHelper);
