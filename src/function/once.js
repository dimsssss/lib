const once = (fn) => {
    let done = false

    return (...arg) => {
        if (done) return
        done = true
        return fn(...arg)
    }
}