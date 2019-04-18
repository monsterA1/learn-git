String.prototype.trim = String.prototype.trim || function () {
    // this.replace(/^\s+|\s+$/g, "");
    return this.replace(/^\s*(.*?)\s+$/, "$1");
}
Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1);
    var fToBind = this;
    var fNOP = function () { };
    var fBound = function () {
        return fToBind.apply(this instanceof fNOP && oThis ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
};
Date.prototype.Format = function (formatStr) {
    var str = formatStr ? String(formatStr) : 'yyyy-MM-dd hh:mm:ss';
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    var o = {
        "M+": this.getMonth() + 1, //  month
        "d+": this.getDate(),    //  day
        "h+": this.getHours(),   //  hour
        "m+": this.getMinutes(), //  minute
        "s+": this.getSeconds(), //  second
    };
    if (/(y+)/.test(str)) {
        str = str.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) if (new RegExp("(" + k + ")").test(str)) {
        str = str.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
    str = str.replace(/w/ig, Week[this.getDay()]);
    return str
}