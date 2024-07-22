/**
 * Iterable 프로토콜을 이용한 reduce
 * @param {Function} fn 
 * @param {Iterable} iter 
 * @param {*} init 
 * @returns 
 */
const reduce = (fn, iter, init) => {
    if (!init) {
        iter = iter[Symbol.iterator]()
        init = iter.next().value
    }

    for (const element of iter) {
        init = fn.apply(this, [init, element])
    }

    return init
}

module.exports = {
    reduce
}
