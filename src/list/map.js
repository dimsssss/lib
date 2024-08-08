const { _curry } = require('../internal/_curry')

const map = _curry((fn, arr) => {
    const result = []

    for (const value of arr) {
        result.push(fn(value))
    }
    return result
})

module.exports = {
    map
}
