import { shallowMount } from "@vue/test-utils"
import CompPokemonPicture from '@/components/CompPokemonPicture'


describe('CompPokemonPicture', () => {

    test('Debe hacer match con el snapshot', () => {

        const wrapper = shallowMount( CompPokemonPicture, {
            // asi se mandan las props a un comp en el shallowMount
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        } )
        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('Debe mostar la imagen oculta del pokemon nro 100', () => {

        const wrapper = shallowMount( CompPokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'

        const [img1, img2] = wrapper.findAll('img')

        expect( img1.exists() ).toBeTruthy()
        expect( img2 ).toBe(undefined)
        //expect( img1.classes().includes('hidden-pokemon') ).toBeTruthy()
        expect( img1.classes('hidden-pokemon') ).toBeTruthy()
        expect( img1.attributes('src') ).toBe( urlImg )

        
    })

    test('Debe mostar la imagen del pokemon si el showPokemon es true', () => {

        const wrapper = shallowMount( CompPokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const img1 = wrapper.find('img')

        expect( img1.exists() ).toBeTruthy()
        expect( img1.classes('hidden-pokemon') ).toBeFalsy()
        expect( img1.classes('fade-in') ).toBeTruthy()

    })

})