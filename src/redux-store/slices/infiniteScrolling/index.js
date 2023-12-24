const { createSlice } = require("@reduxjs/toolkit");

export const infiniteScrollingSlice = createSlice({
  initialState: 1,
  name: "infiniteScrollSlice",
  reducers: {
    updateInfiniteScrollPage: (state, action) => action.payload,
  },
});

export const { updateInfiniteScrollPage } = infiniteScrollingSlice.actions;
export default infiniteScrollingSlice.reducer;
