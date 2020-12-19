function create() {
    let a = 100
    return function () {
        conslir.log(a)
    }
}

const fn = create()
const a = 200
fn()//100


function print () {
    const a = 200
    fn()
}
const a=100
function fn() {
    console.log(a)
}
print(fn)//100

// 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方