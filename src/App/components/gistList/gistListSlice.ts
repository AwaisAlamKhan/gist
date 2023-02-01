import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { User } from  '../../../interfaces/user.interface'

const gistList = createSlice({
  name: "gistList",
  initialState: [],
  reducers: {
    setGistList(state, { payload }: any) {
      return (state = payload);
    },
  },
});

export const { setGistList } = gistList.actions;

export default gistList.reducer;
