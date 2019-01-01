// 如果用户开启隐身模式解决方法
let defaultCity = '上海'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
        city: defaultCity
}