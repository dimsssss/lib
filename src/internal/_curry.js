/**
 * 
 * @param {@callback cb} fn 
 * @returns {Function}
 */

const _curry = function(fn) {
    return function rec(...arg) {
        if (arg.length < fn.length) {
            return rec.bind(this, ...arg)
        }
        return fn.apply(this, arg.slice(0, fn.length))
    }
}

module.exports = {
    _curry,
}
