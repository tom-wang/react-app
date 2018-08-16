beforeEach(() => console.log('1 - beforeEach'));
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));

function sum(a, b) {
    return a + b;
}
/* 单独跑这个用例
test.only('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
*/

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

//测试异步代码
function fetchData(cb) {
    setTimeout(() => {
        cb('peanut butter');
    }, 10)
}
test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});

describe('this is a block', () => {
    beforeEach(() => console.log('2 - beforeEach'));
    beforeAll(() => console.log('2 - beforeAll'));
    afterAll(() => console.log('2 - afterAll'));

    test('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    test('adds 2 + 3 to equal 5', () => {
        expect(sum(2, 3)).toBe(5);
    });
});
