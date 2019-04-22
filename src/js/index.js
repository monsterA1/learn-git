// 洗牌函数
function shuffle(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
        const rand = Math.floor(Math.random() * l);
        if (rand !== i) {
            arr[i] = arr.splice(rand, 1, arr[i])[0];
        }
    }
    return arr;
}

function binarySearch(item, arr) {
    arr = quickSort(arr); // 排序

    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        min = Math.floor((low + high) / 2);
        if (arr[mid] < item) {
            low = mid + 1;
        } else if (arr[mid] > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
// 5的阶乘
Array.from({ length: 5 }, (v, i) => i + 1).reduce((p, v) => p * v)

/**
 * 数组的深拷贝函数
 * @param {Array} src 
 * @param {Array} target 
 */
function cloneArr(src, target) {
    for (let item of src) {
        if (Array.isArray(item)) {
            target.push(cloneArr(item, []))
        } else if (typeof item === 'object') {
            target.push(deepClone(item, {}))
        } else {
            target.push(item)
        }
    }
    return target
}

/**
 * 对象的深拷贝实现
 * @param {Object} src 
 * @param {Object} target 
 * @return {Object}
 */
function deepClone(src, target) {
    const keys = Reflect.ownKeys(src)
    let value = null

    for (let key of keys) {
        value = src[key]

        if (Array.isArray(value)) {
            target[key] = cloneArr(value, [])
        } else if (typeof value === 'object') {
            // 如果是对象而且不是数组, 那么递归调用深拷贝
            target[key] = deepClone(value, {})
        } else {
            target[key] = value
        }
    }

    return target
}
/**
 * instanceof是通过原型链来进行判断的，所以只要不断地通过访问__proto__，就可以拿到构造函数的原型prototype。直到null停止。
 * 判断left是不是right类型的对象
 * @param {*} left 
 * @param {*} right 
 * @return {Boolean}
 */
function instanceof2(left, right) {
    let prototype = right.prototype;

    // 沿着left的原型链, 看看是否有何prototype相等的节点
    left = left.__proto__;
    while (1) {
        if (left === null || left === undefined) {
            return false;
        }
        if (left === prototype) {
            return true;
        }
        left = left.__proto__;
    }
}  