<template>
    <h1>Notas</h1>
    <button type="button" class="btn btn-primary" @click="createNota">Nova Nota</button>
    <div class="d-flex flex-wrap" v-for="nota in notas">
        <Nota :texto="nota.texto" :color="nota.color" />
    </div>
</template>

<script>
import Nota from '@/components/Nota.vue';

export default {
    components: {
        Nota
    },
    data() {
        return {
            notas: [],
            newNota: {
                color: "",
                texto: ""
            }
        }
    },
    methods: {
        createNota() {
            this.notas.push(this.newNota)
        }
    }
}
</script>

<style>
    textarea {
        resize: none;
    }
</style>