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
/*
Function.prototype.call2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    // 默认上下文是window
    context = context || window
    // 保存默认的fn
    const { fn } = context

    // 前面讲的关键，将函数本身作为对象context的属性调用，自动绑定this
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)

    // 恢复默认的fn
    context.fn = fn
    return result
}
Function.prototype.apply2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    context = context || window
    const { fn } = context

    context.fn = this
    let result
    if (Array.isArray(arguments[1])) {
        // 通过...运算符将数组转换为用逗号分隔的参数序列
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }

    context.fn = fn
    return result
}
Function.prototype.bind2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    const that = this
    // 保留之前的参数，为了下面的参数拼接
    const args = [...arguments].slice(1)

    return function F() {
        // 如果被new创建实例，不会被改变上下文！
        if (this instanceof F) {
            return new that(...args, ...arguments)
        }

        // args.concat(...arguments): 拼接之前和现在的参数
        // 注意：arguments是个类Array的Object, 用解构运算符..., 直接拿值拼接
        return that.apply(context, args.concat(...arguments))
    }
}
function test(arg1, arg2) {
  console.log(arg1, arg2)
  console.log(this.a, this.b)
}

const test2 = test.bind2({
  a: 'a',
  b: 'b'
}, 1) // 参数 1

test2(2) // 参数 2

*/