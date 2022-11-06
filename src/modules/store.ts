import { configureStore } from '@reduxjs/toolkit'
import resasReducer from '~/modules/features/resasSlice'

export const store = configureStore({
  reducer: {
    resas: resasReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
