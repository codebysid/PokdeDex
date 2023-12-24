import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../redux-store/slices/allPokemons";
import infiniteScrolling from "../redux-store/slices/infiniteScrolling";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    infiniteScrolling,
  },
});
