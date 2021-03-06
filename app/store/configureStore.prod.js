import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import queryMiddleware from '../middlewares/react-router-query-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createHistory();
const router = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(router),
            applyMiddleware(queryMiddleware),
            applyMiddleware(thunk)
        )
    );
}
