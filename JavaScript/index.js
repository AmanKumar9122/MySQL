function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(array, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log('Element not found');
}


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1; // Target not found
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i);
    }

    return arr;
}

buildMaxHeap(arr);

for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
}

return arr;

function heapify(arr, i, n) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < n && arr[left] > arr[max]) {
        max = left;
    }

    if (right < n && arr[right] > arr[max]) {
        max = right;
    }

    if (max !== i) {
        swap(arr, i, max);
        heapify(arr, max, n);
    }
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const partition = (arr, low, high) => {
        const pivot = arr[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }
    
    const sort = (arr, low, high) => {
        if (low < high) {
            const pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }
    
    sort(arr, 0, arr.length - 1);
    return arr;
}

// Usage example:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(array)); // [11, 12, 22, 25, 34, 64, 90]
