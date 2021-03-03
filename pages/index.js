import Layout from '../components/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import { useState } from "react";
import PokemonList from '../components/PokemonList';
export default function Home({ pokemon }) {
    const [keyword, setKeyWord] = useState("");
  const filteredPokemon = pokemon.filter(
    (poke) =>
      poke.name.toLowerCase().includes(keyword) 
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyWord(e.target.value.toLowerCase());
  };
    return (
        <>
        <Layout title="Pokedex">
            <h1 className="text-4xl mb-8 text-center "> Pokedex</h1>
            <SearchInput  onChange={onInputChange} placeholder="Search By name"/>
            <PokemonList pokemon={filteredPokemon}/>
        </Layout>
        </>
    );
}

export async function getStaticProps(context) {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const { results } = await res.json();
        const pokemon = results.map((pokeman, index) => {
            const paddedId = ('00' + (index + 1)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
            return { ...pokeman, image};
        });
        return {
            props: { pokemon },
        };
    } catch (err) {
        console.error(err);
    }
}
