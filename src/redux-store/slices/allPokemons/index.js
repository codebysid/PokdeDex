import { createSlice } from "@reduxjs/toolkit";

export const AllPokemonSlice = createSlice({
  initialState: [],
  name: "AllPokemonSlice",
  reducers: {
    storeInitialState: (state, action) =>
      state.length > 0 ? [...state, ...action.payload] : action.payload,
  },
});

export const { storeInitialState } = AllPokemonSlice.actions;
export default AllPokemonSlice.reducer;
