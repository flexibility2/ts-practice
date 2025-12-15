// 函数的范型
function test(args) {
    return args;
}
const res = test("aa");
const wait = (promise) => { };
wait(new Promise((resolve) => {
    resolve("ok");
}));
// 接口的范型
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const p = new Person("flexibility2");
