String.prototype.upperFirstCharacter = function () {
    return (this.charAt(0).toUpperCase() + this.slice(1))
};

String.prototype.getUrlQueryObj = function () {
    return (this
        .slice(1)
        .split('&')
        .map(p => p.split('='))
        .reduce((obj, [key, value]) => ({...obj, [key]: value}), {}))
};

String.prototype.shortName = function (maxLength = 15) {
    if(this.length > maxLength) {
        return this.substring(0, maxLength) + "...";
    }
    return this;
};
