import { shallowMount } from "@vue/test-utils";
import CompPokemonOptions from '@/components/CompPokemonOptions'
import { mocksPokemons } from "../mocks/pokemons.mock"

describe('CompPokemonOptions', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( CompPokemonOptions, {
            props: {
                pokemons: mocksPokemons
            }
        } )
    })

    test('Debe hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe mostrar las 4 opciones correctamente', () => {

        const liTags = wrapper.findAll('li')
        expect( liTags.length ).toBe(4)
        expect( liTags[0].text() ).toBe( 'BULBASAUR' )
        expect( liTags[1].text() ).toBe( 'IVYSAUR' )
        expect( liTags[2].text() ).toBe( 'VENUSAUR' )
        expect( liTags[3].text() ).toBe( 'CHARMANDER' )

    })

    test('Debe emitir "selection" con sus respectivos parametros al hacer click', () => {

        const [ li1, li2, li3, li4 ] = wrapper.findAll('li')
        
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        //console.log(wrapper.emitted('selection'))

        expect( wrapper.emitted('selection').length ).toBe(4)
        expect( wrapper.emitted('selection')[0] ).toEqual([1])
        expect( wrapper.emitted('selection')[1] ).toEqual([2])
        expect( wrapper.emitted('selection')[2] ).toEqual([3])
        expect( wrapper.emitted('selection')[3] ).toEqual([4])
    })

})