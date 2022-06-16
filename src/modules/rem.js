document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 3.75 + "px"

// 窗口宽度发生改变 触发onresize 如：横竖屏
window.onresize = function () {
    document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 3.75 + "px"
}