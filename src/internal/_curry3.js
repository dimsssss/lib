const { _curry1 } = require("./_curry1")
const { _curry2 } = require("./_curry2")
const { _isPlaceholder } = require("./_isPlaceholder")

function _curry3(fn) {
    return function f3(a, b, c) {
        if (arguments.length === 0) {
            return f3
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(a)) {
                return f3
            }
            return _curry2(function(_b, _c) { return fn(a, _b, _c)})
        }

        if (arguments.length === 2) {
            if (_isPlaceholder(a) && _isPlaceholder(b)) {
                return f3
            }

            if (_isPlaceholder(a)) {
                return _curry2(function(_a, _c) { return fn(_a, b, _c) })
            }

            if (_isPlaceholder(b)) {
                return _curry2(function(_b, _c) { return fn(a, _b, _c) })
            }
            return _curry1(function(_c) { return fn(a, b, _c) })
        }

        if (_isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)) {
            return f3
        }

        if (_isPlaceholder(a) && _isPlaceholder(b)) {
            return _curry2(function(_a, _b) { return fn(_a, _b, c) })
        }

        if (_isPlaceholder(a) && _isPlaceholder(c)) {
            return _curry2(function(_a, _c) { return fn(_a, b, _c) })
        }

        if (_isPlaceholder(b) && _isPlaceholder(c)) {
            return _curry2(function(_b, _c) { return fn(a, _b, _c) })
        }

        if (_isPlaceholder(a)) {
            return _curry1(function(_a) { return fn(_a, b, c) })
        }

        if (_isPlaceholder(b)) {
            return _curry1(function(_b) { return fn(a, _b, c) })
        }

        if (_isPlaceholder(c)) {
            return _curry1(function(_c) { return fn(a, b, _c) })
        }

        return fn(a, b, c)
    }
}

module.exports = {
    _curry3
}