"use server";
import { storeInitialState } from "@/redux-store/slices/allPokemons";
import { updateInfiniteScrollPage } from "@/redux-store/slices/infiniteScrolling";
import { store } from "@/redux-store/store";

let startingNumberRecord = new Set();

export async function fetchPokemon(startingNumber = null) {
  const results = [];

  while (startingNumberRecord.has(startingNumber)) {
    startingNumber = startingNumber + 30;
  }
  for (let i = startingNumber; i <= startingNumber + 29; i++) {
    if (i === 0) continue;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

    results.push({
      ...(await data.json()),
      image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${i}.svg`,
    });
  }
  store.dispatch(storeInitialState(results));
  store.dispatch(updateInfiniteScrollPage(startingNumber + 30));
  startingNumberRecord.add(startingNumber);
  return results;
}

export async function readStore() {
  const reduxStore = store.getState();
  return reduxStore;
}

export async function getPokemonById(id) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return {
    ...(await data.json()),
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`,
  };
}
