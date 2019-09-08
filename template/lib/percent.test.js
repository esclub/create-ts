"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
`
# percent

安全的计算百分比，主要用于避免意外除0导致的Infinity错误。

`;
const lib_1 = require("../lib");
test('part 3  total 44 return percent 7', () => {
    expect(lib_1.percent(3, 44)).toBe(7);
});
test('percent 会处理 total 为 0 的情况，避免出现 2/0 = Infinity 的错误', () => {
    expect(lib_1.percent(2, 0)).toBe(0);
});
test('当 part 大于 total 时候 percent 会返回大于 100 的数', () => {
    expect(lib_1.percent(11, 5)).toBe(220);
});
