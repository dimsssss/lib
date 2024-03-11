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

    return function(...otherArgs) {
        let argIndex = 0
        
        for (let i = 0; i < args.length && i < otherArgs.length; i++) {
            if (args[i] === undefined) {
                args[i] = otherArgs[argIndex]
                argIndex++
            }
        }

        if (argIndex === 0) {
            args = otherArgs
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
