import { configureStore } from '@reduxjs/toolkit';
import prodReducer from './stateService';

export default configureStore({
  reducer: {
    products: prodReducer,
  },
});
