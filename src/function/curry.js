/**
 * 
 * Regardless of the length of the parameter, 
 * it exactly matches the number of arguments of the first curried function
 * 
 * @param {@callback cb} fn 
 * @returns {Function}
 */

const curry = function(fn) {
    return function rec(...arg) {
        if (arg.length < fn.length) {
            return rec.bind(this, ...arg)
        }
        return fn.apply(this, arg)
    }
}

module.exports = {
    curry,
}
