exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, number) => sum + number);
  },

  remove: function(arr, item) {
    return arr.filter(number => item !== number);
  },

  removeWithoutCopy: function(arr, item) {
    arr = arr.filter(number => item !== number);
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    return arr.slice(0, arr.length - 1);
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    return arr.slice(1);
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(el => el === item).length;
  },

  duplicates: function(arr) {
    const duplicatesArray = [];
    for (let i = 0; i < arr.length; i++) {
      let currentEl = arr[i];
      if (arr.lastIndexOf(currentEl) === i) return;
      duplicatesArray.push(currentEl);
      arr = arr.filter(el => el !== currentEl);
      i = i > 0 ? i-- : i;
    }
    return duplicatesArray;
  },

  square: function(arr) {
    return arr.map(number => number * number);
  },

  findAllOccurrences: function(arr, target) {
    const duplicatesIndexes = [];
    arr.forEach((item, index) => {
      if (item === target) {
        duplicatesIndexes.push(index);
      }
    });
    return duplicatesIndexes;
  }
};
