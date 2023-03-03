import app from '@/App'
import { shallowMount } from '@vue/test-utils'


describe('test app.vue', () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallowMount( app )
    })

    test('Debe hacer match con el snapshot', () => {

        expect( wrapper.html() ).toMatchSnapshot()

    })

})