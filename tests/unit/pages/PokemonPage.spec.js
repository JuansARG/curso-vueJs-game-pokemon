import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from '@/pages/PokemonPage'
import { mocksPokemons } from "../mocks/pokemons.mock"


describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
        jest.clearAllMocks()
    })

    test('Debe hacer match con el snapshot antes de cargar los pokemons', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe hacer match con el snapshot cuando cargan los pokemons', () => {

        const wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: mocksPokemons,
                    pokemon: mocksPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                    showOptions: true
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('Debe llamar mixPokemonArray al montar', () => {

        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        const wrapper = shallowMount( PokemonPage )
        expect( mixPokemonArraySpy ).toHaveBeenCalled()

    })

    test('Debe mostrar los componentes CompPokemonPicture y CompPokemonOptions', () => {

        const wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: mocksPokemons,
                    pokemon: mocksPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                    showOptions: true
                }
            }
        })

        const compPokemonPicture = wrapper.findComponent('comp-pokemon-picture-stub')
        const compPokemonOptions = wrapper.findComponent('comp-pokemon-options-stub')

        expect( compPokemonPicture.exists() ).toBeTruthy()
        expect( compPokemonPicture.attributes('pokemonid') ).toBe( String(mocksPokemons[0].id) )

        expect( compPokemonOptions.exists() ).toBeTruthy()
        expect( compPokemonOptions.attributes('pokemons') ).toBeTruthy()
        

    })

    test('Pruebas con checkAnswer en caso de respuesta correcta', async() => {

        const wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: mocksPokemons,
                    pokemon: mocksPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                    showOptions: true
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect( wrapper.find('h2').exists() ).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBeTruthy()
        expect( wrapper.find('h2').text() ).toBe( `Correcto, es ${ mocksPokemons[0].name.toUpperCase() }` )

    })

    test('Pruebas con checkAnswer en caso de respuesta incorrecta', async() => {

        const wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: mocksPokemons,
                    pokemon: mocksPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                    showOptions: true
                }
            }
        })

        await wrapper.vm.checkAnswer(4)

        expect( wrapper.vm.message ).toBe( `Oops, era ${ mocksPokemons[0].name.toUpperCase() }` )
    })

})
