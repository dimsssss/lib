/**
 * reduce fn description
 * @callback cb
 * @param {*} element
 * @param {*} acc
 * 
 */

/**
 * 
 * @param {cb} fn 
 * @param {Iterable} iter 
 * @param {*} init 
 * @returns 
 */
const reduce = function *(fn, iter, init) {
    if (!init) {
        iter = iter[Symbol.iterator]()
        init = iter.next().value
    }

    for (const element of iter) {
        yield init = fn(element, init)
    }

    return init
}

module.exports = {
    reduce
}
