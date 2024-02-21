import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
        console.log('payload',action.payload)
        console.log('type',action.type)

      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
        console.log('payload',action.payload)
        console.log('type',action.type)
        
      state.value -= action.payload
    },
  },
  
})

export const { increment, decrement, incrementByAmount,decrementByAmount } = counterSlice.actions

export default counterSlice.reducer