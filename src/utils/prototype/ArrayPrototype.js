Array.prototype.indexOfObject = function (obj, key) {
    for (let i = 0; i < this.length; i++) {
        if (key) {
            if (obj[key] === this[i][key]) {
                return i;
            }
        } else {
            if (JSON.stringify(obj) === JSON.stringify(this[i])) {
                return i;
            }
        }
    }
    return -1;
};

Array.prototype.subArray = function (from, to) {
    if (from < 0) from = 0;
    if (to > this.length) to = this.length;
    if (from > to) return [];

    let rs = [];
    for (let i = from; i <= to; i++) rs.push(this[i]);
    return rs;
};

Array.prototype.copyValue = function () {
    return (JSON.parse(JSON.stringify(this)));
};
