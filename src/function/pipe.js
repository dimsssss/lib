const { _reduce } = require('../internal/_reduce')

/**
 * 
 * @param  {...any} args 
 * @returns 
 */
const pipe = (...args) => {
    return _reduce((fn, acc) => fn(acc), args)
}

const compose = (...args) => {
    return _reduce((fn, acc) => fn(acc), args.reverse())
}

module.exports = {
    pipe,
    compose
}

// b625e172 (HEAD) Initial commit
// ef0db38e Initial separation from eweda
// 88a242b5 Adding missing doc file.
// c9a37395 Converting a few more functions.
// bbf5caa4 some more built in von Neumann style, to support lambda style...
// b0e00929 update package.json
// 1041d811 Object.keys not as fast as for-in loop
// 89ee1deb update docs, esp. splice, which has a different contract
// 93c9602b Exposing curry function
// b7f44b8d Documenting curry
// 392123bb Adding invoker function and starting to employ it on a few String functions.
// e773b903 Adding tests for substring etc.
// c4c9e1f7