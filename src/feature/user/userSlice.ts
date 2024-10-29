import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  name: string;
  point: number;
}

const initialState: CounterState = {
  name: '',
  point: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addPoint: state => {
      state.point += 1;
    },
    subPoint: state => {
      state.point -= 1;
    },
  },
});

export const {saveName, addPoint, subPoint} = userSlice.actions;
export const userInfo = state => state.user;
export default userSlice.reducer;
