const { _curry1 } = require('./_curry1')
const { _isPlaceholder } = require('./_isPlaceholder')

function _curry2(fn) {
    return function f2(a, b) {
        if (arguments.length === 0) {
            return f2
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(a)) {
                return f2
            }
            return _curry1(function(_b) { return fn(a, _b) })
        }

        if (_isPlaceholder(a) && _isPlaceholder(b)) {
            return f2
        }

        if (!_isPlaceholder(a) && _isPlaceholder(b)) {
            return _curry1(function(_b) { return fn(a, _b) })
        }

        if (_isPlaceholder(a) && !_isPlaceholder(b)) {
            return _curry1(function(_a) { return fn(_a, b) })
        }

        return fn(a, b)
    }
}

module.exports = {
    _curry2
}
