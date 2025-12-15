// 函数的范型
function testR<T>(args: T): T {
  return args;
}
const res = testR<string>("aa");

const wait = <T>(promise: Promise<T>): void => {};

wait(
  new Promise<string>((resolve) => {
    resolve("ok");
  })
);

// 接口的范型
class Person<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
  getName(): T {
    return this.name;
  }
}
const p = new Person<string>("flexibility2");

// 接口

interface Box<T> {
  value: T;
}
