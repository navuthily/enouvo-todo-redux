import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
const store = createStore(rootReducer,applyMiddleware(thunk));// chộ này mình dùng saga để call api
export default store;