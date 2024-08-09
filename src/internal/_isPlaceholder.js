const _isPlaceholder = (a) => {
    return typeof a === 'symbol' && Symbol.keyFor(Symbol.for('placeholder')) === 'placeholder';
}


module.exports = {
    _isPlaceholder
}