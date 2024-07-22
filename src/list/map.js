const map = (fn, arr) => {
    const result = []

    for (const value of arr) {
        result.push(fn(value))
    }
    return result
}

module.exports = {
    map
}
