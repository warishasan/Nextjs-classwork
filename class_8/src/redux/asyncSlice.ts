import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface dataState {
  isFetching:boolean
  error:boolean
  data?:{userId:number,id:number,title:string,completed:boolean}
}

// Define the initial state using that type
const initialState: dataState = {
  isFetching:false,
  error:false,
  data:undefined
}


export const fetchDataThunk = createAsyncThunk(
    'getData',
    async () => {

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      console.log('response',response)
      const data = await response.json()

      return data

    }
    catch(e){
        console.log('error',e)
        throw(e)
    }
    },
  )

  

export const asyncSlice = createSlice({
  name: 'asyncSlice',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchDataThunk.fulfilled, (state, action) => {
      // Add user to the state array

      console.log('action',action)
      state.isFetching = false;
      state.data = action.payload;
      state.error = false;
    })

    builder.addCase(fetchDataThunk.pending, (state, action) => {
        // Add user to the state array
  
        console.log('action',action)
        state.isFetching = true;
        state.data = undefined;
        state.error = false;
      })

      builder.addCase(fetchDataThunk.rejected, (state, action) => {
        // Add user to the state array
  
        state.isFetching = false;
        state.data = undefined;
        state.error = true;
      })
  },
})

//  export const { increment, decrement, incrementByAmount,decrementByAmount } = asyncSlice.actions


export default asyncSlice.reducer