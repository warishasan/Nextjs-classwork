import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import counterSlice from './counterSlice'
import  fetchDataSlice  from './asyncSlice'


export const makeStore = () => {
    return configureStore({
        reducer: {
          counter: counterSlice,
          todos: fetchDataSlice
        },
      })
  }


export type AppStore = ReturnType<typeof makeStore>
  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// export const useAppStore: () => AppStore = useStore