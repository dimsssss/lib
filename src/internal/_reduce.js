export default function _reduce(arr, fn, init) {
    let index = 0

    if (!init) {
        init = arr[0]
        index = 1
    }

    for (; index < arr.length; index++) {
        init = fn(init, arr[index])
    }

    return init
}
