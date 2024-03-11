const forEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}

const every = (arr, fn) => {
    let result = true

    for(const value of arr) {
        result = result && fn(value)
    }
    return result
}

const some = (arr, fn) => {
    let result = false

    for(const value of arr) {
        result = result || fn(value)
    }
    return result
}

module.exports = {
    forEach,
    every,
    some
}