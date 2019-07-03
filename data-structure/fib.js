/**
 * 动态规划有时被认为是一种与递归相反 的技术。递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整 个问题。动态规划解决方案从底部开始解决问题，将所有小问题解决掉，然后合并成一个 整体解决方案，从而解决掉整个大问题。
 */

/**
 * 斐波那契数列
 * 
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 */

//递归写法
function recurFib(n) {
    if (n < 2) {
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

//非递归写法
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    } else {
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n - 1];
    }
}