import ModuleB, { fnB } from './ModuleB'
jest.mock('./ModuleB');

fnB.mockImplementation(() => {
    console.log('I am mock fnB');
});

fnB();
