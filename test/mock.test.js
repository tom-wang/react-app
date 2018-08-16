jest.mock('./ModuleA');
let { moduelA, fnA } = require('./ModuleA')

fnA.mockImplementation(() => {
    console.log('I am mock fnA');
});

fnA();
