const filter = (fn, arr) => {
    const result = []

    for (const value of arr) {
        if (fn(value)) {
            result.push(value)
        }

    }
    return result
}

module.exports = {
    filter
}
