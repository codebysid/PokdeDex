import { fetchPokemon, getEveryPokemon, readStore } from "./actions";
import DisplayPokemon from "@/components/DisplayPokemon";

await fetchPokemon(1)

export default async function Home() {
  const { pokemon } = await readStore()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DisplayPokemon data={pokemon} />
    </main>
  );
}
