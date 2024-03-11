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

const partial = (fn, ...arg) => {
    let args = arg
    let undefinedIndexs = []

    for (let i = 0; i < arg.length; i++) {
        if (arg[i] === undefined) {
            undefinedIndexs.push(i)
        }
    }

    return function(...otherArgs) {
        for (let i = 0; i < Math.min(undefinedIndexs.length, otherArgs.length); i++) {
            args[undefinedIndexs[i]] = otherArgs[i]
        }

        return fn.apply(null, args)
    }
}

module.exports = {
    unary,
    once,
    curry,
    partial
}
