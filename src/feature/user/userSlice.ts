import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface userState {
  name: string;
  point: number;
}

const initialState: userState = {
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
      state.point += 10;
    },
    subPoint: state => {
      state.point = state.point - 5 > 0 ? state.point - 5 : 0;
    },
  },
});

export const {saveName, addPoint, subPoint} = userSlice.actions;
export const userInfo = state => state.user;
export default userSlice.reducer;
