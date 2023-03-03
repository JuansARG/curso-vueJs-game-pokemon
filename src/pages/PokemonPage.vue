<template>
    
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>Quien es este pokemon?</h1>
    
        <CompPokemonPicture 
            :pokemon-id="pokemon.id"
            :show-pokemon="showPokemon"/>

        <CompPokemonOptions
            v-if='showOptions'
            :pokemons="pokemonArr"
            @selection="checkAnswer"/>

        <template v-if="showAnswer">
            <h2>{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>

    </div>
    
</template>

<script>

import CompPokemonPicture from '@/components/CompPokemonPicture'
import CompPokemonOptions from '@/components/CompPokemonOptions'
import getPokemonsOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        CompPokemonPicture,
        CompPokemonOptions,
    },
    data(){
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
            showOptions: true
        }
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonsOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[rndInt]

        },
        checkAnswer( selectedId ){
            this.showPokemon = true
            this.showAnswer = true
            this.showOptions = false

            if( selectedId === this.pokemon.id ){
                this.message = `Correcto, es ${ this.pokemon.name.toUpperCase() }`
            }else{
                this.message = `Oops, era ${ this.pokemon.name.toUpperCase() }`
            }
            
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.showOptions = true
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>

<style>

</style>