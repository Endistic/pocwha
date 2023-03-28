import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ExampleState } from '../types/exampleTypes'

interface MainState {
  mainValue: number;
  activeTab: string;
}

const initialState: MainState = {
  mainValue: 0,
  activeTab: "1",
};

export const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // setMainValue: (state, action: PayloadAction<number>) => {
    //   state.mainValue = action.payload;
    // },
    updateActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
      console.log(state.activeTab);
    },
  },
});

export const {updateActiveTab } = MainSlice.actions;

export default MainSlice.reducer;
