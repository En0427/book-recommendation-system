import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;