const filter = function *(f, iter) {
    for (const element of iter) {
        if (f(element)) {
            yield element
        }
    }
}

module.exports = {
    filter
}
