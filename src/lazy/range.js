const range = function *(l) {
    for (let i = 0; i < l; i++) {
        yield i
    }
}

module.exports = {
    range
}
