import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homePageReducer from './screens/HomePage/slice';
import brandPageReducer from './screens/BrandPage/slice';
import productPageReducer from './screens/ProductsPage/slice';

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    brandPage: brandPageReducer,
    productPage: productPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
