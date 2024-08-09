const { _isPlaceholder } = require('./_isPlaceholder')

const _curry1 = function(f) {
    return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1
        }
        return f.apply(this, arguments)
    }
}

module.exports = {
    _curry1
}
