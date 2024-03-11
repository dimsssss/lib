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

const curry = (fn) => {
    let args = []
    return function rec(...arg) {
        args = [...args, ...arg]

        if (args.length < fn.length) {    
            return rec
        }

        return fn.call(null, ...args)
    }
}

module.exports = {
    unary,
    once,
    curry
}
