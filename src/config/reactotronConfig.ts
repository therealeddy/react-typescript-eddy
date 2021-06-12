/* eslint-disable @typescript-eslint/no-explicit-any */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronSaga({}))
    .use(reactotronRedux())
    .connect();

  tron.clear?.();

  console.tron = tron;
}
