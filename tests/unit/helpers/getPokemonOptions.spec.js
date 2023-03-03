import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions"
import { mocksPokemons } from "../mocks/pokemons.mock"

describe('getPokemonOptions helpers', () => {

    test('getPokemons debe regresar un arreglo de numeros', () => {

        const pokemons = getPokemons()

        expect( pokemons.length ).toBe( 650 )
        expect( pokemons[0] ).toBe( 1 )
        expect( pokemons[250] ).toBe( 251 )
        expect( pokemons[600] ).toBe( 601 )

    })

    test('getPokemonNames debe retornar un arreglo con 4 objetos con nombre e id', async() => {

        const pokemons =  await getPokemonNames([1, 2, 3, 4])
        
        expect(pokemons).toStrictEqual( mocksPokemons )

    })

    test('getPokemonsOptions debe retortar un arreglo mezclado', async() => {
        const pokemons = await getPokemonOptions()

        expect( pokemons.length ).toBe(4)
        expect( pokemons ).toEqual([
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            }
        ])
    })

})
