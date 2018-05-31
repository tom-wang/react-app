export const TEST_ACTION = 'TEST_ACTION';

export const createTestAction = (data) => {
    return {
        type: TEST_ACTION,
        data,
    }
}

export const createTestActionAsync = (data) => {
    return (dispatch, getState) => {
        // 这里的返回值可以被调用它的dispatch继续返回
        // 当然这个函数体内可以不调用dispatch，比如只是发起一个ajax请求
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