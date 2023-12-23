module.exports = function curry(fn) {
  let args = [];

  return function rec(arg) {
    args = [...args, arg];

    if (args.length > fn.length) {
      return fn(args.slice(0, fn.length));
    }

    if (args.length === fn.length) {
      return fn(...args);
    }

    return rec;
  };
}
