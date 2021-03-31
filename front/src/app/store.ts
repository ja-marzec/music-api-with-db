import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import musicReducer from '../slices/musicSlice';

export const store = configureStore({
  reducer: {
    music: musicReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
