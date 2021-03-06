const queryString = require('querystring');

export default function queryMiddleware() {
    return next => action => {
        switch (action.type) {
            case '@@router/LOCATION_CHANGE': {
                const newPayload = {
                    ...action.payload,
                    query: queryString.parse(action.payload.search.substr(1))
                };
                const newAction = {
                    ...action,
                    payload: newPayload
                };
                return next(newAction);
            }
            default: {
                return next(action);
            }
        }
    };
}
