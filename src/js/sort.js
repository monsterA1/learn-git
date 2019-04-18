function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // 比较相邻元素
                arr[j] = arr.splice(j + 1, 1, arr[j])[0];
            }
        }
    }
    return arr;
}
function selectionSort(arr) {
    const len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                minIndex = j; // 寻找最小值对应的索引
            }
        }
        if (minIndex === i) continue;
        arr[i] = arr.splice(minIndex, 1, arr[i])[0];
    }
    return arr;
}
function insertionSort(arr) {
    const len = arr.length;
    let current, pointer;
    for (let i = 1; i < len; i += 1) {
        current = arr[i];
        pointer = i;
        while (pointer >= 0 && current < arr[pointer - 1]) { // 每次向前比较
            arr[pointer] = arr[pointer - 1]; // 前一项大于指针项，则向前移动一项
            pointer -= 1;
        }
        arr[pointer] = current; // 指针项还原成当前项
    }
    return arr;
}
function mergeSort(arr) {
    const len = arr.length;

    if (len < 2) return arr; // 递归的终止条件
    const middle = Math.floor(len / 2); // 拆分左右数组
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) { // 将左右两侧比较后进行合并
    const ret = [];

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            ret.push(right.shift());
        } else {
            ret.push(left.shift());
        }
    }

    while (left.length) {
        ret.push(left.shift());
    }
    while (right.length) {
        ret.push(right.shift());
    }

    return ret;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    // left和right默认为数组首尾
    if (left < right) {
        let partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = left;
    let index = left + 1; // 满足比较条件的依次放在分割点后

    for (let i = index; i <= right; i += 1) {
        if (arr[i] < arr[pivot]) {
            arr[i] = arr.splice(index, 1, arr[i])[0];
            index += 1;
        }
    }
    arr[pivot] = arr.splice(index - 1, 1, arr[pivot])[0]; // 交换顺序时，以最后一位替换分隔项
    return index - 1;
}