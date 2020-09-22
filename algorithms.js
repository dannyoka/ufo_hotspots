const binarySearch = (sortedArr, val) => {
  let left = 0;
  let right = sortedArr.length - 1;
  let pointer = Math.floor((left + right) / 2);
  while (val !== sortedArr[pointer] && left <= right) {
    if (val < sortedArr[pointer]) {
      right = pointer + 1;
      pointer = (right - left) / 2;
      console.log(sortedArr[left], sortedArr[right], sortedArr[pointer]);
    }
    if (val > sortedArr[pointer]) {
      left = pointer + 1;
      pointer = Math.floor((left + right) / 2);
      console.log(sortedArr[left], sortedArr[right], sortedArr[pointer]);
    }
  }
  return val === sortedArr[pointer] ? pointer : -1;
};

const myArr = [2, 4, 6, 8, 10, 12, 14, 18];
const myVal = 18;

const stringSearch = (longString, pattern) => {
  let counter = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== longString[i + j]) break;
      if (j === pattern.length - 1) counter++;
    }
  }
  return counter;
};

const bubbleSort = (arr) => {
  let k = arr.length;
  let noSwaps = true;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    k--;
    console.log(k);
    if (noSwaps) break;
  }

  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
};

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};

const array1 = [0, 100, 9, 20, 88, 75, 11, 2000];

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {}
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {}
}

let myList = new SinglyLinkedList();
myList.push("hello");
myList.push("goodbye");
myList.push("!");
myList.pop();
