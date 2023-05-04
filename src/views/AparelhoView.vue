<template>
    <div class="d-inline-flex" style="padding: 10px">
        <div class="input-group" style="padding: 10px">
            <span class="input-group-text" id="buscaLabel">Pesquisar</span>
            <input class="form-control" type="search" id="buscaId" aria-label="Busca" 
                    placeholder="Digite as tags de busca" aria-describedby="buscaLabel">
        </div>
        <button class="btn btn-primary h-50" style="margin-left: 10px; heigth: 10px;"
                @click="toggleAparelhoForm">Novo Aparelho</button>  
    </div>
    <aparelho-form v-if="showAparelhoForm"/>
</template>

<script>
import AparelhoForm from '@/components/AparelhoForm.vue'

export default {
    data() {
        return {
            showAparelhoForm: false
        }
    },
    methods: {
        toggleAparelhoForm() {
            this.showAparelhoForm = !this.showAparelhoForm
        }
    },
    components: {
        AparelhoForm
    }
}
</script>

<style>

</style>