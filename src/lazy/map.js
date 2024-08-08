const { _curry } = require("../internal/_curry")

const map = _curry(function *(f, iter) {
    for (element of iter) {
        yield f(element)
    }
})

module.exports = {
    map
}
