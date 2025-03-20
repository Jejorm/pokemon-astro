import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { FavoritePokemonCard } from '@components/pokemons/FavoritePokemonCard'
import { createSignal, For } from "solid-js"

const getAllPokemon = (): FavoritePokemon[] => {
  return JSON.parse(localStorage.getItem('favorites') ?? '[]')
}

export const FavoritesPokemon = () => {
  const [allPokemon, setAllPokemon] = createSignal(getAllPokemon())

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={allPokemon()}>
        {
          pokemon => (
            <FavoritePokemonCard pokemon={pokemon} />
          )
        }
      </For>
    </div>
  )
}