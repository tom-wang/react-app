export const TEST_ACTION = 'TEST_ACTION';

export const createTestAction = (data) => {
    return {
        type: TEST_ACTION,
        data,
    }
}

export const createTestActionAsync = (data) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({
                type: TEST_ACTION,
                data,
            });
        }, 1000);
    }
}

export const createTestActionPromise = (data) => {
    return new Promise((resolve) => {
        // do sth async
        setTimeout(() => {
            resolve({
                type: TEST_ACTION,
                data,
            })
        }, 1000);
    });
}