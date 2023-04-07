import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducer from './rootReducer'

const isProduction = process.env.NODE_ENV === "production";

const makeStore = () => {
  const enhancer = isProduction
    ? compose(applyMiddleware(thunk))
    : composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(rootReducer, enhancer);
  return store;
}
  
const store = makeStore();

// wrapper를 생성해줍니다.
const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper