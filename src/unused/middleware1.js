export default function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        console.log('middleware1', JSON.stringify(action))

        return next(action);
      };
    };
  };