exports.nperm = function (arr, n) {
    arr = arr.slice(0);
    var res = [];
    while (arr.length > 1) {
        var i = n % arr.length;
        n = Math.floor(n / arr.length);
        res.push(arr[i]);
        arr.splice(i, 1);
    }
    res.push(arr[0]);
    return res;
}
