/**
 *
 * @param {cb} fn 
 * @param {Iterable} iter 
 * @param {*} init 
 * @returns 
 */
const _reduce = (fn, iter, init) => {
    if (!init) {
        iter = iter[Symbol.iterator]()
        init = iter.next().value
    }

    for (const element of iter) {
        init = fn(element, init)
    }

    return init
}

module.exports = {
    _reduce
}
