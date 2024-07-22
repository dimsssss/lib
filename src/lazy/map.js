const map = function *(f, iter) {
    for (element of iter) {
        yield f(element)
    }
}

module.exports = {
    map
}
