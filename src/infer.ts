type Msg = "hello flexibility2";
type GetMsg<T> = T extends `hello ${infer N}` ? N : never;
type Res = GetMsg<Msg>; // type Res = "flexibility2"

type pickFnReturnType<T> = T extends () => infer R ? R : never;
function test(name: string, age: number) {
  return 1;
}
type test1 = pickFnReturnType<typeof test>; // type test1 = number
type pickArrayItemType<T> = T extends Array<infer R> ? R : never;
type test2 = pickArrayItemType<string[]>; // type test2 = string

type pickFnParameterType<T> = T extends (...arg: infer R) => void ? R : never;
type test3 = pickFnParameterType<typeof test>;

type pickFistParameterType<T> = T extends (arg1: infer R, ...args: any) => any
  ? R
  : never;
type test4 = pickFistParameterType<typeof test>; // type test4 = string
console.log("test4: ");
