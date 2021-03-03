import React from "react";

const PokemonList = ({pokemon}) => {
  return (
    <div>
      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={index}>
            <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
              <img
                src={pokeman.image}
                alt={pokeman.name}
                className="w-20 h-20 mr-3"
              />
              <span className="mr-2 font-bold">{index + 1}.</span>
              {pokeman.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
