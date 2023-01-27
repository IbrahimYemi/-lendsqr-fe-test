import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { user } from './singleUser'

export interface allUsers {
  users: user[]
}

const initialState: allUsers  = {
  users: [],
}

export const allUserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAllUser: (state, action: PayloadAction< user[]>) => {
      state.users = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAllUser } = allUserSlice.actions

export default allUserSlice.reducer