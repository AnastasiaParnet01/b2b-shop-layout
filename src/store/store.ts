import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
});

export const setupStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
