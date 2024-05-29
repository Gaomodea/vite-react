
import { createSlice } from '@reduxjs/toolkit'

const store = createSlice({
  name: 'counter',

  initialState: {
    count: 2
  },

  reducers: {
    increment (state) {
      state.count++
    },

    decrement (state) {
      state.count--
    },

    addToNum (state, action: { type: string, payload: number }) {
      state.count += action.payload
    }
  }
})

export const { increment, decrement, addToNum } = store.actions
const reducer = store.reducer

export default reducer