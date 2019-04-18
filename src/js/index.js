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
Array.from({length:5}, (v, i) => i+1).reduce((p,v)=>p*v)