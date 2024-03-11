const unary = (fn) => {
    if (fn.length === 1) {
        return fn
    }
    return (arg) => fn(arg)
}

const once = (fn) => {
    let done = false

    return function() {
        return done ? undefined : ((done = true), fn.apply(this, arguments))
    }
}

module.exports = {
    unary,
    once
}
