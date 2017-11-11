/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newarr = [];
  for (let i = 0; i < elements.length; i++) {
    newarr[i] = cb(elements[i]);
  }
  return newarr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str[0];
};


const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // // otherwise return false
  const uniquevals = [];
  const getuniquevalues = object => {
    let allvals = [];
    const objkeys = Object.keys(object);
    for (let i = 0; i < objkeys.length; i++) {
      if (typeof object[objkeys[i]] === 'object') {
        allvals = allvals.concat(getuniquevalues(object[objkeys[i]]));
      } else {
        allvals.push(object[objkeys[i]]);
      }
    }
    return allvals;
  };
  const arr = getuniquevalues(obj);
  for (let i = 0; i < arr.length; i++) {
    if (uniquevals.includes(arr[i]) === false) {
      uniquevals.push(arr[i]);
    }
  }
  if (uniquevals.length > 1) {
    return false;
  }
  return true;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let flat = [];
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === 'object') {
      flat = flat.concat(flatten(elements[i]));
    } else {
      flat.push(elements[i]);
    }
  }
  return flat;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
