import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {

    test('La instancia de Axios debe estar configurada correctamente', () => {

        expect( pokemonApi.defaults.baseURL )
            .toBe( 'https://pokeapi.co/api/v2/pokemon' )

    })

})