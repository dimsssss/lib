const { _curry } = require("../internal/_curry")

const take = _curry((l, iter) => {
    const result = []
    const elements = iter[Symbol.iterator]()

    let current
    while (!(current = elements.next()).done) {
        result.push(current.value)

        if (result.length === l) {
            return result
        }
    }
    return result
})

module.exports = {
    take
}
